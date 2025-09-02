import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import Blog from '../models/Blog';
import { uploadImageToCloudinary } from '../utils/imageUploader';

// Get all blogs with optional filtering
export const getAllBlogs = async (req: Request, res: Response): Promise<void> => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;
    const search = req.query.search as string;
    const tag = req.query.tag as string;
    const published = req.query.published !== 'false'; // Default to published only

    let query: any = {};
    
    if (published) {
      query.isPublished = true;
    }

    if (search) {
      query.$text = { $search: search };
    }

    if (tag) {
      query.tags = { $in: [tag] };
    }

    const blogs = await Blog.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Blog.countDocuments(query);

    res.json({
      success: true,
      data: blogs,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Get featured blogs (latest 3 published)
export const getFeaturedBlogs = async (req: Request, res: Response): Promise<void> => {
  try {
    const blogs = await Blog.find({ isPublished: true })
      .sort({ createdAt: -1 })
      .limit(3);

    res.json({
      success: true,
      data: blogs
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Get single blog by ID
export const getBlogById = async (req: Request, res: Response): Promise<void> => {
  try {
    const blog = await Blog.findById(req.params.id);
    
    if (!blog) {
      res.status(404).json({
        success: false,
        message: 'Blog post not found'
      });
      return;
    }

    // Only return published blogs for public access
    if (!blog.isPublished && req.query.admin !== 'true') {
      res.status(404).json({
        success: false,
        message: 'Blog post not found'
      });
      return;
    }

    res.json({
      success: true,
      data: blog
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Create new blog post
export const createBlog = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation errors',
        errors: errors.array()
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'Blog image file is required'
      });
    }

    // Upload image buffer to Cloudinary
    const imageUploadResult:any = await uploadImageToCloudinary(req.file.buffer, 'blogs', 1200, 675);

    const blogData = {
      ...req.body,
      image: imageUploadResult?.secure_url
    };

    const blog = new Blog(blogData);
    await blog.save();

    res.status(201).json({
      success: true,
      message: 'Blog post created successfully',
      data: blog
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};


// Update blog post
export const updateBlog = async (req: Request, res: Response): Promise<void> => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        success: false,
        message: 'Validation errors',
        errors: errors.array()
      });
      return;
    }

    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!blog) {
      res.status(404).json({
        success: false,
        message: 'Blog post not found'
      });
      return;
    }

    res.json({
      success: true,
      message: 'Blog post updated successfully',
      data: blog
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Delete blog post
export const deleteBlog = async (req: Request, res: Response): Promise<void> => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);

    if (!blog) {
      res.status(404).json({
        success: false,
        message: 'Blog post not found'
      });
      return;
    }

    res.json({
      success: true,
      message: 'Blog post deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Get all unique tags
export const getAllTags = async (req: Request, res: Response): Promise<void> => {
  try {
    const tags = await Blog.distinct('tags', { isPublished: true });
    
    res.json({
      success: true,
      data: tags.sort()
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};
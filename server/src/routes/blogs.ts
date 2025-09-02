import express from 'express';
import multer from 'multer';
import {
  getAllBlogs,
  getFeaturedBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
  getAllTags
} from '../controllers/blogController';
import { validateBlog } from '../middleware/validation';
import { parseTagsMiddleware } from '../middleware/parseTagsMiddleware';
const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router();

// GET /api/blogs - Get all blogs with filtering
router.get('/', getAllBlogs);

// GET /api/blogs/featured - Get featured blogs
router.get('/featured', getFeaturedBlogs);

// GET /api/blogs/tags - Get all unique tags
router.get('/tags', getAllTags);

// GET /api/blogs/:id - Get single blog
router.get('/:id', getBlogById);

// POST /api/blogs - Create new blog
router.post('/', parseTagsMiddleware, upload.single('image'), validateBlog, createBlog);

// PUT /api/blogs/:id - Update blog
router.put('/:id', validateBlog, updateBlog);

// DELETE /api/blogs/:id - Delete blog
router.delete('/:id', deleteBlog);

export default router;
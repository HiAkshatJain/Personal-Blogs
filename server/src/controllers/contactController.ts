import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import Contact from '../models/Contact';

// Get all contact messages (admin only)
export const getAllContacts = async (req: Request, res: Response): Promise<void> => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;

    const contacts = await Contact.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Contact.countDocuments();

    res.json({
      success: true,
      data: contacts,
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

// Get single contact message by ID
export const getContactById = async (req: Request, res: Response): Promise<void> => {
  try {
    const contact = await Contact.findById(req.params.id);
    
    if (!contact) {
      res.status(404).json({
        success: false,
        message: 'Contact message not found'
      });
      return;
    }

    res.json({
      success: true,
      data: contact
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Create new contact message (public endpoint)
export const createContact = async (req: Request, res: Response): Promise<void> => {
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

    const contact = new Contact(req.body);
    await contact.save();

    res.status(201).json({
      success: true,
      message: 'Message sent successfully! We\'ll get back to you soon.',
      data: contact
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Mark contact message as read
export const markAsRead = async (req: Request, res: Response): Promise<void> => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { isRead: true },
      { new: true }
    );

    if (!contact) {
      res.status(404).json({
        success: false,
        message: 'Contact message not found'
      });
      return;
    }

    res.json({
      success: true,
      message: 'Message marked as read',
      data: contact
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Delete contact message
export const deleteContact = async (req: Request, res: Response): Promise<void> => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      res.status(404).json({
        success: false,
        message: 'Contact message not found'
      });
      return;
    }

    res.json({
      success: true,
      message: 'Contact message deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};
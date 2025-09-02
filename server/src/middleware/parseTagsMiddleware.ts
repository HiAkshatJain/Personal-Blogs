import { Request, Response, NextFunction } from 'express';

export const parseTagsMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (req.body.tags && typeof req.body.tags === 'string') {
    try {
      req.body.tags = JSON.parse(req.body.tags);
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: 'Invalid tags format: must be a JSON array'
      });
    }
  }
  next();
};

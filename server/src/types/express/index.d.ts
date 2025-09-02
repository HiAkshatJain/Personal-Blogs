// types/express/index.d.ts
//@ts-nocheck
import * as express from 'express';
import multer from 'multer';

declare global {
  namespace Express {
    interface Request {
      file?: multer.File; // single file upload (fine)
      files?: { [fieldname: string]: multer.File[] } | multer.File[]; // match original type exactly
    }
  }
}

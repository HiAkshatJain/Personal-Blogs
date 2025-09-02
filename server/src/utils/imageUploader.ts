//@ts-nocheck
import { v2 as cloudinary } from 'cloudinary';

export const uploadImageToCloudinary = async (fileBuffer, folder, height, quality) => {
  try {
    const options = { folder };
    if (height) options.height = height;
    if (quality) options.quality = quality;
    options.resource_type = 'auto';

    return await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(options, (error, result) => {
        if (error) return reject(error);
        resolve(result);
      });
      uploadStream.end(fileBuffer);
    });
  } catch (error) {
    console.error("Error while uploading image", error);
    throw error;  // rethrow so caller knows it failed
  }
};

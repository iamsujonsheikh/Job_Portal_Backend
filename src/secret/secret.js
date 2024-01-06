import dotenv from "dotenv";
dotenv.config();


export const PORT = process.env.PORT || 8000;
export const DB = process.env.DATABASE_URL;
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
export const SMTP_USER_NAME = process.env.SMPT_USER_NAME;
export const SMTP_USER_PASSWORD = process.env.SMPT_USER_PASSWORD;
export const CLIENT_URL = process.env.CLIENT_URL;

export const EMAIL_REGEX = "/^[^\s@]+@[^\s@]+\.[^\s@0-9]+$/i";
export const PHOTO_PATH = "./public/images/";
export const ALLOWED_FILE_TYPES = ["png", "jpg", "jpeg", "PNG", "JPG", "JPEG"];
export const MAX_FILE_SIZE = 10485760;
export const PDF_PATH = "./public/pdfs/"

import "dotenv/config";

export const NODE_ENV = process.env.NODE_ENV || "development";
export const PORT = process.env.PORT || 4000;
export const DATABASE_HOST = process.env.DATABASE_HOST;
export const DATABASE_USER = process.env.DATABASE_USER;
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
export const DATABASE_NAME = process.env.DATABASE_NAME;
export const DATABASE_PORT = process.env.DATABASE_PORT;
export const SECRET_WORD = process.env.SECRET_WORD;
export const EMAIL_ADMIN = process.env.EMAIL_ADMIN;
export const EMAIL_ADMIN_PASSWORD = process.env.EMAIL_ADMIN_PASSWORD;
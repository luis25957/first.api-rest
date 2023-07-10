import {config} from 'dotenv'

config()

export const PORT = process.env.PORT || 3006
export const DB_USER = process.env.DB_USER || 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD || ''
export const DB_PORT=process.env.DB_PORT || 3306
export const DB_HOOST = process.env.DB_HOOST || 'localhost'
export const DB_DATABASE=process.env.DB_DATABASE || 'developtdb'
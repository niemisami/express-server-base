export default {
  port: process.env.PORT || 3000,
  db: process.env.DB,
  dbUrl: process.env.DB_URL,
  dbPort: process.env.DB_PORT,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  authSecret: process.env.AUTH_SECRET
}

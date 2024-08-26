import express from 'express';
import dotenv from 'dotenv';
import UserRouter from './Router/user.router.js';
import bodyParser from 'body-parser';
import ItemRouter from './Router/item.router.js';
import sequelize from './DB/dbConfig.js';
import cors from 'cors';
import CategoryRouter from "./Router/categories.router.js"
import "./Model/association.js"
// Load environment variables from .env file
dotenv.config();

const app = express();

// CORS configuration
app.use(cors());
app.use(express.json())
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/User', UserRouter);
app.use('/item', ItemRouter);
app.use('/category',CategoryRouter)
// Sync models with the database



//magic of association

sequelize.sync()
  .then(() => {
    console.log('Database synchronized.');
  })
  .catch(err => {
    console.error('Failed to synchronize database:', err);
  });

// Start server
// const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log(`Server started on port `);
});

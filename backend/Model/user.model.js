// models/user.model.js
import { DataTypes } from 'sequelize';
import sequelize from '../DB/dbConfig.js'; // Adjust the path as necessary
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';


dotenv.config();

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    set(value) {
      const salt = bcrypt.genSaltSync(12);
      const hashedPassword = bcrypt.hashSync(value, salt);
      this.setDataValue('password', hashedPassword);
    },
  },
});

User.checkPassword = async function (password, hashedPassword) {
  return bcrypt.compare(password, hashedPassword);
};



User.prototype.generateToken = function () {
  return jwt.sign(
    { id: this.id, email: this.email },
    process.env.JWT_SECRET,
    { expiresIn: '30d' }
  );
};

export default User;

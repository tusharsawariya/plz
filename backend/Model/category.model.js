import { DataTypes } from "sequelize";
import sequelize from "../DB/dbConfig.js"; // Ensure this path is correct and points to your sequelize instance

const Category = sequelize.define('Category', {
    category_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        field: 'category_id' // Ensure the database column name is correctly mapped if needed
    },
    category_name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'category_name' // Ensure the database column name is correctly mapped if needed
    }
}, {
    tableName: 'categories', // Specifies the table name in the database
    timestamps: false // Set to true if you want Sequelize to manage createdAt and updatedAt fields
});

export default Category;

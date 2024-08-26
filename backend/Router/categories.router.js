
import express from 'express';
import Category from '../Model/category.model.js';

const router = express.Router();

// Create a new category
router.post('/categories', async (req, res) => {
    const { category_name } = req.body;
    try {
        const category = await Category.create({ category_name });
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all categories
router.get('/categories', async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a single category by ID
router.get('/categories/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const category = await Category.findByPk(id);
        if (category) {
            res.status(200).json(category);
        } else {
            res.status(404).json({ message: 'Category not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a category by ID
router.put('/categories/:id', async (req, res) => {
    const { id } = req.params;
    const { category_name } = req.body;
    try {
        const [updated] = await Category.update({ category_name }, { where: { category_id: id } });
        if (updated) {
            const updatedCategory = await Category.findByPk(id);
            res.status(200).json(updatedCategory);
        } else {
            res.status(404).json({ message: 'Category not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a category by ID
router.delete('/categories/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await Category.destroy({ where: { category_id: id } });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).json({ message: 'Category not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;

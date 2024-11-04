const { Category } = require('../models');

// Buat kategori baru
exports.createCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const category = await Category.create({ name });
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create category', error });
    }
};

// Perbarui kategori
exports.updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const category = await Category.findByPk(id);
        if (!category) return res.status(404).json({ message: 'Category not found' });

        category.name = name;
        await category.save();

        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update category', error });
    }
};

// Hapus kategori
exports.deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findByPk(id);
        if (!category) return res.status(404).json({ message: 'Category not found' });

        await category.destroy();
        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete category', error });
    }
};

// Dapatkan daftar kategori
exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve categories', error });
    }
};

const { News, Category } = require('../models');
const { Op } = require('sequelize')

// Buat berita baru
exports.createNews = async (req, res) => {
    try {
        const { title, content, categoryId } = req.body;
        const news = await News.create({ title, content, categoryId });
        res.status(201).json(news);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create news', error });
    }
};

// Perbarui berita
exports.updateNews = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content, categoryId } = req.body;
        const news = await News.findByPk(id);
        if (!news) return res.status(404).json({ message: 'News not found' });

        news.title = title;
        news.content = content;
        news.categoryId = categoryId;
        await news.save();

        res.status(200).json(news);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update news', error });
    }
};

// Hapus berita
exports.deleteNews = async (req, res) => {
    try {
        const { id } = req.params;
        const news = await News.findByPk(id);
        if (!news) return res.status(404).json({ message: 'News not found' });

        await news.destroy();
        res.status(200).json({ message: 'News deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete news', error });
    }
};

// Dapatkan daftar berita
exports.getAllNews = async (req, res) => {
    try {
        const newsList = await News.findAll({ include: Category });
        res.status(200).json(newsList);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve news', error });
    }
};

// Dapatkan detail berita
exports.getNewsById = async (req, res) => {
    try {
        const { id } = req.params;
        const news = await News.findByPk(id, { include: Category });
        if (!news) return res.status(404).json({ message: 'News not found' });
        res.status(200).json(news);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve news', error });
    }
};

// Pencarian berita
exports.searchNews = async (req, res) => {
    try {
        const { q } = req.query;
        const newsList = await News.findAll({
            where: {
                [Op.or]: [
                    { title: { [Op.iLike]: `%${q}%` } },
                    { content: { [Op.iLike]: `%${q}%` } }
                ]
            }
        });
        res.status(200).json(newsList);
    } catch (error) {
        res.status(500).json({ message: 'Failed to search news', error });
    }
};

const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');
const verifyToken = require('../middlewares/authMiddleware');

/**
 * @swagger
 * /news:
 *   post:
 *     summary: Create a new news article
 *     tags: [News]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewsInput'
 *     responses:
 *       201:
 *         description: News article created successfully
 *       500:
 *         description: Server error
*/
router.post('/', verifyToken, newsController.createNews);

/**
 * @swagger
 * /news/{id}:
 *   put:
 *     summary: Update a news article
 *     tags: [News]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The news article ID
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewsInput'
 *     responses:
 *       201:
 *         description: News article updated successfully
 *       500:
 *         description: Server error
*/
router.put('/:id', verifyToken, newsController.updateNews);

/**
 * @swagger
 * /news/{id}:
 *   delete:
 *     summary: Delete a news article
 *     tags: [News]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The news article ID
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: News article deleted successfully
 *       500:
 *         description: Server error
*/
router.delete('/:id', verifyToken, newsController.deleteNews);

/**
 * @swagger
 * /news/search:
 *   post:
 *     summary: Search news article from query
 *     tags: [News]
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         required: false
 *         description: Query of News Search
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewsInput'
 *     responses:
 *       200:
 *         description: News found
 *       500:
 *         description: Server error
*/
router.get('/search', newsController.searchNews);

/**
 * @swagger
 * /news:
 *   get:
 *     summary: Retrieve a list of all news articles
 *     tags: [News]
 *     responses:
 *       200:
 *         description: A list of news articles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/News'
 */
router.get('/', newsController.getAllNews);

/**
 * @swagger
 * /news/{id}:
 *   get:
 *     summary: Retrieve a single news article by ID
 *     tags: [News]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The news article ID
 *     responses:
 *       200:
 *         description: A single news article
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/News'
 *       404:
 *         description: News not found
 */
router.get('/:id', newsController.getNewsById);

module.exports = router;

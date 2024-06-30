import express from 'express';
import { logWeight, getWeights } from '../controllers/weightController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

/**
 * @swagger
 * /api/weight:
 *   post:
 *     summary: Log weight
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               weight:
 *                 type: number
 *     responses:
 *       201:
 *         description: Weight logged successfully
 *       400:
 *         description: Error occurred
 */
router.post('/', protect, logWeight);

/**
 * @swagger
 * /api/weight:
 *   get:
 *     summary: Get weight history
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Weight history retrieved successfully
 *       400:
 *         description: Error occurred
 */
router.get('/', protect, getWeights);

export default router;

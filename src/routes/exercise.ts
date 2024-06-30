import express from 'express';
import { setExerciseSchedule, getExerciseSchedule, updateExerciseSchedule } from '../controllers/exerciseController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

/**
 * @swagger
 * /api/exercise:
 *   post:
 *     summary: Set exercise schedule
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               schedule:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     day:
 *                       type: string
 *                     intervals:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           time:
 *                             type: string
 *                           completed:
 *                             type: boolean
 *                           exerciseType:
 *                             type: string
 *     responses:
 *       201:
 *         description: Exercise schedule set successfully
 *       400:
 *         description: Error occurred
 */
router.post('/', protect, setExerciseSchedule);

/**
 * @swagger
 * /api/exercise:
 *   get:
 *     summary: Get exercise schedule
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Exercise schedule retrieved successfully
 *       400:
 *         description: Error occurred
 */
router.get('/', protect, getExerciseSchedule);

/**
 * @swagger
 * /api/exercise:
 *   patch:
 *     summary: Update exercise schedule
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               schedule:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     day:
 *                       type: string
 *                     intervals:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           time:
 *                             type: string
 *                           completed:
 *                             type: boolean
 *                           exerciseType:
 *                             type: string
 *     responses:
 *       200:
 *         description: Exercise schedule updated successfully
 *       400:
 *         description: Error occurred
 */
router.patch('/', protect, updateExerciseSchedule);

export default router;

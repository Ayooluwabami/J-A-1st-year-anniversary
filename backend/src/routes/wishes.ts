import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { pool } from '../db/mysql';
import { ResultSetHeader } from 'mysql2';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM wishes ORDER BY created_at DESC');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching wishes:', error);
    res.status(500).json({ error: 'Failed to fetch wishes' });
  }
});

router.post('/', async (req, res) => {
  const { name, message } = req.body;
  if (!name || !message) {
    return res.status(400).json({ error: 'Name and message are required' });
  }

  const id = uuidv4();
  try {
    await pool.query(
      'INSERT INTO wishes (id, name, message) VALUES (?, ?, ?)',
      [id, name, message]
    );
    res.status(201).json({ id, name, message, created_at: new Date().toISOString() });
  } catch (error) {
    console.error('Error creating wish:', error);
    res.status(500).json({ error: 'Failed to create wish' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query('DELETE FROM wishes WHERE id = ?', [id]);
    const deleteResult = result as ResultSetHeader;

    if (deleteResult.affectedRows === 0) {
      return res.status(404).json({ error: 'Wish not found' });
    }
    res.status(200).json({ message: 'Wish deleted' });
  } catch (error) {
    console.error('Error deleting wish:', error);
    res.status(500).json({ error: 'Failed to delete wish' });
  }
});

export default router;


import express from 'express';

const router = express.Router();

// Route to get all contacts
router.get('/all', (req, res) => {
  res.send('All contacts');
});

// Route to get a contact by ID
router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.send('Contact by id ' + id);
});

// Route to create a new contact (((Edited by Generative AI)))
router.post('/create', (req, res) => {
  const newContact = req.body;  
  res.send('Contact created: ' + JSON.stringify(newContact));
});

// Route to update a contact (((Edited by Generative AI)))
router.put('/update/:id', (req, res) => {
  const id = req.params.id;
  const updatedContact = req.body;  
  res.send('Contact updated with id ' + id + ': ' + JSON.stringify(updatedContact));
});

// Route to delete a contact (((Edited by Generative AI)))
router.delete('/delete/:id', (req, res) => {
  const id = req.params.id;
  res.send('Contact deleted with id ' + id);
});

export default router;

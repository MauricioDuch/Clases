const express = require('express');
const router = express.Router();
const moviesController = require('../../controllers/api/moviesControllerApi');


router.post('/api/movies/create', moviesController.create);
router.get('/movies/delete/:id', moviesController.delete);
router.delete('/movies/delete/:id', moviesController.destroy);

module.exports = router;
const express = require('express');
const router = express.Router();

// TODO: import
const listbeerController = require('../controllers/listbeer.controller')


router.get('/api/get-listbeer', listbeerController.Getlistbeer);
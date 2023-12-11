const express = require('express')
const router = express.Router();
const { getEvents, getEvent, createEvent, updateEvent, deleteEvent, deleteAllEvents } = require('../controllers/eventController')


//! Get all events
router.get('/', getEvents)

//! Get a single event
router.get('/:id', getEvent)

//! Create an event
router.post('/', createEvent)

//! Update an event
router.put('/:id', updateEvent)

//! Delete an event
router.delete('/:id', deleteEvent)

//!  Delete all events
router.delete('/', deleteAllEvents)


module.exports = router;
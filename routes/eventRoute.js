const express = require('express')
const router = express.Router();
const { getEvents, getEvent, createEvent, updateEvent, deleteEvent, deleteAllEvents } = require('../controllers/eventController')


//! Get all events
router.get('/', getEvents)

//! Create an event
router.post('/', createEvent)

//! Delete an event
router.delete('/:id', deleteEvent)



module.exports = router;





// //! Get a single event
// router.get('/:id', getEvent)
// //! Update an event
// router.put('/:id', updateEvent)
// //!  Delete all events
// router.delete('/', deleteAllEvents)
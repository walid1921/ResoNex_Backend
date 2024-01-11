const Event = require("../models/eventModel");
const asyncHandler = require("express-async-handler");

//! Get all events
const getEvents = asyncHandler(async (req, res) => {
  try {
    const events = await Event.find({});
    res.status(200).json(events);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

//! Create an event
const createEvent = asyncHandler(async (req, res) => {
  try {
    const newEvent = await Event.create(req.body);
    res.status(200).json(newEvent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//! Delete an event
const deleteEvent = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEvent = await Event.findByIdAndDelete(id);
    if (!deletedEvent) {
      res.status(404).json({ error: `Event with ID: ${id} not found` });
      return;
    }
    res.status(200).json(deletedEvent);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = {
  getEvents,
  createEvent,
  deleteEvent,
  // updateEvent,
  // getEvent,
  // deleteAllEvents,
};

// //! Delete all events
// const deleteAllEvents = asyncHandler(async (req, res) => {
//   try {
//     const deletedEvents = await Event.deleteMany({});
//     res.status(200).json(deletedEvents);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: err.message });
//   }
// });

// //! Update an event
// const updateEvent = asyncHandler(async (req, res) => {
//   try {
//     const { id } = req.params;
//     console.log('Received payload:', req.body); // Log the received payload
//     const event = await Event.findByIdAndUpdate(id, req.body);
//     if (!event) {
//       res.status(404).json({ error: `Event with ID: ${id} not found` });
//       return;
//     }
//     const updatedEvent = await Event.findById(id);
//     res.status(200).json(updatedEvent);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: err.message });
//   }
// });

// //! Get a single event
// const getEvent = asyncHandler(async (req, res) => {
//   try {
//     const event = await Event.findById(req.params.id);
//     res.status(200).json(event);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: err.message });
//   }
// });

// const Event = require('../models/eventModel');
// const asyncHandler = require('express-async-handler');


// // Store and delete events
// const storeAndDeleteEvent = asyncHandler(async (req, res) => {
//   try {
//     const {eventsToDelete} = req.body;

//     // Store events in MongoDB
//     await Event.insertMany(eventsToDelete);

//     // Delete events from MongoDB
//     for (const eventToDelete of eventsToDelete) {
//       await Event.findByIdAndDelete(eventToDelete._id);
//     }

//     res.status(201).json({message: 'Events stored and deleted successfully'});
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: error.message });
//   }
// });

// const getStoredDeletedEvents = asyncHandler(async (req, res) => {
//   try {
//     const storedDeletedEvents = await Event.find({ /* Add any query conditions if needed */ });
//     res.status(200).json(storedDeletedEvents);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: error.message });
//   }
// });

// module.exports = {
//   storeAndDeleteEvent,
//   getStoredDeletedEvents
// };
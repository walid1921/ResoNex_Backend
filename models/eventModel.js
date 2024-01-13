const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
  {
    Subject: {
      type: String,
      required: [true, 'Event subject is required']
    },
    Location: {
      type: String,
    },
    StartTime: {
      type: String,
      required: [true, 'Event starttime is required']
    },
    EndTime: {
      type: String,
      required: [true, 'Event endtime is required']
    },
    Description: {
      type: String,
    },
})

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;


//! Sample task
// {
//   "Subject": "Product Launch",
//   "Location": "Grand Ballroom",
//   "StartTime": "2024-02-15T15:00:00Z",
//   "EndTime": "2024-02-15T18:00:00Z",
//   "Description": "Unveiling our latest product to clients and partners. Networking and refreshments afterward."
// }
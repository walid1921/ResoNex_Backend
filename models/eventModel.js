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
    CategoryColor: {
      type: String,
    },
    Description: {
      type: String,
    },
  
})

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
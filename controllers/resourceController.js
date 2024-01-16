const Resource = require("../models/resourceModel");
const asyncHandler = require("express-async-handler");

//! Get all resources
const getResources = asyncHandler(async (req, res) => {
  try {
    const resource = await Resource.find({});
    res.status(200).json(resource);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

//! Create a resource
const createResource = asyncHandler(async (req, res) => {
  try {
    const newResource = await Resource.create(req.body);
    res.status(200).json(newResource);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


//! Delete all resources
const deleteAllResources = asyncHandler(async (req, res) => {
  try {
    const deletedResources = await Resource.deleteMany({});
    res.status(200).json(deletedResources);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

//! Add data to a specific resource
const addDataToResource = asyncHandler(async (req, res) => {
    const { resourceId } = req.params;
  
    try {
      const resource = await Resource.findById(resourceId);
  
      if (!resource) {
        return res.status(404).json({ error: "Resource not found" });
      }
  
      const newData = req.body;
      resource.data.push(newData);
  
      await resource.save();
  
      res.status(200).json(resource);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

//   //! get a specific resource
// const addDataToResource = asyncHandler(async (req, res) => {
//     try {
//       const { resourceId } = req.params;
//       const { data } = req.body;
  
//       const resource = await Resource.findById(resourceId);
  
//       if (!resource) {
//         res.status(404).json({ error: "Resource not found" });
//       }
  
//       resource.data.push(data);
//       await resource.save();
  
//       res.status(200).json(resource);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   });

module.exports = {
  getResources,
  createResource,
  deleteAllResources,
  addDataToResource
};

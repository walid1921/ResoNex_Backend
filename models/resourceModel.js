const mongoose = require("mongoose");

// {
//   "name": "My Projects",
//   "path": "/resources/myProjects",
//   "icon": "Globe",
//   "data": [
//     {
//       "name": "Dribbble",
//       "logoUrl": "../public/dribbble-5-logo-png-transparent.png",
//       "url": "https://dribbble.com/"
//     }
//   ]
// }

const resourceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  path: {
    type: String,
    required: [true, "Path is required"],
  },
  icon: {
    type: String,
    required: [true, "Icon is required"],
  },
  data: {
    type: [
      {
        name: String,
        logoUrl: String,
        url: String,
      },
    ],
    required: [true, "Data is required"],
  },
});

const Resource = mongoose.model("Resource", resourceSchema);
module.exports = Resource;

// const resourcesData = [
//   {
//     id: 1,
//     name: "Inspiration",
//     path: "/resources/inspiration",
//     icon: <Sparkles size={50} />,
//     data: [
//       {
//         id: 1,
//         name: "Dribbble",
//         logoUrl: "../public/dribbble-5-logo-png-transparent.png",
//         url: "https://dribbble.com/",
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "Illustrations",
//     path: "/resources/illustrations",
//     icon: <PenTool size={50} />,
//     data: [
//       {
//         id: 1,
//         name: "Dribbble",
//         logoUrl: ""
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: "Icons",
//     path: "/resources/icons",
//     icon: <Star size={50} />,
//     data: [
//       {
//         id: 1,
//         name: "Dribbble",
//         logoUrl: ""
//       },
//     ],
//   },
//   {
//     id: 4,
//     name: "Mockups + Kits",
//     path: "/resources/Mockups&Kits",
//     icon: <Maximize size={50} />,
//     data: [
//       {
//         id: 1,
//         name: "Dribbble",
//         logoUrl: ""
//       },
//     ],
//   },
//   {
//     id: 5,
//     name: "Typography",
//     path: "/resources/typography",
//     icon: <Type size={50} />,
//     data: [
//       {
//         id: 1,
//         name: "Dribbble",
//         logoUrl: ""
//       },
//     ],
//   },
//   {
//     id: 6,
//     name: "Stock Photos",
//     path: "/resources/stockPhotos",
//     icon: <ImagePlus size={50} />,
//     data: [
//       {
//         id: 1,
//         name: "Dribbble",
//         logoUrl: ""
//       },
//     ],
//   },
//   {
//     id: 7,
//     name: "Learning",
//     path: "/resources/learning",
//     icon: <GraduationCap size={50} />,
//     data: [
//       {
//         id: 1,
//         name: "Dribbble",
//         logoUrl: ""
//       },
//     ],
//   },
//   {
//     id: 8,
//     name: "Blogs",
//     path: "/resources/blogs",
//     icon: <MessageSquareText size={50} />,
//     data: [
//       {
//         id: 1,
//         name: "Dribbble",
//         logoUrl: ""
//       },
//     ],
//   },
//   {
//     id: 9,
//     name: "Podcasts",
//     path: "/resources/podcasts",
//     icon: <Mic size={50} />,
//     data: [
//       {
//         id: 1,
//         name: "Dribbble",
//         logoUrl: ""
//       },
//     ],
//   },
//   {
//     id: 10,
//     name: "Accessibility",
//     path: "/resources/accessibility",
//     icon: <PersonStanding size={50} />,
//     data: [
//       {
//         id: 1,
//         name: "Dribbble",
//         logoUrl: ""
//       },
//     ],
//   },
//   {
//     id: 11,
//     name: "Community",
//     path: "/resources/community",
//     icon: <Network size={50} />,
//     data: [
//       {
//         id: 1,
//         name: "Dribbble",
//         logoUrl: ""
//       },
//     ],
//   },
//   {
//     id: 12,
//     name: "Design Tools",
//     path: "/resources/designTools",
//     icon: <Wand2 size={50} />,
//     data: [
//       {
//         id: 1,
//         name: "Dribbble",
//         logoUrl: ""
//       },
//     ],
//   },
//   {
//     id: 13,
//     name: "Jobs",
//     path: "/resources/jobs",
//     icon: <Briefcase size={50} />,
//     data: [
//       {
//         id: 1,
//         name: "Dribbble",
//         logoUrl: ""
//       },
//     ],
//   },
//   {
//     id: 14,
//     name: "UX Tools",
//     path: "/resources/uxTools",
//     icon: <Brush size={50} />,
//     data: [
//       {
//         id: 1,
//         name: "Dribbble",
//         logoUrl: ""
//       },
//     ],
//   },
//   {
//     id: 15,
//     name: "React Libraries",
//     path: "/resources/reactLibraries",
//     icon: <LibraryBig size={50} />,
//     data: [
//       {
//         id: 1,
//         name: "Dribbble",
//         logoUrl: ""
//       },
//     ],
//   },
//   {
//     id: 16,
//     name: "Hosting + Database",
//     path: "/resources/hosting&Database",
//     icon: <Database size={50} />,
//     data: [
//       {
//         id: 1,
//         name: "Dribbble",
//         logoUrl: ""
//       },
//     ],
//   },
//   {
//     id: 17,
//     name: "My Projects",
//     path: "/resources/myProjects",
//     icon: <Globe size={50} />,
//     data: [
//       {
//         id: 1,
//         name: "Dribbble",
//         logoUrl: ""
//       },
//     ],
//   },
// ];

// const uploadController = (req, res) => {
//   try {
//     if (!req.files) {
//       res.status(400).json({
//         message: "No file uploaded",
//       });
//     } else {
//       let uploadedFile = req.files.file;
//       uploadedFile.mv(`./public/uploads/${uploadedFile.name}`);

//       res.json({
//         message: "File uploaded successfully",
//         data: {
//           name: uploadedFile.name,
//           mimetype: uploadedFile.mimetype,
//           size: uploadedFile.size,
//         },
//       });
//     }
//   } catch (err) {
//     res.status(500).json({
//       message: "Error uploading file",
//       error: err.message,
//     });
//   }
// };

// module.exports = uploadController;
const uploadController = (req, res) => {
  try {
    console.log("Files received:", req.files); // Debugging: Check if files are being received
    if (!req.files || !req.files.file) {
      return res.status(400).json({
        message: "No file uploaded",
      });
    }

    let uploadedFile = req.files.file;
    uploadedFile.mv(`./public/uploads/${uploadedFile.name}`, (err) => {
      if (err) {
        return res.status(500).json({
          message: "Error uploading file",
          error: err.message,
        });
      }

      res.json({
        message: "File uploaded successfully",
        data: {
          name: uploadedFile.name,
          mimetype: uploadedFile.mimetype,
          size: uploadedFile.size,
        },
      });
    });
  } catch (err) {
    res.status(500).json({
      message: "Error uploading file",
      error: err.message,
    });
  }
};

module.exports = uploadController;

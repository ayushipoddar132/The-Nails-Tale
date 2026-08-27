const CustomRequest = require("../models/CustomRequest");

async function createCustomRequest(req, res) {
  try {
    const {
      customerName,
      phone,
      occasion,
      budget,
      shape,
      length,
      colours,
      details,
      inspirationFileName,
    } = req.body;

    if (
      !customerName ||
      !phone ||
      !occasion ||
      !budget ||
      !details
    ) {
      return res.status(400).json({
        success: false,
        message: "Please complete all required fields.",
      });
    }

    const customRequest = await CustomRequest.create({
      customerName,
      phone,
      occasion,
      budget,
      shape,
      length,
      colours,
      details,
      inspirationFileName,
    });

    return res.status(201).json({
      success: true,
      message: "Your custom nail tale has been submitted ♡",
      request: customRequest,
    });
  } catch (error) {
    console.error("Custom request error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to submit your request. Please try again.",
    });
  }
}

module.exports = {
  createCustomRequest,
};
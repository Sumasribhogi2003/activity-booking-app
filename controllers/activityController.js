const Activity = require('../models/Activity');

// Function to list activities
exports.listActivities = async (req, res) => {
  try {
    const activities = await Activity.find();
    res.json(activities);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Function to create a new activity
exports.createActivity = async (req, res) => {
  const { title, description, location, dateTime } = req.body;

  try {
    const newActivity = new Activity({
      title,
      description,
      location,
      dateTime,
    });

    await newActivity.save();
    res.status(201).json(newActivity); // Send the newly created activity back as response
  } catch (err) {
    res.status(500).json({ message: 'Failed to create activity' });
  }
};

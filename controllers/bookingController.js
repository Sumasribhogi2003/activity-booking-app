const Booking = require('../models/Booking');

exports.bookActivity = async (req, res) => {
  const booking = await Booking.create({
    user: req.user.id,
    activity: req.body.activityId,
  });
  res.status(201).json(booking);
};

exports.getMyBookings = async (req, res) => {
  const bookings = await Booking.find({ user: req.user.id }).populate('activity');
  res.json(bookings);
};

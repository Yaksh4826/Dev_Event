import mongoose from 'mongoose';
import Event from './event.model.js';

const bookingSchema = new mongoose.Schema(
  {
    eventId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Event',
      required: [true, 'Event ID is required'],
      index: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        'Please provide a valid email address',
      ],
    },
  },
  { timestamps: true }
);

// Pre-save hook: Validate that the referenced event exists
// using async/await and throwing errors rather than callback style
bookingSchema.pre('save', async function () {
  const booking = this;

  if (booking.isModified('eventId')) {
    const event = await Event.findById(booking.eventId);
    if (!event) {
      throw new Error(`Event with ID ${booking.eventId} does not exist`);
    }
  }
});

const Booking = mongoose.models.Booking || mongoose.model('Booking', bookingSchema);

export default Booking;

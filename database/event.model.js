import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Event title is required'],
      trim: true,
      minlength: [3, 'Title must be at least 3 characters'],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    description: {
      type: String,
      required: [true, 'Event description is required'],
      trim: true,
    },
    overview: {
      type: String,
      required: [true, 'Event overview is required'],
      trim: true,
    },
    image: {
      type: String,
      required: [true, 'Event image URL is required'],
    },
    venue: {
      type: String,
      required: [true, 'Venue is required'],
      trim: true,
    },
    location: {
      type: String,
      required: [true, 'Location is required'],
      trim: true,
    },
    date: {
      type: String,
      required: [true, 'Event date is required'],
    },
    time: {
      type: String,
      required: [true, 'Event time is required'],
      match: [/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Time must be in HH:MM format'],
    },
    mode: {
      type: String,
      enum: {
        values: ['online', 'offline', 'hybrid'],
        message: 'Mode must be online, offline, or hybrid',
      },
      required: [true, 'Event mode is required'],
    },
    audience: {
      type: String,
      required: [true, 'Target audience is required'],
      trim: true,
    },
    agenda: {
      type: [String],
      required: [true, 'Event agenda is required'],
      validate: [
        (v) => Array.isArray(v) && v.length > 0,
        'Agenda must contain at least one item',
      ],
    },
    organizer: {
      type: String,
      required: [true, 'Organizer is required'],
      trim: true,
    },
    tags: {
      type: [String],
      required: [true, 'Tags are required'],
      validate: [
        (v) => Array.isArray(v) && v.length > 0,
        'Tags must contain at least one item',
      ],
    },
  },
  { timestamps: true }
);

// Pre-save hook: Generate slug from title and normalize date/time
eventSchema.pre('save', async function (next) {
  const doc = this;

  // Generate slug only if title is modified
  if (doc.isModified('title')) {
    doc.slug = doc.title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }

  // Normalize date to ISO format (YYYY-MM-DD)
  if (doc.isModified('date')) {
    try {
      const dateObj = new Date(doc.date);
      if (isNaN(dateObj.getTime())) {
        throw new Error('Invalid date format');
      }
      doc.date = dateObj.toISOString().split('T')[0];
    } catch (error) {
      return next(new Error('Date must be a valid ISO date (YYYY-MM-DD)'));
    }
  }

  // Validate time format (HH:MM)
  if (doc.isModified('time')) {
    const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
    if (!timeRegex.test(doc.time)) {
      return next(new Error('Time must be in HH:MM format (24-hour)'));
    }
  }

  next();
});

const Event = mongoose.models.Event || mongoose.model('Event', eventSchema);

export default Event;

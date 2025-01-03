const mongoose = require('mongoose');

const staffSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    personalInfo: {
      dateOfBirth: Date,
      gender: {
        type: String,
        enum: ['male', 'female', 'other'],
      },
      phone: String,
      address: String,
      emergencyContact: {
        name: String,
        relationship: String,
        phone: String,
      },
    },
    employmentInfo: {
      position: {
        type: String,
        required: true,
        enum: ['nurse', 'caregiver', 'doctor', 'admin', 'maintenance', 'kitchen'],
      },
      joinDate: {
        type: Date,
        required: true,
      },
      schedule: [{
        day: {
          type: String,
          enum: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
        },
        shift: {
          type: String,
          enum: ['morning', 'evening', 'night'],
        },
      }],
      qualifications: [String],
      certifications: [{
        name: String,
        issuedDate: Date,
        expiryDate: Date,
      }],
    },
    performance: [{
      reviewDate: Date,
      rating: {
        type: Number,
        min: 1,
        max: 5,
      },
      feedback: String,
      reviewer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    }],
    status: {
      type: String,
      enum: ['active', 'on-leave', 'terminated'],
      default: 'active',
    },
  },
  {
    timestamps: true,
  }
);

const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;

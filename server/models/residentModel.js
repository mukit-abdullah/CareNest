const mongoose = require('mongoose');

const residentSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    personalInfo: {
      dateOfBirth: {
        type: Date,
        required: true,
      },
      gender: {
        type: String,
        required: true,
        enum: ['male', 'female', 'other'],
      },
      bloodGroup: String,
      emergencyContact: {
        name: String,
        relationship: String,
        phone: String,
        email: String,
      },
    },
    medicalInfo: {
      conditions: [String],
      allergies: [String],
      medications: [{
        name: String,
        dosage: String,
        frequency: String,
        startDate: Date,
        endDate: Date,
      }],
      dietaryRestrictions: [String],
    },
    accommodation: {
      roomNumber: String,
      roomType: {
        type: String,
        enum: ['single', 'shared', 'premium'],
      },
      admissionDate: Date,
      specialRequirements: [String],
    },
    activities: [{
      name: String,
      date: Date,
      attended: Boolean,
      notes: String,
    }],
    mealPlan: {
      preferences: [String],
      restrictions: [String],
      specialInstructions: String,
    },
    status: {
      type: String,
      enum: ['active', 'discharged', 'temporary-leave'],
      default: 'active',
    },
  },
  {
    timestamps: true,
  }
);

const Resident = mongoose.model('Resident', residentSchema);

module.exports = Resident;

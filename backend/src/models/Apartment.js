const mongoose = require('mongoose');

const apartmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Address',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Apartment = mongoose.model('Apartment', apartmentSchema);

module.exports = Apartment;

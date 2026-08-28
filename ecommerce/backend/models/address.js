const addressSchema = new mongoose.Schema({
  addressType: { 
    type: String, 
    required: true, 
    enum: ['home', 'office', 'other'], 
    default: 'home' 
  },
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: String, required: true }
});
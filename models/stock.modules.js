const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: { required: true, type: String },
    measurementUnit: { required: true, type: String },
    amount: { required: true, type: String },
    phone: { required: true, type: String },
    priceUnit: { required: true, type: String },
    totalPrice: { required: true, type: String },
    role: {
        type: String,
        required: true,
        enum: {
            values: ["HR", "MANAGER","IT_ADMIN","EMPLOYEE"],
            message: "{value} is not a valid role",
        }
    },
    createDate: { 
        required: true, 
        type: Date,
        default: new Date(), 
    },
    updateTime: { required: false, type: Date },
});

module.exports = mongoose.model('employee', EmployeeSchema);
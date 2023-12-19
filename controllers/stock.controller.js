const stockModel = require('../models/stock.model');
const StockModel = require('../models/stock.model'); 

const create = async (req, res, next) => { 
    try {
        const newStock = new StockModel(req.body);
        const savedSrock = await newStock.save();
        
        console.log(savedStock);

        res.status(201).json({
            message: 'Stock created',
            employee: savedStock
        })
    } catch (error) {
        res.status(500).send("Failed to save!!");
    }
}

const list = async (req, res, next) => { 
    try {
        var stocks = await StockModel.find({});
        res.status(200).json({ stocks });
    } catch (error) {
        res.status(500).send("Error fetching stocks!!");
    }
}

const update = async (req, res, next) => { 
    
}

const remove = async (req, res, next) => { 
    
}

const findById = async (req, res, next) => { 
    
}



module.exports = {
    create, update, remove, findById, list
}
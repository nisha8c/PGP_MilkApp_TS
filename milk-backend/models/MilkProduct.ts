import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MilkProductSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    category: String,
    picture: String,
    quantity: Number,
});

const MilkProduct = mongoose.model("MilkProducts", MilkProductSchema);

export default MilkProduct;
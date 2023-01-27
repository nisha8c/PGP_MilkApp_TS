import { Request, Response } from 'express';
import MilkProduct from '../models/MilkProduct';


const getAllMilkProducts = async (req: Request, res: Response) => {

    const allProducts = await MilkProduct.find();
    res.json(allProducts);
}; 

const getPaginatedMilkProducts = async (req: Request, res: Response) => {
    const page = parseInt(req.params.page);
    const limit = parseInt(req.params.limit);
    const allProducts = await MilkProduct.find({})
                        .skip(page * limit)
                        .limit(limit)
                        .exec();
    res.json(allProducts);
};

const getMilkProductById = async (req: Request, res: Response) => {
    const productId  = req.params.id;
    const oneMilkProduct = await MilkProduct.findById(productId);
    res.json(oneMilkProduct);
};

module.exports = {
    getAllMilkProducts,
    getPaginatedMilkProducts,
    getMilkProductById,
};
import express from 'express';
import cors from 'cors';
import { Request, Response, Application } from 'express';
const {
    getAllMilkProducts,
    getMilkProductById

} = require('./controllers/product.controllers');


const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        message: 'Welcome'
    })
});

app.get('/api/products', getAllMilkProducts);
app.get('/api/products/:id', getMilkProductById);


export default app;
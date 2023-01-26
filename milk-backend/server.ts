import app from './app';
import mongoose from 'mongoose';
import { config } from "dotenv";
config();

const PORT = process.env.PORT;

mongoose.connect(process.env.MONGODB_URL!).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
    })
});

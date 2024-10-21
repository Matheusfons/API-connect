import mongoose, { mongo } from "mongoose";

async function conecta_na_data_base(){
    mongoose.connect(process.env.DB_CONNECTION_STRING);

    return mongoose.connection;
};

export default conecta_na_data_base;






import mongoose from 'mongoose';


const connectToMongoDb = async () => {

    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log('you are connected to the database')

    }

    catch (err) {
        console.log("error connecting to db", err)


    }
}

export default connectToMongoDb
import mongoose from 'module';
const connectDB= (url)=>{
    return mongoose.connect(url);//it return a promise.during import we have to use async
}
export default connectDB;
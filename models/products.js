import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        price:{
            type:Number,
            required:true
        },
        featured:{
            type:Boolean,
            default:false
        },
        rating:{
            type: Number,
            default: 4.8
        },
        createdAt:{
            type: Date,
            default:Date.now()
        },
        company:{
            type:String,
            enum:{
                values:["apple","samsung","dell","mi"],
                message:`{VALUE} is not supported!`
            }, 
            lowercase:true

        }

   },{timestamps:true})

const Product = mongoose.model('Product',productSchema);

export default Product;
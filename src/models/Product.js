import mongoose from "mongoose";

const productShema = new mongoose.Schema({

   name:{
    type: String,
    required: true,
   },
   preco:{
    type: String,
    required: true,   
   },
   qtd:{
    type: String,
    required: true,   
   },

},
{
    timestamps: true,
})

 const Product = mongoose.model('Product', productShema)

 export default Product
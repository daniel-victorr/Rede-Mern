import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({

   nome: {
      type: String,
      required: true
   },

   sobreNome: {
      type: String,
      required: true
   },

   email: {
      type: String,
      lowercase: true,
      unique: true,
      required: true,
   },

   password: {
      type: String,
      required: true,
      select: false,
   },

   tipo: {
      type: Number, default:1
   },

},
   {
      timestamps: true
   })

userSchema.pre('save', async function (next) {
   this.password = await bcrypt.hash(this.password, 10)
   next()
})

userSchema.pre('findOneAndUpdate', function (next) {
   let senha = this.getUpdate().password + '';
   this.getUpdate().password = bcrypt.hashSync(senha, 10)
   next()
})

const User = mongoose.model('User', userSchema)

export default User
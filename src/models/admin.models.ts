import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    id: { type: Number, autoIncrement: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fullName: { type: 'string', default: null },
})

export default mongoose.model('User', userSchema)

import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true, // quita los espacios en blanco; ej: username: '    may    ', va a quedat así: 'may'
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true, // para que no se pueda repetir una cuenta que ya está registrada
    },
    password: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

export default mongoose.model('User', userSchema)
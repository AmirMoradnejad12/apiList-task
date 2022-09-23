import mongoose from 'mongoose'

const testSchema = mongoose.Schema({
     name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique:true
    }
}, {
    timestamps: true
})

const test = mongoose.model('test', testSchema)

export default test
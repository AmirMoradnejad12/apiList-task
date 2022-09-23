import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const apiListSchema = new Schema({
    API: { type: 'String', required: true },
    Description: { type: 'String', required: false },
    Auth: { type: 'String', required: false },
    HTTPS: { type: 'Boolean', required: false },
    Cors: { type: 'String', required: false },
    Link: { type: 'String', required: false },
    Category: { type: 'String', required: true },
    
});


const apiList = mongoose.model('apiList', apiListSchema)

export default apiList
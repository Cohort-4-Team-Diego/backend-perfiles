const mongoose = require('mongoose')

const { Schema } = mongoose


const Profile = new Schema({
    name:{
        type: String,
        required: false, 
    },
    birthdate:{
        type: Date,
        required: false, 
    },
    country:{
        type: String,
        required: false, 
    },
    origin_city:{
        type: String,
        required: false, 
    },
    technical_profile:{
        type: String,
        required: false, 
    },
    platzi_profile:{
        type: String,
        required: false, 
    },
    twitter_profile:{
        type: String,
        required: false, 
    },
    linkedin_profile:{
        type: String,
        required: false, 
    },
    github_profile:{
        type: String,
        required: false, 
    },
    role:{
        type: String,
        required: false, 
    },
    superpower:{
        type: String,
        required: false, 
    },
    weakness:{
        type: String,
        required: false, 
    },
    description:{
        type: String,
        required: false, 
    },
    photo:{
        type: String,
        required: false, 
    },
    email:{
        type: String,
        required: false, 
    },
    facebook:{
        type: String,
        required: false, 
    },



},
{
    timestamps:true
}) 

module.exports= mongoose.model('Profile', Profile)
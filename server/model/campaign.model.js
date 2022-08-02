import mongoose from "mongoose";

const campaignSchema=mongoose.Schema({
    userId:String,
    catogary:String,
    title:String, 
    author:String,
    discription:String,
    image:String,
    goal:Number,
    days:Number,
    pledged:{type:Number,default:0},
    noOfBackers:{type:Number,default:0}
},
{ typeKey: '$type' }
)

const campaignModel=mongoose.model('campaignModel',campaignSchema)
export default campaignModel
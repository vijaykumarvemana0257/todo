const mongoose = require('mongoose');
const express=require('express')
const { Schema } = mongoose;

const todoSchema= new Schema({
    title:String,
    description: String,
    isCompleted:Boolean
})
const todo=mongoose.model('todo',todoSchema)
module.exports={todo}
const express = require('express')
const bodyParser = require('body-parser')
const cookieParder = require('cookie-parser')
const UserRouter = require('./user')

const app = express()
app.use(bodyParser.json())
app.use(cookieParder())
app.use('/user',UserRouter)

app.listen('9093',(req,res) => {
    console.log('Node app run at 9093')
})
//类似于mysql里面的表，mongo里面有文档字段的概念
// const User = mongoose.model('user',new mongoose.Schema({
//     user:{type:String,require:true},
//     age:{type:Number,require:true}
// }))

// //增 create
// User.create({
//     user:'杨幂',
//     age:23
// },(err,doc) => {
//     if(!err){
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// })

// //删除 remove
// User.remove({age:18},(err,doc)=>{
//     if (err){
//         throw err
//     }else{
//         console.log(doc)
//     }
// })  

//改 updata
// User.update({user:'杨幂'},{'$set':{age:30}},(err,doc)=>{
//     console.log(doc)
// })

// app.get('/',(req,res) => {
//     res.send('<h1>Hello world</h1>')//返回文本
// })

// app.get('/data',(req,res) => {
//     //find查找多个  findOne查找一个
//     User.find({},(err,doc) => {
//         if(!err){
//             res.json(doc)
//         }else{
//             throw err
//         }
//     })
// })

// app.get('/user',(req,res) => {
//     res.json({username:'123',password:'123123'})
// })


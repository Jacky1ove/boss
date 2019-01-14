//用户相关的user接口
const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')
const utils = require('utility')
const _filter = {'psw':0,'__v':0}

Router.get('/list',(req,res) => {
    const type = req.query.type
    User.find({type},{psw:0},(err,doc) => {
        return res.json({code:0,data:doc})
    })
})
Router.post('/register',(req,res) => {
    console.log(req.cookies)
    const { username,psw,type} = req.body
    User.findOne({username},_filter,(err,doc) => {
        if(err){
            return res.json({code:1,msg:'该用户已注册'})
        }

        // const userModel = new User({username,type,psw:md5Psw(psw)})
        // userModel.save(function(err,doc){
        //     if(err){
        //         return res.json({ code:1,msg:'后端出错'})
        //     }
        //    console.log(doc,'====')
        //    const {username,type,_id} = doc
        //    res.cookie('userid',_id)
        //     return res.json({code:0,data:{username}})
        // })
        User.create({username,psw:md5Psw(psw),type},_filter,(err,doc) => {
            if(err){
                return res.json({ code:1,msg:'后端出错'})
            }
            console.log(doc,'****')
            let data = {username:doc.username,type:doc.type,_id:doc._id}
            res.cookie('userid',doc._id)
            return res.json({code:0,data:data})
        })
    })
})
Router.post('/login',(req,res) => {
    const { username,psw } = req.body
    // {psw:0}密码不返回
    User.findOne({username,psw:md5Psw(psw)},_filter,(err,doc) => {
        if(!doc){
            return res.json({code:1,msg:'用户名密码错误'})
        }
        res.cookie('userid',doc._id)
        return res.json({code:0,data:doc})
    })
})
Router.post('/update',(req,res) => {
    const userid  = req.cookies.userid
    if(!userid){
        return res.json({code:1})
    }
    const body = req.body
    console.log(body,'**************************')
    User.findOneAndUpdate({_id:userid},body,(err,doc) => {
        console.log(userid,doc,'++++++++++++++++++++++++')
        const data = Object.assign({},{
            username:doc.username,
            type:doc.type
        },body)
        console.log(data,'------------------------------')
        return res.json({code:0,data:data})
    })
})
Router.get('/info',(req,res) => {
    console.log(req)
    const {userid} = req.cookies
    if(!userid){
        return res.json({code:1})
    }
    User.findOne({_id:userid},_filter,(err,doc) => {
        if(err){
            return res.json({code:1,msg:'后端出错'})
        }
        if(doc){
            return res.json({code:0,data:doc})
        }
    })
})

function md5Psw(psw){
    const salt = 'huang_Zi_chen@123@#$'
    return utils.md5(utils.md5(psw+salt))//两层MD5+盐方式对password加密
}

module.exports = Router
const mongoose = require('mongoose')

//链接数据库
const DB_URL = 'mongodb://localhost:27017/imooc-chat'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',() => {
    console.log('connect success')
})

const models  = {
    user:{
        username:{type:String,require:true},
        psw:{type:String,require:true},
        type:{type:String,require:true},
        //头像
        avatar:{type:String},
        //个人简介
        desc:{type:String},
        //职位名
        title:{type:String},
        //如果你是老板你还有两个属性
        company:{type:String},
        money:{type:String}
    },

    chat:{}
}

for(let m in models){
    mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
    getModel:function(name){
        return mongoose.model(name)
    }
}
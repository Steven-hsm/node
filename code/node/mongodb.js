var MongoClient = require('mongodb').MongoClient;


//定义连接数据库的地址

const  url = 'mongodb://localhost:27017/';
var dbName = 'shop'

//连接数据库
MongoClient.connect(url,(err,client)=>{
    if(err){
        console.log('数据连接失败');
        return false;
    }
    let db=client.db(dbName);   /*获取db对象*/

    db.collection("admin").insertOne({"name":"mongodb3.0","age":10},function(err){

        if(err){
            console.log('增加失败');
            return false;
        }
        console.log('增加成功');
        client.close();  /*关闭数据库*/
    })


})

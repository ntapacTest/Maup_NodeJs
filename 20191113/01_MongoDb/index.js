const mongoClient=require('mongodb').MongoClient;

let connectionString='mongodb://localhost:27017';

mongoClient.connect(connectionString, { useUnifiedTopology: true },(err,client)=>{
    if(err) throw err;

    let myDb=client.db('userdb');

    let collection=myDb.collection('users');

    // Insert one document
    // let user={name:'MongoUserName2', age:35};
    // collection.insertOne(user,(err,result)=>{
    //     if(err) throw err;

    //     console.log(result.ops);
    // });

    // Insert document collection
    // let users=[{name:'MongoUserName3', age:23}, {name:'MongoUserName4', age:63},{name:'MongoUserName5', age:73} ];
    // collection.insertMany(users,(err,result)=>{
    //     if(err) throw err;

    //     console.log(result.ops);
    // });

    // Document count in collection
    collection.count((err,result)=>{
        console.log('Document count in collection');
        console.log(result);
    });

    // Find all records    
    collection.find().toArray((err,result)=>{
        console.log('Find all records');
        console.log(result);
    });

    // Find one record    
    collection.findOne().then((result)=>{
        console.log('Find one record');
        console.log(result);
    });

    // Find record by conditions    
    collection.find({name:'MongoUserName'}).toArray((err,result)=>{
        console.log('Find record by conditions');
        console.log(result);
    });

     // Find one records by conditions     
     collection.findOne({name:'MongoUserName'}).then((result)=>{
        console.log('Find one records by conditions');
        console.log(result);
    });

    // Update one record
    // collection.findOneAndUpdate({name:'MongoUserName'},{$set:{age:333}},(err,result)=>{
    //     console.log('Update one record');
    //     console.log(result);
    // });

    // Update many records
    // collection.updateMany({name:'MongoUserName'},{$set:{age:555}},(err,result)=>{
    //     console.log('Update many records');
    //     console.log(result);
    // });

    // Delete one record
    // collection.deleteOne({name:'MongoUserName5'},(err,result)=>{
    //     console.log('Delete one record');
    //     console.log(result);
    // });

    // Delete many records
    // collection.deleteMany({name:'MongoUserName'},(err,result)=>{
    //     console.log('Delete many records');
    //     console.log(result);
    // });

    // Delete collection
    // collection.drop((err,result)=>{
    //     console.log('Delete collection');
    //     console.log(result);
    // });

    console.log("MongoDB connected......");

    client.close();
});


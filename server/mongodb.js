let mongoClient = require('mongodb').MongoClient;

function mongoDbSetup() {
    let mongoUrl = 'mongodb://localhost:27017/test';

    mongoClient.connect(mongoUrl, function(err,db) {
        if(!err) {
            console.log("Connected to database..");
            mongoClient.userCollection = db.collection('users');
        }
    })
}

export { mongoDbSetup, mongoClient }
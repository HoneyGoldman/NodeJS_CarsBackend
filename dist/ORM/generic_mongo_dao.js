var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { MongoClient, ObjectId } = require('mongodb');
const uri = 'mongodb://127.0.0.1:27017';
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new MongoClient(uri);
        try {
            yield client.connect();
            console.log('Connected to MongoDB');
            return client;
        }
        catch (err) {
            console.error('Error connecting to MongoDB:', err);
            throw err;
        }
    });
}
function insertData(db_name, collection, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const mongoClient = yield connect();
        try {
            const db = mongoClient.db(db_name);
            const collection_instance = db.collection(collection);
            const dataToInsert = data;
            const result = yield collection_instance.insertMany(dataToInsert);
            console.log(`Inserted ${result.insertedCount} document into the collection: ` + collection);
        }
        catch (err) {
            console.error('Error inserting data:', err);
        }
        finally {
            mongoClient.close();
        }
    });
}
function removeCollectionData(db_name, collection) {
    return __awaiter(this, void 0, void 0, function* () {
        const mongoClient = yield connect();
        try {
            const db = mongoClient.db(db_name);
            const collection_instance = db.collection(collection);
            collection_instance.drop((dropErr) => {
                if (dropErr) {
                    console.error('Error removing collection:', dropErr);
                }
                else {
                    console.log(`Collection ${collection} removed successfully`);
                }
            });
        }
        catch (err) {
            console.error('Error removing all data:', err);
        }
    });
}
function getAllCollection(db_name, collection) {
    return __awaiter(this, void 0, void 0, function* () {
        const mongoClient = yield connect();
        try {
            const db = mongoClient.db(db_name);
            const collection_instance = db.collection(collection);
            const result = collection_instance.find({});
            let array = [];
            yield result.forEach((document) => __awaiter(this, void 0, void 0, function* () {
                array.push(document);
            }));
            return array;
        }
        catch (err) {
            console.error('Error getting data db_name:' + db_name + ', collection name:' + collection, err);
        }
        finally {
            mongoClient.close();
        }
    });
}
function getObjById(db_name, collection, id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const mongoClient = yield connect();
            try {
                const db = mongoClient.db(db_name);
                const collection_instance = db.collection(collection);
                let result = yield collection_instance.findOne({
                    _id: new ObjectId(id)
                });
                return result;
            }
            catch (err) {
                mongoClient.close();
                console.error('Error getting data db_name:' + db_name + ', collection name:' + collection + ' id:' + id, err);
            }
        }
        catch (_a) {
        }
    });
}
function deletObjById(db_name, collection, id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const mongoClient = yield connect();
            try {
                const db = mongoClient.db(db_name);
                const collection_instance = db.collection(collection);
                yield collection_instance.deleteOne({
                    _id: new ObjectId(id)
                });
                return true;
            }
            catch (err) {
                mongoClient.close();
                console.error('Error deleting data db_name:' + db_name + ', collection name:' + collection + ' id:' + id, err);
            }
        }
        catch (_a) {
        }
    });
}
function insertOne(db_name, collection, data) {
    insertData(db_name, collection, [data]); //reusing insert list to insert one
    return "Done";
}
module.exports = {
    connect,
    insertData,
    getAllCollection,
    getObjById,
    deletObjById,
    insertOne,
    removeCollectionData
};
//# sourceMappingURL=generic_mongo_dao.js.map
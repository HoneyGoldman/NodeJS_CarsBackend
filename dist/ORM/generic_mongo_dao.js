"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeCollectionData = exports.insertOne = exports.deleteObjById = exports.getObjById = exports.getAllCollection = exports.insertData = exports.connect = void 0;
const { MongoClient, ObjectId } = require('mongodb');
const uri = 'mongodb://127.0.0.1:27017';
const db_name = "";
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const client = new MongoClient(uri);
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
exports.connect = connect;
function insertData(collection, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const mongoClient = yield connect();
        try {
            const db = yield mongoClient.db(db_name);
            const collection_instance = yield db.collection(collection);
            const dataToInsert = data;
            const result = yield collection_instance.insertMany(dataToInsert);
            console.log(`Inserted ${result.insertedCount} document into the collection: ` + collection);
            return;
        }
        catch (err) {
            console.error('Error inserting data:', err);
        }
        finally {
            mongoClient.close();
        }
    });
}
exports.insertData = insertData;
function removeCollectionData(collection) {
    return __awaiter(this, void 0, void 0, function* () {
        const mongoClient = yield connect();
        try {
            const db = yield mongoClient.db(db_name);
            const collection_instance = yield db.collection(collection);
            yield collection_instance.drop((dropErr) => {
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
exports.removeCollectionData = removeCollectionData;
function getAllCollection(collection) {
    return __awaiter(this, void 0, void 0, function* () {
        const mongoClient = yield connect();
        try {
            const db = yield mongoClient.db(db_name);
            const collection_instance = yield db.collection(collection);
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
exports.getAllCollection = getAllCollection;
function getObjById(collection, id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const mongoClient = yield connect();
            try {
                const db = yield mongoClient.db(db_name);
                const collection_instance = yield db.collection(collection);
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
exports.getObjById = getObjById;
function deleteObjById(collection, id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const mongoClient = yield connect();
            try {
                const db = yield mongoClient.db(db_name);
                const collection_instance = yield db.collection(collection);
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
exports.deleteObjById = deleteObjById;
function insertOne(collection, data) {
    return __awaiter(this, void 0, void 0, function* () {
        yield insertData(collection, [data]); //reusing insert list to insert one
        return "Done";
    });
}
exports.insertOne = insertOne;
//# sourceMappingURL=generic_mongo_dao.js.map
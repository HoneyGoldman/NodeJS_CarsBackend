const { MongoClient, ObjectId } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';

async function connect() {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        return client;
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        throw err;
    }
}

async function insertData(db_name: string, collection: string, data: any) {
    const mongoClient = await connect();
    try {
        const db = await mongoClient.db(db_name);
        const collection_instance = await db.collection(collection);
        const dataToInsert = data
        const result = await collection_instance.insertMany(dataToInsert);
        console.log(`Inserted ${result.insertedCount} document into the collection: ` + collection);
        return
    } catch (err) {
        console.error('Error inserting data:', err);
    } finally {
        mongoClient.close();
    }
}

async function removeCollectionData(db_name: string, collection: string) {
    const mongoClient = await connect();
    try {
        const db = await mongoClient.db(db_name);
        const collection_instance = await db.collection(collection);
        await collection_instance.drop((dropErr) => {
            if (dropErr) {
                console.error('Error removing collection:', dropErr);
            } else {
                console.log(`Collection ${collection} removed successfully`);
            }
        }
        )
    } catch (err) {
        console.error('Error removing all data:', err);
    }
}


async function getAllCollection(db_name: string, collection: string) {
    const mongoClient = await connect();
    try {
        const db = await mongoClient.db(db_name);
        const collection_instance = await db.collection(collection);
        const result = collection_instance.find({})
        let array: any[] = []
        await result.forEach(async (document: any) => {
            array.push(document)
        });
        return array
    } catch (err) {
        console.error('Error getting data db_name:' + db_name + ', collection name:' + collection, err);
    } finally {
        mongoClient.close();
    }
}

async function getObjById(db_name: string, collection: string, id: any) {
    try {
        const mongoClient = await connect();
        try {

            const db = await mongoClient.db(db_name);
            const collection_instance = await db.collection(collection);
            let result =
                await collection_instance.findOne({
                    _id: new ObjectId(id)
                })
            return result
        } catch (err) {
            mongoClient.close();
            console.error('Error getting data db_name:' + db_name + ', collection name:' + collection + ' id:' + id, err);
        }
    } catch {

    }
}

async function deletObjById(db_name: string, collection: string, id: any) {
    try {
        const mongoClient = await connect();
        try {

            const db = await mongoClient.db(db_name);
            const collection_instance = await db.collection(collection);
            await collection_instance.deleteOne({
                _id: new ObjectId(id)
            })
            return true;
        } catch (err) {
            mongoClient.close();
            console.error('Error deleting data db_name:' + db_name + ', collection name:' + collection + ' id:' + id, err);
        }
    } catch {

    }
}

async function insertOne(db_name: string, collection: string, data: any) {
    await insertData(db_name, collection, [data]); //reusing insert list to insert one
    return "Done"
}


module.exports = {
    connect,
    insertData,
    getAllCollection,
    getObjById,
    deletObjById,
    insertOne,
    removeCollectionData
}
const { MongoClient } = require('mongodb');

async function main() {
  // Connection URL
  const uri = 'mongodb://localhost:27017';

  // Database and Collection names
  const dbName = 'testdb';
  const collectionName = 'users';

  // Create a new MongoClient
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    console.log('Connected successfully to server');

    // Get the database and collection
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Insert a document
    const insertResult = await collection.insertOne({ name: 'John', age: 30 });
    console.log('Inserted document:', insertResult.insertedId);

    // Query the database
    const findResult = await collection.findOne({ name: 'John' });
    console.log('Found document:', findResult);

  } catch (err) {
    console.error(err);
  } finally {
    // Close the connection
    await client.close();
  }
}

main().catch(console.error);

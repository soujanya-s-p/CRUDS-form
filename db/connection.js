
const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017'; // Change if your MongoDB server is running on a different URI
const dbName = 'my_database'; // Change to the name of your database

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connect() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    return client.db(dbName);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

module.exports = { connect };

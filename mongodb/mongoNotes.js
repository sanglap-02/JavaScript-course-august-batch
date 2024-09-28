/*
MongoDB Basics
MongoDB is a NoSQL database, which means it stores data in flexible, JSON-like documents rather than traditional rows and columns. This makes it easy to scale and adapt data models over time.

Key Concepts:
Database: A MongoDB instance can host multiple databases. Each database contains collections.
Collection: A collection is a group of MongoDB documents, similar to a table in relational databases.
Document: A record in a MongoDB collection, represented as a JSON-like structure called BSON (Binary JSON).
MongoDB Example with HTML, CSS, and JavaScript

1. Setting Up MongoDB:
Install MongoDB on your machine or use a service like MongoDB Atlas for cloud-hosted MongoDB.

Here are the basic CRUD (Create, Read, Update, Delete) operations in MongoDB with examples using the MongoDB shell.

****************************************************************************************************
1. CREATE – insertOne() and insertMany()
The create operation is used to insert new documents into a collection.

Example:
Let’s create a database called myDatabase and insert a document into a collection called users.

use myDatabase

Insert a Single Document (insertOne()): 
db.users.insertOne({
  name: "Alice",
  age: 25,
  email: "alice@example.com"
})

Insert Multiple Documents (insertMany()):
db.users.insertMany([
  { name: "Bob", age: 30, email: "bob@example.com" },
  { name: "Charlie", age: 35, email: "charlie@example.com" }
])


****************************************************************************************************
2. READ – find() and findOne()
The read operation retrieves data from a collection.

Example:
Find All Documents (find()):
db.users.find()

output :
[
  { "_id": ObjectId("..."), "name": "Alice", "age": 25, "email": "alice@example.com" },
  { "_id": ObjectId("..."), "name": "Bob", "age": 30, "email": "bob@example.com" },
  { "_id": ObjectId("..."), "name": "Charlie", "age": 35, "email": "charlie@example.com" }
]


Find a Specific Document (findOne()):
db.users.findOne({ name: "Alice" })

db.users.find({ age: { $gt: 30 } })

***********************************************************************************************************************
3. UPDATE – updateOne(), updateMany(), and replaceOne()
The update operation modifies existing documents.

Example:
Update a Single Document (updateOne()):

db.users.updateOne(
  { name: "Alice" },
  { $set: { age: 26 } }
)

This updates Alice’s age from 25 to 26.

Update Multiple Documents (updateMany()):

db.users.updateMany(
  { age: { $gt: 30 } },
  { $set: { status: "senior" } }
)

Replace a Document (replaceOne()):

db.users.replaceOne(
  { name: "Bob" },
  { name: "Bobby", age: 31, email: "bobby@example.com" }
)
This replaces the entire document for Bob with the new data for Bobby.

***********************************************************************************************************

4. DELETE – deleteOne() and deleteMany()
The delete operation removes documents from a collection.

Example:
Delete a Single Document (deleteOne()):

db.users.deleteOne({ name: "Charlie" })


This deletes the document for Charlie.

Delete Multiple Documents (deleteMany()):

db.users.deleteMany({ age: { $lt: 30 } })



*/
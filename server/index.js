const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');
require("dotenv").config();

const app = express();
const port = 5000
app.use(bodyParser.json());
app.use(cors());



async function connectToMongoDB() {
    try {
        const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASS}@cluster0.lpx8thb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
        const client = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        await client.connect();
        console.log('Connected to MongoDB');

        return client;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}

async function run() {
    try {
        const client = await connectToMongoDB();
        const db = client.db('addUser');
        const userCollection = db.collection('user');


        app.post("/addData", (req, res) => {
            const name = req.body;
            console.log(name);
            userCollection.insertOne(name)
            .then(result => {
                res.send(result.insertedCount > 0)
            })
        });

        app.get('/userData', (req, res) => {
            userCollection.find({})
            .toArray( (errr, document) => {
                res.send(document);
            })
        })

    } finally {

    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


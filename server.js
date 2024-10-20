
const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const uri = "mongodb+srv://aman:aman@cluster0.nm8bn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";



// Apply CORS middleware
app.use(cors());


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Middleware to parse JSON requests
app.use(express.json());

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

// GET endpoint to retrieve all stock data
app.get('/stocks', async (req, res) => {
  try {
    const stocks = await client.db("finance").collection("finance").find({}).toArray();
    

    if (stocks.length === 0) {
      return res.status(404).send("No stock data found.");
    }

    res.status(200).json(stocks);
  } catch (error) {
    console.error("Error retrieving stock data:", error);
    res.status(500).send("Error retrieving stock data.");
  }
});

// NEW POST endpoint to insert stock data
app.post('/stocks', async (req, res) => {
  const stockData = req.body;

  // Simple validation
  if (!stockData.date || !stockData.open || !stockData.high || !stockData.low || !stockData.close || !stockData.adjClose || !stockData.volume) {
    return res.status(400).send("All fields are required.");
  }

  try {
    // Insert stock data into MongoDB
    const result = await client.db("finance").collection("finance").insertOne({
      ...stockData,
      date: new Date(stockData.date) // Convert date to Date object
    });
    res.status(201).json({ message: "Stock data inserted", id: result.insertedId });
  } catch (error) {
    console.error("Error inserting stock data:", error);
    res.status(500).send("Error inserting stock data.");
  }
});




app.get('/delhi', async (req, res) => {
  try {
    const stocks = await client.db("finance").collection("delhi").find({}).toArray();
    
    
    if (stocks.length === 0) {
      return res.status(404).send("No stock data found.");
    }

    res.status(200).json(stocks);
  } catch (error) {
    console.error("Error retrieving stock data:", error);
    res.status(500).send("Error retrieving stock data.");
  }
});



// NEW POST endpoint to insert stock data
app.post('/delhi', async (req, res) => {
  const stockData = req.body;

  // Simple validation
  if (!stockData.date || !stockData.date || !stockData.weather || !stockData.temp || !stockData.maxtemp || !stockData.pressure || !stockData.humidity) {
    return res.status(400).send("All fields are required.");
  }

  try {
    // Insert stock data into MongoDB
    const result = await client.db("finance").collection("delhi").insertOne({
      ...stockData,
      date: new Date(stockData.date) // Convert date to Date object
    });
    res.status(201).json({ message: "Stock data inserted", id: result.insertedId });
  } catch (error) {
    console.error("Error inserting stock data:", error);
    res.status(500).send("Error inserting stock data.");
  }
});






app.get('/mumbai', async (req, res) => {
  try {
    const stocks = await client.db("finance").collection("mumbai").find({}).toArray();
    
    
    if (stocks.length === 0) {
      return res.status(404).send("No stock data found.");
    }

    res.status(200).json(stocks);
  } catch (error) {
    console.error("Error retrieving stock data:", error);
    res.status(500).send("Error retrieving stock data.");
  }
});



// NEW POST endpoint to insert stock data
app.post('/mumbai', async (req, res) => {
  const stockData = req.body;

  // Simple validation
  if (!stockData.date || !stockData.date || !stockData.weather || !stockData.temp || !stockData.maxtemp || !stockData.pressure || !stockData.humidity) {
    return res.status(400).send("All fields are required.");
  }

  try {
    // Insert stock data into MongoDB
    const result = await client.db("finance").collection("mumbai").insertOne({
      ...stockData,
      date: new Date(stockData.date) // Convert date to Date object
    });
    res.status(201).json({ message: "Stock data inserted", id: result.insertedId });
  } catch (error) {
    console.error("Error inserting stock data:", error);
    res.status(500).send("Error inserting stock data.");
  }
});










app.get('/kolkata', async (req, res) => {
  try {
    const stocks = await client.db("finance").collection("kolkata").find({}).toArray();
    
    
    if (stocks.length === 0) {
      return res.status(404).send("No stock data found.");
    }

    res.status(200).json(stocks);
  } catch (error) {
    console.error("Error retrieving stock data:", error);
    res.status(500).send("Error retrieving stock data.");
  }
});



// NEW POST endpoint to insert stock data
app.post('/kolkata', async (req, res) => {
  const stockData = req.body;

  // Simple validation
  if (!stockData.date || !stockData.date || !stockData.weather || !stockData.temp || !stockData.maxtemp || !stockData.pressure || !stockData.humidity) {
    return res.status(400).send("All fields are required.");
  }

  try {
    // Insert stock data into MongoDB
    const result = await client.db("finance").collection("kolkata").insertOne({
      ...stockData,
      date: new Date(stockData.date) // Convert date to Date object
    });
    res.status(201).json({ message: "Stock data inserted", id: result.insertedId });
  } catch (error) {
    console.error("Error inserting stock data:", error);
    res.status(500).send("Error inserting stock data.");
  }
});










app.get('/chennai', async (req, res) => {
  try {
    const stocks = await client.db("finance").collection("chennai").find({}).toArray();
    
    
    if (stocks.length === 0) {
      return res.status(404).send("No stock data found.");
    }

    res.status(200).json(stocks);
  } catch (error) {
    console.error("Error retrieving stock data:", error);
    res.status(500).send("Error retrieving stock data.");

  }
});



// NEW POST endpoint to insert stock data
app.post('/chennai', async (req, res) => {
  const stockData = req.body;

  // Simple validation
  if (!stockData.date || !stockData.date || !stockData.weather || !stockData.temp || !stockData.maxtemp || !stockData.pressure || !stockData.humidity) {
    return res.status(400).send("All fields are required.");
  }

  try {
    // Insert stock data into MongoDB
    const result = await client.db("finance").collection("chennai").insertOne({
      ...stockData,
      date: new Date(stockData.date) // Convert date to Date object
    });
    res.status(201).json({ message: "Stock data inserted", id: result.insertedId });
  } catch (error) {
    console.error("Error inserting stock data:", error);
    res.status(500).send("Error inserting stock data.");
  }
});





app.get('/bangalore', async (req, res) => {
  try {
    const stocks = await client.db("finance").collection("bangalore").find({}).toArray();
    
    
    if (stocks.length === 0) {
      return res.status(404).send("No stock data found.");
    }

    res.status(200).json(stocks);
  } catch (error) {
    console.error("Error retrieving stock data:", error);
    res.status(500).send("Error retrieving stock data.");
  }
});



// NEW POST endpoint to insert stock data
app.post('/bangalore', async (req, res) => {
  const stockData = req.body;

  // Simple validation
  if (!stockData.date || !stockData.date || !stockData.weather || !stockData.temp || !stockData.maxtemp || !stockData.pressure || !stockData.humidity) {
    return res.status(400).send("All fields are required.");
  }

  try {
    // Insert stock data into MongoDB
    const result = await client.db("finance").collection("bangalore").insertOne({
      ...stockData,
      date: new Date(stockData.date) // Convert date to Date object
    });
    res.status(201).json({ message: "Stock data inserted", id: result.insertedId });
  } catch (error) {
    console.error("Error inserting stock data:", error);
    res.status(500).send("Error inserting stock data.");
  }
});



app.get('/hyderabad', async (req, res) => {
  try {
    const stocks = await client.db("finance").collection("hyderabad").find({}).toArray();
    
    
    if (stocks.length === 0) {
      return res.status(404).send("No stock data found.");
    }

    res.status(200).json(stocks);
  } catch (error) {
    console.error("Error retrieving stock data:", error);
    res.status(500).send("Error retrieving stock data.");
  }
});



// NEW POST endpoint to insert stock data
app.post('/hyderabad', async (req, res) => {
  const stockData = req.body;

  // Simple validation
  if (!stockData.date || !stockData.date || !stockData.weather || !stockData.temp || !stockData.maxtemp || !stockData.pressure || !stockData.humidity) {
    return res.status(400).send("All fields are required.");
  }

  try {
    // Insert stock data into MongoDB
    const result = await client.db("finance").collection("hyderabad").insertOne({
      ...stockData,
      date: new Date(stockData.date) // Convert date to Date object
    });
    res.status(201).json({ message: "Stock data inserted", id: result.insertedId });
  } catch (error) {
    console.error("Error inserting stock data:", error);
    res.status(500).send("Error inserting stock data.");
  }
});







app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  connectDB(); // Connect to MongoDB when the server starts
});
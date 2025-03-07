const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

console.log("app: ", app)

app.listen(8080, () => {
    console.log("Server listening on port 8080")
})

app.get('/', (req, res) => {
    res.send("Hello from Mrignayani server")
})

// Sample data
const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
    { id: 4, name: 'Product 4' },
    { id: 5, name: 'Product 5' },
    { id: 6, name: 'Product 6' },
    { id: 7, name: 'Product 7' },
    { id: 8, name: 'Product 8' },
    { id: 9, name: 'Product 9' },
    { id: 10, name: 'Product 10' },
    { id: 11, name: 'Product 11' },
    { id: 12, name: 'Product 12' },
    // ... Add more products
  ];
  
  // Route to handle pagination requests
  app.get('/api/products', (req, res) => {
    const page = parseInt(req.query.page);
    const pageSize = parseInt(req.query.pageSize);
    
    // Calculate the start and end indexes for the requested page
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;

    console.log("startIndex: " + startIndex + "endIndex: " + endIndex)
    
    // Slice the products array based on the indexes
    const paginatedProducts = products.slice(startIndex, endIndex);
    console.log("paginatedProducts: " + paginatedProducts)
    
    // Calculate the total number of pages
    const totalPages = Math.ceil(products.length / pageSize);
    console.log("totalPages: " + totalPages);
    console.log(totalPages)
    
    // Send the paginated products and total pages as the API response
    res.json({ products: paginatedProducts, totalPages });
  });
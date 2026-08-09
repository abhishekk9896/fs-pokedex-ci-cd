const express = require('express')
const app = express()

// Get the port from environment variable
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

// Endpoint to verify deployed versions
app.get('/version', (req, res) => {
  res.send('1')
})

// Application health check endpoint
app.get('/health', (req, res) => {
  res.send('ok')
})

const start = async () => {
  await app.listen(PORT)
  console.log(`server started on port ${PORT}`)
}

start()
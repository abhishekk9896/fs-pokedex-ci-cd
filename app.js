const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

// Dummy endpoint to verify new deployments
app.get('/version', (req, res) => {
  res.send('1') // Increment this string to verify new deployed versions
})

// Application health check endpoint for Render
app.get('/health', (req, res) => {
  res.send('ok')
})

const start = async () => {
  await app.listen(PORT)
  console.log(`server started on port ${PORT}`)
}

start()

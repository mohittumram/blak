import app from "./App"
import http from "http";
const config = require("./config/Config")
// Configuring Environment Variables
// Check if process.env.NODE_ENV is defined
const env = process.env.NODE_ENV || "local"; // Fallback to 'development' if not set

// Retrieve configuration for the current environment
const configValue = config.get(env);

// Ensure the port is defined
const port = configValue?.PORT || 3000; 
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on ${env} environment with Port Number: ${port}`);
});

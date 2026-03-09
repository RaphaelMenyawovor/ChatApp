import app from './app.js';
import "dotenv/config";
import { Socket } from "socket.io";

const PORT = process.env.PORT || 3000;

// Initialize Socket.IO
const io = new Socket.Server(app);


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

app.use(express.json());

app.post("/save-ip", (req, res) => {
  const { ip } = req.body;
  const logPath = path.join(__dirname, "ips.txt");
  const timestamp = new Date().toISOString();
  const logEntry = `${timestamp} - ${ip}\n`;

  fs.appendFile(logPath, logEntry, (err) => {
    if (err) {
      console.error("Error saving IP:", err);
      return res.status(500).json({ error: "Failed to save IP" });
    }
    res.json({ success: true });
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));

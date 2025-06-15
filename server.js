const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const upload = multer({ dest: "uploads/" });

app.use(express.static("public"));
app.use(express.json());

app.post("/upload", upload.single("bukti"), (req, res) => {
  console.log("Data:", req.body);
  console.log("File:", req.file);
  // Simulasi kirim ke Telegram bisa ditambahkan di sini
  res.send({ status: "success" });
});

app.listen(3000, () => {
  console.log("Server berjalan di http://localhost:3000");
});

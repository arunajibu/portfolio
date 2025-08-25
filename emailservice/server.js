const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API Route for contact form
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Setup Nodemailer (Example using Gmail)
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "arunavasanth2024@gmail.com",   // replace with your email
        pass: "tnan stui donu bigv",      // use an app password (not your actual password)
      },
    });

    // Email content
    let mailOptions = {
      from: email,
      to: "arunavasanth2024@gmail.com",  // where you want to receive messages
      subject: `New Contact Form Message from ${name}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

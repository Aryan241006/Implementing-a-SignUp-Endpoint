const express = require('express');
const app = express();

app.use(express.json());

app.post('/signup', (req, res) => {
    const { username, email, password, dateOfBirth } = req.body;

    if (!username) {
      return res.status(400).send('Username cannot be empty.');
    }
  
    if (!email) {
      return res.status(400).send('Email cannot be empty.');
    }
  
    if (password.length < 8 || password.length > 16) {
      return res.status(400).send('Password length should be greater than 8 or less than or equal to 16.');
    }
  
    res.send('User created successfully.');
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 4000;
const DATA_FILE = path.join(__dirname, 'status.json');

app.use(cors());
app.use(express.json());

// Hent alle statuskort
app.get('/api/status', (req, res) => {
  fs.readFile(DATA_FILE, 'utf8', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') return res.json([]);
      return res.status(500).json({ error: 'Kunne ikke lese data.' });
    }
    res.json(JSON.parse(data));
  });
});

// Opprett nytt statuskort
app.post('/api/status', (req, res) => {
  const newStatus = req.body;
  fs.readFile(DATA_FILE, 'utf8', (err, data) => {
    let statuses = [];
    if (!err) {
      try {
        statuses = JSON.parse(data);
      } catch (e) {}
    }
    newStatus.id = Date.now();
    statuses.unshift(newStatus);
    fs.writeFile(DATA_FILE, JSON.stringify(statuses, null, 2), (err) => {
      if (err) return res.status(500).json({ error: 'Kunne ikke lagre data.' });
      res.status(201).json(newStatus);
    });
  });
});

app.listen(PORT, () => {
  console.log(`Status backend kjører på http://localhost:${PORT}`);
});

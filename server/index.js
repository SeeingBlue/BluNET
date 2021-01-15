import express from 'express';
import bodyParser from 'body-parser';

import home from './routes/home.js';
import utb from './routes/utb.js';
import ui from './routes/ui.js';
import path from 'path';

const app = express();
const PORT = 5000;
app.use(express.static(path.join(path.resolve(), "..", "build")));
app.use(express.static("public"));
app.use((req, res, next) => {
    res.sendFile(path.join(path.resolve(), "..", "build", "index.html"));
  });
app.use(bodyParser.json());

app.use('/ui', ui);
app.use('/ui/utb', utb);
app.use('/ui/home', home);

app.get('/', (req, res) => res.send(''));

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

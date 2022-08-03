const express = require('express');
const cors = require('cors');
const {parser} = require('html-metadata-parser');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
	res.send('OK');
});

app.post('/proxy/get-meta', async (req, res) => {
	const {url} = req.body;

	const data = await parser(url, {});
	res.json(data);
});

app.listen(process.env.PORT || 8080, () => {
	console.log('Example app listening on port 8080! => http://localhost:8080');
});

module.exports = app;

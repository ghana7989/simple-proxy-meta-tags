const app = require('express')();
const cors = require('cors');
const {json} = require('express');
const {parser} = require('html-metadata-parser');

app.use(json());
app.use(cors());

app.get('/health', (req, res) => {
	res.send('OK');
});

app.post('/proxy/get-meta', async (req, res) => {
	const {url} = req.body;
	const data = await parser(url);
	res.json(data);
});

app.listen(3000, () => {
	console.log('Example app listening on port 3000!');
});

const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<div style="margin: 10px; padding: 10px 20px; color:red; font-weight:bold" >Hello, World!</div>');
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
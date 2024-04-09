const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req: any, res: any) => {
    res.sendFile(__dirname + '/home.html');
});

app.get('/about', (req: any, res: any) => {
    res.sendFile(__dirname + '/about.html');
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
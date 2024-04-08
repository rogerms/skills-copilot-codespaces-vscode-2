// Create web server 

var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var comments = require('./comments.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/comments', function(req, res) {
    res.json(comments);
}
);

app.post('/comments', function(req, res) {
    var comment = req.body;
    comments.push(comment);
    fs.writeFile('comments.json', JSON.stringify(comments, null, 4), function(err) {
        console.log(err);
    });
    res.json(comments);
}
);

app.listen(3000, function() {
    console.log('Server is running on port 3000');
}
);

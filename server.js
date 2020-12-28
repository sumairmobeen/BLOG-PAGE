let users =
{
    email: "mobeengrs@gmail.com",
    password: "123"
};
let datacome = [

]

// var PORT = process.env.PORT || 5000;
var express = require('express');
var cors = require('cors');
var morgan = require('morgan');
var bodyParser = require('body-parser');
const { response } = require('express');
var app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json())

app.post('/login', (req, res) => {
    let email1 = req.body.email;
    let password1 = req.body.password;

    // res.send(req.body);
    if (users.email === email1 && users.password === password1) {
        res.send({
            message: "Signed up succesfully",
            status: 200,
        });

    } else {
        res.send(

            {
                message: " user not found",
                status: 400,
            }
        );

    }
});

app.post('/blogs', (req, res) => {
    let title = req.body.title;
    let text = req.body.text;
    datacome.push({
        title : title,
         text : text,
    });
    res.send(datacome)
});

app.get("/getdata", function(req, res, next){
    res.send(datacome)
})

app.listen(5000, () => {
    console.log("server is running on " + 5000);
});
// return false;
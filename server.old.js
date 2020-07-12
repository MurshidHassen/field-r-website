var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const creds = require('./config');

// var transport = {
//     host: 'smtp.example.com', // Don’t forget to replace with the SMTP host of your provider
//     port: 587,
//     auth: {
//     user: creds.USER,
//     pass: creds.PASS
//   }
// }

// var transport = nodemailer.createTransport({
//     host: "smtp.mailtrap.io",
//     port: 2525,
//     ssl: false,
//     tls: false,
//     auth: {
//         user: "d988d68f7a419d",
//         pass: "f54cf8641fc202"
//     }
// });

const app = express()
const path = require('path')
const PORT = process.env.PORT || 5000

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};

app.use(cors())

var transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    logger: true,
    debug: true,
    //ignoreTLS: true, // add this 
    auth: {
      user: "projectvimo@gmail.com",
      pass: "mmwwyficjykysyyn"
    }
});

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log(success)
        console.log('Server is ready to take messages');
    }
});

router.post('/demo', (req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var message = req.body.schoolClubName
    console.log(message)
    var content = `name: ${name} \n email: ${email} \n message: ${message} `

    var mail = {
        from: "projectvimo@gmail.com",
        to: "murshid.hassen@gmail.com",  // Change to email address that you want to receive messages on
        subject: 'New Message from Contact Form',
        text: content
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            console.log("Error in transporter ", err)
            res.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'success'
            })
        }
    })
})


router.post('/investment', (req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var message = req.body.message
    var content = `name: ${name} \n email: ${email} \n message: ${message} `

    var mail = {
        from: name,
        to: 'RECEIVING_EMAIL_ADDRESS_GOES_HERE',  // Change to email address that you want to receive messages on
        subject: 'New Message from Contact Form',
        text: content
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'success'
            })
        }
    })
})

app.use(express.json())
app.use(router);

express()
  .use(express.static(path.join(__dirname, 'build')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('build/index.html'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))



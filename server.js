"use strict";

var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");
const cors = require("cors");
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
const path = require('path');
const { isEmptyBindingElement } = require('typescript');
const PORT = process.env.PORT || 5000


 // async..await is not allowed in global scope, must use a wrapper
 async function demo(schoolClubName, division, nameoftheCoach,contactNumber,districtName) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();
  
    // create reusable transporter object using the default SMTP transport
    // let transporter = nodemailer.createTransport({
    //   host: "smtp.gmail.com",
    //   port: 465,
    //   secure: true, // true for 465, false for other ports
    //   auth: {
    //     user: "projectvimo@gmail.com", // generated ethereal user
    //     pass: "", // generated ethereal password
    //   },
    // });

    let transporter = nodemailer.createTransport({
      host: "server.fieldr.lk",
      port: 587,
      secure: false, // true for 465, false for other ports
      ignoreTLS : false,
      requireTLS: true,
      tls: true,
      auth: {
        user: "contactus@fieldr.lk", // generated ethereal user
        pass: "FieldR@2", // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Field R 👻" <contactus@fieldr.lk>', // sender address
      to: "contactus@fieldr.lk, thariq@fieldr.lk, murshid.hassen@gmail.com", // list of receivers
      subject: "For Demo Request", // Subject line
      text: `${schoolClubName + division + nameoftheCoach + contactNumber + districtName}`, // plain text body
      html: `<b>Demo Request ${schoolClubName + division + nameoftheCoach + contactNumber + districtName} </b>`, // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
  
async function investor(nameofInvestor, belongingInstitution,investorContactNumber, requiredInformation) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "server.fieldr.lk",
      port: 587,
      secure: false, // true for 465, false for other ports
      ignoreTLS : false,
      requireTLS: true,
      tls: true,
      auth: {
        user: "contactus@fieldr.lk", // generated ethereal user
        pass: "FieldR@2", // generated ethereal password
      },
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Field R 👻" <contactus@fieldr.lk>', // sender address
      to: "contactus@fieldr.lk, thariq@fieldr.lk, murshid.hassen@gmail.com", // list of receivers
      subject: "For Investments ✔", // Subject line
      text: `${nameofInvestor, belongingInstitution,investorContactNumber, requiredInformation}`, // plain text body
      html: `<b>For Investments ${nameofInvestor, belongingInstitution,investorContactNumber, requiredInformation} </b>`, // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
 

// var transport = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     logger: true,
//     debug: true,
//     //ignoreTLS: true, // add this 
//     auth: {
//       user: "projectvimo@gmail.com",
//       pass: "mmwwyficjykysyyn"
//     }
// });

// var transporter = nodemailer.createTransport(transport)

// transporter.verify((error, success) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(success)
//         console.log('Server is ready to take messages');
//     }
// });

router.post('/demo', (req, res, next) => {
    

    let schoolClubName = req.body.schoolClubName
    let division = req.body.division
    let nameoftheCoach = req.body.nameoftheCoach
    let districtName = req.body.districtName
    let contactNumber = req.body.contactNumber


    console.log(schoolClubName, division, nameoftheCoach, districtName, contactNumber)


    if(schoolClubName && division && nameoftheCoach && contactNumber && districtName){
        demo(schoolClubName, division, nameoftheCoach,contactNumber,districtName).catch(console.error);
        res.json({
            status: 'success'
        })
    }else{
        console.log("Error in transporter ", err)
        res.json({
            status: 'fail'
        })
    }
})

router.post('/investment', (req, res, next) => {
    
    let nameofInvestor = req.body.nameofInvestor
    let belongingInstitution = req.body.belongingInstitution
    let investorContactNumber = req.body.investorContactNumber
    let requiredInformation = req.body.requiredInformation

    console.log(nameofInvestor, belongingInstitution, investorContactNumber, requiredInformation)


    if(nameofInvestor && belongingInstitution && investorContactNumber && requiredInformation){
        investor(nameofInvestor, belongingInstitution,investorContactNumber, requiredInformation).catch(console.error);
        res.json({
            status: 'success'
        })

    }else{
        console.log("Error in transporter ", err)
        res.json({
            status: 'fail'
        })
    }
})

app.use(cors())
app.use(express.json())
app.use(router);

app
  .use(express.static(path.join(__dirname, 'build')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('build/index.html'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))





  
 
  
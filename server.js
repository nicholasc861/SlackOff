const twilio = require('twilio')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var globalVar
var userName
var message
var outgoingPhone
var command
var listofEveryone = []


app.post('/', urlencodedParser, function (req, res) {
  var accountSid = 'AC069753dcf0568bc05d491ddb5dd4b5c4';
  var authToken = '24b26bcadf2fbbb198593134e0572da9';
  var client = require('twilio')(accountSid, authToken);

  globalVar = req.body.text;
  userName = req.body.user_name;
  command = req.body.command;

  outgoingPhone = globalVar.substr(0, 8);

  if(command == '/addnumber'){
    listofEveryone.push('+1' + globalVar);
    res.send('Successfully added ' + globalVar + " to list");
  }


  if(command == '/slackoff'){
  if(outgoingPhone == 'everyone'){
    var arrayLength = listofEveryone.length;
    message = globalVar.substr(9,);

    for (var i = 0; i < arrayLength; i++){
       client.messages.create({
        body: 'From ' + userName + ': ' + message,
        from: '+16473608227',
        to: listofEveryone[i]

        })
      }

  } else {
    outgoingPhone = '+1' + globalVar.substr(0, 11);
    message = globalVar.substr(11,);

    client.messages.create({
    body: 'From ' + userName + ': ' + message,
    from: '+16473608227',
    to: outgoingPhone

    })

  }
  res.send('Successfully sent ' + message + ' to ' + outgoingPhone);
}
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


# SlackOff
![Image of SlackOff](/original.png | 250x250)
## Inspiration
Although the ability to stay connected while away from home has vastly improved with the use of data, many individuals are unable to afford data. SlackOff was built to help users without data to stay connected with their team.

## What it does
Our Slack app allows for users to send messages to any phone number that supports SMS capabilities. This allows users to connect with offline members quickly. The offline user is also able to send a SMS to a dedicated phone number which is then automatically forwarded to the Slack channel.

## How we built it
Using Twilio's and Slack's API, messages between users in Slack and the phone number are able to connect seamlessly. Using Node.js, a web server using Azure was sent webhooks that were forwarded through Twilio.

## Challenges we ran into
Being novice hackers, we have never worked with Node.js, online web applications, nor setting up servers. It was great learning experience for all of us regardless of the challenges we ran into.

## Accomplishments that we're proud of
At the end of the day, we are able to demo a working prototype.

## What's next for SlackOff
Being able to associate a contact number with the Slack user id would be beneficial for easier access between SMS and Slack. Moreover, we wish to extend this support to other messaging services such as Facebook Messenger.

## Built With
Node.js, Twilio

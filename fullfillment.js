// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
'use strict';

const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const googleAssistantRequest = 'google'; // Constant to identify Google Assistant requests
const DialogflowApp = require('actions-on-google').DialogflowApp; // Google Assistant helper library

const {Card, Suggestion} = require('dialogflow-fulfillment');

process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));

  function welcome(agent) {
      agent.add(`Welcome , How can I help you?`);
  }

  function fallback(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
}
  function market(agent){
        agent.add(`can`);
  }
 
  function profit(agent){
        agent.add(` profitable as of today.`);
  }
  function loss(agent){
        agent.add(`in a loss right now.`);
  }


  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Default Fallback Intent', fallback);
  intentMap.set('Market news', market);

  intentMap.set('Profit Intent', profit);
  intentMap.set('Loss Intent', loss);



  // intentMap.set('your intent name here', googleAssistantHandler);
  agent.handleRequest(intentMap);
});

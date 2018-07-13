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
      agent.add(`Welcome to minance, How can I help you?`);
  }

  function fallback(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
}
  function market(agent){
        agent.add(``);
  }
    function stock(agent){
        agent.add(`There is a negative news on Stock A. Looks like the company is… This is why we decided to sell X shares of Stock A in your portfolio today.`);
  }
  function product(agent){
        agent.add(` Your Arbor portfolio is at a profit of X% or  300000 rupees.`);
  }
  function portfolio(agent){
        agent.add(` Your portfolio currently stands at a loss of X%. The realized loss is  30000 rupees and the unrealized profit is  30000 rupees.`);
  }
  function PnL(agent){
        agent.add(` Yes, I will have your Profit and Loss/Performance report for this financial year shared with you`);
  }
    function financial(agent){
        agent.add(`Yes. I will have your Profit and Loss statement to date shared with you.`);
  }
  function buy(agent){
        agent.add(`There is a positive news on Stock A. Looks like the company is… This is why we decided to buy X shares of Stock A in your portfolio today.`);
  }
  function expiry(agent){
        agent.add(` Different underlying assets have different expiries. Which underlying are you referring to?`);
  }
  function redeemable(agent){
        agent.add(`Your total profit stands at  30000 rupees. You can redeem upto  30000 rupees from your account as of today.`);
  }
  function stockno(agent){
        agent.add(` Your Bloom portfolio currently consists of X  stocks. In your Arbor portfolio, you are invested in Y  stocks.`);
  }
  function out(agent){
        agent.add(`You have  30000 rupees as free cash and  30000 rupees as profits booked in your account as of today. You can redeem  30000 rupees   `);
  }
  function price(agent){
        agent.add(`Stock name X can be bought for  30000 rupees right now.`);
  }
  function investment(agent){
        agent.add(`You started with a total capital of  30000 rupees. Your deployed capital stands at  30000 rupees.`);
  }
  function call(agent){
        agent.add(`call intent`);
  }
  function idle(agent){
        agent.add(` Your total investment capital is 100000 rupees. The total deployed capital is 30000 rupees . The idle/ free cash left in your account is Rs. Z.`);
  }
  function profit(agent){
        agent.add(` There are X strategies running in your account currently. Out of these, Y of strategies are profitable as of today.`);
  }
  function loss(agent){
        agent.add(`There are X strategies running in your account currently. Out of these, Y of strategies are in a loss right now.`);
  }


  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Default Fallback Intent', fallback);
  intentMap.set('Market news', market);
  intentMap.set('Stock Intent', stock);
  intentMap.set('Product Intent', product);
  intentMap.set('Portfolio Intent', portfolio);
  intentMap.set('PnL Intent', PnL);
  intentMap.set('Finance Intent', financial);
  intentMap.set('Buy Intent', buy);
  intentMap.set('Expiry Intent', expiry);
  intentMap.set('Redeemable Intent', redeemable);
  intentMap.set('Out Intent', out);
  intentMap.set('Stock No Intent', stockno);
  intentMap.set('Price Intent', price);
  intentMap.set('Investment Intent', investment);
  intentMap.set('Profit Intent', profit);
  intentMap.set('Loss Intent', loss);
  intentMap.set('Call Intent', call);
  intentMap.set('Idle Intent', idle);


  // intentMap.set('your intent name here', googleAssistantHandler);
  agent.handleRequest(intentMap);
});

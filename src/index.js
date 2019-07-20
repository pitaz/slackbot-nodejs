import SlackBot from 'slackbots';
// import handleMessage from './slack';

const channel = 'general';

const bot = new SlackBot({
  token: 'xoxb-685966139888-689402118467-3w2ac3t2rTnNa5LYwROEN0EK',
  name: 'greetbot',
});

bot.on('start', () => {
  bot.postMessageToChannel(channel, 'Hello world!');
});


const getGreeting = () => {
  const greetings = [
    'hello!',
    'hi there!',
    'cheerio!',
    'how do you do!',
    '¡hola!',
  ];
  return greetings[Math.floor(Math.random() * greetings.length)];
};

const sendGreeting = () => {
  const greeting = getGreeting();
  bot.postMessageToChannel(channel, greeting);
};

const handleMessage = (message) => {
  switch (message) {
  case 'hi':
  case 'hello':
    sendGreeting();
    break;
  default:
  }
};

bot.on('message', (data) => {
  if (data.type !== 'message') {
    return;
  }

  handleMessage(data.text);
});

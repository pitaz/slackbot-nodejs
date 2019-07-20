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

const sendGreeting = (channel, bot) => {
  const greeting = getGreeting();
  bot.postMessageToChannel(channel, greeting);
};

const handleMessage = (message, bot, channel) => {
  switch (message) {
  case 'hi':
  case 'hello':
    sendGreeting(channel, bot);
    break;
  default:
  }
};

export default handleMessage;

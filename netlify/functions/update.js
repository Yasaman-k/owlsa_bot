const sendMessage = require('../../sendMessage');

exports.handler = async (event) => {
  try {
    const { message } = JSON.parse(event.body);
    const chat_id = message.chat.id;
    sendMessage(chat_id, 'hi');
    return { statusCode: 200, body: '' };
  } catch (error) {
    console.error('error in handler:', error);
    return { statusCode: 400, body: 'This endpoint is meant for bot and telegram communication' };
  }
};

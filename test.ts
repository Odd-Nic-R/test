import { Bot, posbus } from '@momentum-xyz/bot-sdk';


let myUserId: string | null = null;

const bot = new Bot({
  worldId: '00000000-0000-8000-8000-00000000000a',
  onConnected: (userId) => {
    console.log('Connected!');
    myUserId = userId;
  },
  onUserAdded: (user) => {
    console.log('User added!', user);
    if (user.id !== myUserId) {{
      setTimeout(() => {
        bot.sendHighFive(user.id, `~~ High5 Bot ~~`);
      }, 3000);
    }
  }
  onDisconnected: () => {
    console.log('Disconnected!');
  },
  onJoinedWorld: (data) => {
    console.log('Joined world!', data);
  },
  // ...
});

// connect as Guest
bot.connect();
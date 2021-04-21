module.exports = {
    name: 'play',
    description: 'play a wild sound !',
    async execute(message, args) {
        if (!message.guild) return;

        if (message.member.voice.channel) {
            const ytdl = require('ytdl-core');
            const connection = await message.member.voice.channel.join();
            const dispatcher = connection.play(ytdl(args[0]), {
                volume: 0.7,
            });
            dispatcher.on('start', () => {
                message.client.user.setActivity("Spider Cochon", {type: 'LISTENING'});
            })
        
            dispatcher.on('error', () => {
                message.reply("Je n'ai pas reussi a lire cett musique");
                dispatcher.destroy();
                message.member.voice.channel.leave();
            })
            
            dispatcher.on('finish', () => {
                dispatcher.destroy();
                message.member.voice.channel.leave();
            })
        }
        else {
            message.reply('you must join a channel')
        }
    }
};
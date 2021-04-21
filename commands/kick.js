module.exports = {
    name: 'kick',
    description: 'toute les commandes',
    execute(message) {
        const user = message.mentions.users.first();

        if (user) {
            const member = message.guild.member(user);

            if (member) {
                member
          .kick('WESH WESH CANNE A PECHE , LES LOGS TU CONNAIT FRR')
          .then(() => {
            message.reply(`j'ai kick ${user.tag}`);
        })
        .catch(err => {
            message.reply("j'ai pas pu le kick");
            console.error(err);
        });
    } else {
        message.reply("il n'est pas dans le serveur !                      FRR");
      }
    } else {
        message.reply("tu dois mentionner quelqu'un pour le kick                             FRR")
    }
    }
};
module.exports = {
    name: 'avatar',
    description: 'rien de plus simple pour connaitre et le nom du serveur et le nombre de personne (bot confondu) un peu inutile :/',
    execute(message) {
        if (!message.mentions.users.size) {
            return message.channel.send(`Avatar: ${message.author.displayAvatarURL({ format: 'png' })}`);
        }

        const avatarList = message.mentions.users.map(user => {
            return (`avatar de ${user.username} est ${user.displayAvatarURL({ format: 'png' })}`);
        });

        message.channel.send(avatarList);
    }
};
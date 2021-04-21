module.exports = {
    name: 'server',
    description: 'rien de plus simple pour connaitre et le nom du serveur et le nombre de personne (bot confondu) un peu inutile :/',
    execute(message) {
        message.channel.send(`Server Name:${message.guild.name}\n Number of User:${message.guild.memberCount}`);
    }
};
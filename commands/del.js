module.exports = {
    name: 'delmsg',
    description: 'supprime un ou plusieurs messages',
    execute(message, args) {
       const amount = parseInt(args[0]) +1;

       if (isNaN(amount)) {
           return message.reply('Erreur , Nombre invalide')
       }
       else if (amount <= 1 || amount > 100) {
           return message.reply("Erreur , Nombre trop petit ou trop grand (1 ou 99)")
       }

       message.channel.bulkDelete(amount)
       .then(messages => console.log(`${size} message(s) supprimé(s)`))
    }
};
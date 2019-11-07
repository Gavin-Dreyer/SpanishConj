const server = require('./server.js');

const PORT = process.env.PORT || 3333;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

// exports.up = function(knex) {
//   return knex.schema.createTable('verbs', function(table){
//     table.increments()
//     table.string('spanish verb')
//     table.string('mood')
//     table.string('tense')
//     table.string('english definition')
//     table.string('first person singular')
//     table.string('second person singular')
//     table.string('third person singular')
//     table.string('first person plural')
//     table.string('second person plural')
//     table.string('third person plural')
//   })
// };

// exports.down = function(knex) {
//   return knex.schema.dropTableIfExists('verbs');
// };

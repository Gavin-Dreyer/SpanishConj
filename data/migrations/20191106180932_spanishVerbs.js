exports.up = function(knex) {
  return knex.schema.createTable('verbs', function(table){
    table.increments()
    table.string('spanishVerb')
    table.string('mood')
    table.string('tense')
    table.string('englishDefinition')
    table.string('firstPersonSingular')
    table.string('secondPersonSingular')
    table.string('thirdPersonSingular')
    table.string('firstPersonPlural')
    table.string('secondPersonPlural')
    table.string('thirdPersonPlural')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('verbs');
};

var Event = DS.Model.extend({
  title:       DS.attr('string'),
  date:        DS.attr('string'),
  description: DS.attr('string')
});

Event.FIXTURES = [
  {
    id:          1,
    date:        "12 - 13 февраля 2014 года",
    description: "Ember.js - инструмент быстрого прототипирования"
  }
];

export default Event;

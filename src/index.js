const { invert } = require('lodash');

const _sortArray = (array) =>
  array.sort((a,b) => a - b);

const _mapDaysAndKeys = (days, reverse = false) => {
  let keys = {
    'hoje': 0,
    'segunda': 1,
    'terça': 2,
    'quarta': 3,
    'quinta': 4,
    'sexta': 5,
    'sábado': 6,
    'domingo': 7
  };

  keys = (reverse) ? invert(keys) : keys;
  days = days.map(day => keys[day]);

  return days;
}

const _reorderDays = (dias) => {
  dias = _mapDaysAndKeys(dias);
  dias = _sortArray(dias);

  return _mapDaysAndKeys(dias, true);
}

const _camelize = (word) =>
  word
    .trim()
    .split(" ")
    .map( x => x.trim() )
    .map( x => x.toLowerCase() )
    .map( ([head, ...tail]) => head.toUpperCase() + tail.join('') )
    .join(" ")

const _sufixfy = (dia, index, length) => {
  if(index === 0) return _camelize(dia);

  return (index === length - 1) ?
    ` e ${ dia }` :
    `, ${ dia }`
}

const builder = (dias) => {
  if(dias.length === 1) return _camelize(dias[0]);
  dias = _reorderDays(dias);

  return dias.map((dia, index) => _sufixfy(dia, index, dias.length)).join('');
}

module.exports = builder;
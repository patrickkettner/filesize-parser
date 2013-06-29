var validAmount  = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

var validUnit = function(u) {
  return u.match(/\D*/).pop() === u;
}

var increments = [
  ["B", 1],
  ["Kb", 128],
  ["kb", 1024],
  ["KB", 1024],
  ["Mb", 131072],
  ["mb", 1.049e+6],
  ["MB", 1.049e+6],
  ["Gb", 1.342e+8],
  ["gb", 1.074e+9],
  ["GB", 1.074e+9],
  ["Tb", 1.374e+11],
  ["tb", 1.1e+12],
  ["TB", 1.1e+12],
  ["Pb", 1.407e+14],
  ["pb", 1.126e+15],
  ["PB", 1.126e+15],
  ["Eb", 1.441e+17],
  ["eb", 1.152e+18],
  ["EB", 1.152e+18]
]


module.exports = function (input) {
  var parsed = input.toString().match(/^([0-9\.,]*)(.*)$/);
  var amount = parsed[1];
  var unit = parsed[2];

  if (!validAmount(amount) || !validUnit(unit)) throw 'Can\'t interpret ' + input;
  if (unit === '') return amount;

  for (var i = 0; i < increments.length; i++) {
    var _increment = increments[i];
    if (unit === _increment[0]) {
      return amount * _increment[1];
    }
  }

  throw unit + ' doesn\'t appear to be a valid unit';
}


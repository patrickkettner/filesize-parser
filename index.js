var validAmount  = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

var parsableUnit = function(u) {
  return u.match(/\D*/).pop() === u;
};

var increments = [
  [["B"], 1],
  [["Kb"], 128],
  [["k", "K", "kb", "KB"], 1024],
  [["Mb"], 131072],
  [["m", "M", "mb", "MB"], 1.049e+6],
  [["Gb"], 1.342e+8],
  [["g", "G", "gb", "GB"], 1.074e+9],
  [["Tb"], 1.374e+11],
  [["t", "T", "tb", "TB"], 1.1e+12],
  [["Pb"], 1.407e+14],
  [["p", "P", "pb", "PB"], 1.126e+15],
  [["Eb"], 1.441e+17],
  [["e", "E", "eb", "EB"], 1.152e+18]
];


module.exports = function (input) {
  var parsed = input.toString().match(/^([0-9\.,]*)(?:\s*)?(.*)$/);
  var amount = parsed[1];
  var unit = parsed[2];
  var validUnit = function(sourceUnit) {
    return sourceUnit === unit;
  };

  if (!validAmount(amount) || !parsableUnit(unit)) {
    throw 'Can\'t interpret ' + (input || 'a blank string');
  }
  if (unit === '') return amount;

  for (var i = 0; i < increments.length; i++) {
    var _increment = increments[i];

    if (_increment[0].some(validUnit)) {
      return amount * _increment[1];
    }
  }

  throw unit + ' doesn\'t appear to be a valid unit';
};

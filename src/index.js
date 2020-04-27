

exports.cToF = function (c) {
  let fahrenheit = parseFloat((c * 9 / 5 + 32).toFixed(2));
  return fahrenheit
}

exports.fToC = function (f) {
  let celsium = parseFloat(((f - 32) * 5 / 9).toFixed(2));
  return celsium
}

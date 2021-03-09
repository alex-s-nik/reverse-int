module.exports = function reverse (n) {
  n = Math.abs(n).toString();
  return parseInt(n.split('').reverse().join(''))

}

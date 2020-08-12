export function getAcronym(str) {
  var matches = str.match(/\b(\w)/g);
  var acronym = matches.join('');
  return acronym;
}

export function formatIDR(number) {
  if (typeof number === 'number' && number !== null && number) {
    var reverse = number.toString().split('').reverse().join(''),
      numberFormat = reverse.match(/\d{1,3}/g);
    numberFormat = numberFormat.join('.').split('').reverse().join('');
    return numberFormat;
  } else {
    return number;
  }
}

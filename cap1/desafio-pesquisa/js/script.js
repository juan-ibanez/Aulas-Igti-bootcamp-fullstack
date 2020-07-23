function getGroupMember() {
  const members = [
    'Juan Ibanez',
    'Gustavo Beraldo',
    'Diogo Mondego',
    'Guilherme Pujoni',
    'Aline Rodrigues',
  ];
  return members.sort();
}
function getFullName(...names) {
  return names.join(' ');
}
function transform(input) {
  return input.map((item) => item / 10 + 1);
}
function OnlyNumbersFrom(value) {
  return value
    .split('')
    .filter((char) => {
      return !isNaN(char) && char !== ' ';
    })
    .join('');
}
console.log(getGroupMember());

console.log(getFullName());
console.log(getFullName('Juan'));
console.log(getFullName('Juan', 'Daniel'));
console.log(getFullName('Juan', 'Daniel', 'Ferreira'));
console.log(getFullName('Juan', 'Daniel', 'Ferreira', 'Ibanez'));

console.log(transform([10, 20, 30, 40, 50]));
console.log(transform([61, 72, 83, 94]));

console.log(OnlyNumbersFrom('234jk 23 k. k234. ksdf34765678'));

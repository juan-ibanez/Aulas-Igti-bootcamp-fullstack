window.addEventListener('load', () => {
  doSpred();
  doRest();
  doDestructuring();
});
function doSpred() {
  const marriedMen = people.results.filter(
    (person) => person.name.title === 'Mr'
  );
  const marriedWomen = people.results.filter(
    (person) => person.name.title === 'Ms'
  );
  const marriePeople = [...marriedMen, ...marriedWomen, { msg: 'oi' }];
  console.log(marriePeople);
}

function doRest() {
  console.log(infiniteSum(1, 2));
  console.log(infiniteSum(1, 2, 1000));
  console.log(infiniteSum(1, 2, 1000, 1, 2, 3, 4, 34, 34, 34, 34, 34, 2, 23));
}
function infiniteSum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
function doDestructuring() {
  const first = people.results[0];

  //Repetitiva
  //const username = first.login.username;
  //const password = first.login.password;

  //Usando destructuring
  const { username, password } = first.login;
  console.log(username);
  console.log(password);
}

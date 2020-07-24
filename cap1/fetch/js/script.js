window.addEventListener('load', function () {
  doFetch();
  doFetchAsyncAwait();

  divisionPromise(12, 6).then((result) => {
    console.log(result);
  });

  executeDivisionPromise();
  executeDivisionPromiseAsyncAwait();
});
function doFetch() {
  fetch('https://api.github.com/users/rrgomide')
    .then((res) => {
      res.json().then((data) => {
        showData(data);
      });
    })
    .catch((error) => {
      console.log('Erro na requisição');
    });
}
async function doFetchAsyncAwait() {
  const res = await fetch('https://api.github.com/users/rrgomide');
  const json = await res.json();
  console.log(json);
}

function showData(data) {
  const user = document.querySelector('#user');
  user.textContent = data.login + ' ' + data.name;
}
function divisionPromise(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject('Não é possível dividir por 0');
    }
    resolve(a / b);
  });
}
function executeDivisionPromise() {
  divisionPromise(12, 0)
    .then((result) => {
      console.log(result);
    })
    .catch((errorMensage) => {
      console.log('Falha na divisão ' + errorMensage);
    });
}

async function executeDivisionPromiseAsyncAwait() {
  const division = await divisionPromise(12, 2);
  console.log(division);
}

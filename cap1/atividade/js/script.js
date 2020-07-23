window.addEventListener('load', start);
function start() {
  console.log('Página totalmente carregada');
}

function main() {
  const form = document.querySelector('form');
  let classify;

  function handleForm(event) {
    event.preventDefault();
    const Weight = Number(document.querySelector('#Weight').value);
    const height = Number(document.querySelector('#height').value);

    if (!Weight) {
      setResultado('Peso Inválido', false);
      return;
    }

    if (!height) {
      setResultado('Altura Inválida', false);
      return;
    }

    const imc = getImc(Weight, height);
    classifyImc(imc);
    const msg = `Seu IMC é: ${imc} ${classify}`;
    setResultado(msg, true);
  }

  function classifyImc(imc) {
    if (imc <= 18.4) {
      classify = '(ABAIXO DO PESO)';
    } else if (imc >= 18.5 && imc <= 24.9) {
      classify = '(PESO NORMAL)';
    } else if (imc >= 25 && imc <= 29.9) {
      classify = '(SOBREPESO)';
    } else if (imc >= 30 && imc <= 34.9) {
      classify = '(OBESIDADE GRAU 1)';
    } else if (imc >= 35 && imc <= 39.9) {
      classify = '(OBESIDADE GRAU 2)';
    } else if (imc >= 40) {
      classify = '(OBESIDADE GRAU 3, PROCURE UM MÉDICO!)';
    } else {
      classify = '(IMC INVÁLIDO!)';
    }
    return classify;
  }

  function setResultado(msg, isValid) {
    const resultado = document.querySelector('#result');
    resultado.innerHTML = '';
    const p = document.createElement('p');
    isValid ? p.classList.add('success') : p.classList.add('fail');
    p.innerHTML = `${msg}`;
    resultado.appendChild(p);
  }

  function getImc(Weight, height) {
    const imc = Weight / (height * height);
    return imc.toFixed(2);
  }

  form.addEventListener('submit', handleForm);
}

main();

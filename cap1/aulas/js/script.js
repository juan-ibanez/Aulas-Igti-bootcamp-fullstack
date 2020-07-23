var a = 5;
var b = 4;

var dia = 1;

if (dia === 1) {
  console.log('Domingo');
} else {
  if (dia === 2) {
    console.log('Segunda');
  } else {
    if (dia === 3) {
      console.log('terça');
    } else {
      if (dia === 4) {
        console.log('quarta');
      } else {
        if (dia === 5) {
          console.log('quinta');
        } else {
          if (dia === 6) {
            console.log('sexta');
          } else {
            if (dia === 7) {
              console.log('sábado');
            } else {
              console.log('dia invalido');
            }
          }
        }
      }
    }
  }
}
//prettier-ignore
var r = '';
switch (dia) {
  case 1:
    r = 'Domingo';
    break;
  case 2:
    r = 'Segunda';
    break;
  case 3:
    r = 'Terça';
    break;

  case 4:
    r = 'Quarta';
    break;
  case 5:
    r = 'Quinta';
    break;
  case 6:
    r = 'Sexta';
    break;
  case 7:
    r = 'Sábado';
    break;
  default:
    r = 'Dia inválido';
}
console.log(r);

// Operador ternário
a = 6;
b = 7;

if (a > b) {
  console.log(a + ' é maior que ' + b);
} else {
  if (a < b) {
    console.log(a + ' é menor que ' + b);
  } else {
    console.log(a + 'é igual que ' + b);
  }
}

var resposta = a > b ? 'maior' : a < b ? 'menor' : 'igual';
console.log(resposta);

var diaSemana =
  dia === 1
    ? 'Domingo'
    : dia === 2
    ? 'Segunda'
    : dia === 3
    ? 'terça'
    : dia === 4
    ? 'quarta'
    : dia === 5
    ? 'quinta'
    : dia === 6
    ? 'sexta'
    : dia === 7
    ? 'sabado'
    : 'Dia iválido';
console.log(diaSemana);

// Somatório com while

var numeroAtual = 1;
var somatorio = 0;

while (numeroAtual <= 10) {
  //somatorio = somatorio + numeroAtual;
  somatorio += numeroAtual;
  numeroAtual++;
}
console.log('A soma é ' + somatorio);

var numeroAtual = 1;
var somatorio = 0;

do {
  somatorio += numeroAtual;
  numeroAtual++;
} while (numeroAtual <= 10);
console.log('A soma é ' + somatorio);

var somatorio = 0;

for (numeroAtual = 1; numeroAtual <= 10; numeroAtual++) {
  somatorio += numeroAtual;
}
console.log('A soma é ' + somatorio);

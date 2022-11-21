const modal = document.getElementById("modal");

function calcular() {
  let VlrHora = document.getElementById("ValorHora").value;
  let QtdHora = document.getElementById("QtdHora").value;
  let QtdFilhos = document.getElementById("QtdFilhos").value;

  let TotalSalario = parseFloat(VlrHora * QtdHora);
  let bruto = TotalSalario.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

  console.log(bruto)

  if(
    VlrHora <= 0 ||
    QtdHora <= 0 ||
    QtdFilhos <= 0 ||
    VlrHora == " " ||
    QtdHora == " " ||
    QtdFilhos == " "
  ) {
    VoltarModalErro("Insira os dados corretamente");
  }else if(QtdHora < 10){
    VoltarModalErro("Quantidade de hora inferior a 10")
  } else if (TotalSalario <= 788) {
    let info = (`Seu salario bruto é de ${bruto}, sendo assim seu salário família é de ${(VlrQtdFilhos(QtdFilhos, 30.5))}`);
    AtivarModal(info);
  } else if (TotalSalario <= 1100) {
    let info = (`Seu salario bruto é de ${bruto}, sendo assim seu salario familia é de ${(VlrQtdFilhos(QtdFilhos, 18.5))}`);
    AtivarModal(info);
  } else if (TotalSalario > 1100) {
    let info = (`Seu salario bruto é de ${bruto}, sendo assim seu salario familia é de ${(VlrQtdFilhos(QtdFilhos, 11.9))}`);
    AtivarModal(info);
  }
}

function VlrQtdFilhos(filhos, valor){
  if (filhos < 5){
    return(filhos * valor).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
  }else{
    let Slr = 300
    return Slr.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
  }
}

function AtivarModal(i) {
  modal.style.display = "flex";
    const TextoModal = document.getElementById("TextoModal")
    TextoModal.innerHTML = `${i}`
}

function VoltarModal() {
  modal.style.display = "none";
  location.reload(true);
}

function VoltarModalErro(i) {
  swal({
    title: "Erro",
    text: i,
    icon: "error",
    button: "OK",
  });
}

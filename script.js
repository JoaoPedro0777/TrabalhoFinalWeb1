function calcular() {
  const nome = document.getElementById("nome").value;
  const mensalidade = document.getElementById("mensalidade").value;
  const valor = document.getElementById("material").value;
  const resultado = document.getElementById("resultado");

  if (!nome || mensalidade <= 0) {
    resultado.className = "alert alert-danger";
    resultado.textContent = "Preencha corretamente os dados!";
    resultado.classList.remove("d-none");
    return;
  }

  const total = mensalidade * valor;

  resultado.className = "alert alert-success";
  resultado.innerHTML = `
    Olá <strong>${nome}</strong>, o valor total de sua mensalidade é 
    <strong>R$ ${total.toFixed(2)}</strong>
  `;
  resultado.classList.remove("d-none");
}

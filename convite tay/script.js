// Configurações do evento (edite aqui facilmente)
const CONFIG = {
  telefoneWhatsApp: '5591982419211', // Formato: 55 + DDD + Número
  dataEvento: '06/12/2026'
};

// Abre o envelope ao clicar no selo dourado
function abrirConvite() {
  const envelope = document.getElementById('envelope');
  envelope.classList.add('opened');
}

// Abre qualquer janela modal pelo ID
function abrirModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('active');
  }
}

// Fecha qualquer janela modal pelo ID
function fecharModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('active');
  }
}

// Fecha o modal se o usuário clicar na área escura externa
function fecharSeFora(event, id) {
  if (event.target.id === id) {
    fecharModal(id);
  }
}

// Monta a mensagem e abre o WhatsApp para confirmar presença
function enviarWhatsApp() {
  const inputNome = document.getElementById('nomeConvidado');
  const inputQtd = document.getElementById('qtdAcompanhantes');

  const nome = inputNome.value.trim();
  const qtd = inputQtd.value || 1;

  if (!nome) {
    alert('Por favor, digite seu nome antes de confirmar!');
    inputNome.focus();
    return;
  }

  const mensagem = `Olá Tay! Aqui é o(a)*${nome}*. Confirmo minha presença (${qtd} pessoa(s)) no seu aniversário de 40 anos no dia ${CONFIG.dataEvento}! 🎉🥂`;
  const url = `https://wa.me/${CONFIG.telefoneWhatsApp}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, '_blank');
}
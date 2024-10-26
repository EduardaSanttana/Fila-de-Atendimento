const form = document.getElementById("form");
const filaPrioritaria = [];
const filaNormal = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    adicionar();
});

function adicionar() {
    let nome = document.getElementById('nome').value;
    const prioridade = document.getElementById('prioridade').checked;
    if (nome) {
        if (prioridade) {
            filaPrioritaria.push(nome);
        } else {
            filaNormal.push(nome);
        }
        atualizaFila();
        form.reset();
    }
}

function atualizaFila() {
    const filaPacientes = document.getElementById('fila');
    filaPacientes.innerHTML = '';
    filaPrioritaria.forEach((paciente) => {
        const li = document.createElement('li');
        li.textContent = `${paciente}`;
        filaPacientes.appendChild(li);
    });
    filaNormal.forEach((paciente) => {
        const li = document.createElement('li');
        li.textContent = paciente;
        filaPacientes.appendChild(li);
    });
}

function atendimento() {
    let pacienteEmAtendimento;
    if (filaPrioritaria.length > 0) {
        pacienteEmAtendimento = filaPrioritaria.shift();
    } else if (filaNormal.length > 0) {
        pacienteEmAtendimento = filaNormal.shift();
    } else {
        pacienteEmAtendimento = null;
        alert('A fila está vazia.');
    }
    document.getElementById('atendimento').textContent = pacienteEmAtendimento ? pacienteEmAtendimento : 'Ninguém em atendimento.';
    atualizaFila();
}


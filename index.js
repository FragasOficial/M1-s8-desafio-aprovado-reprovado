const nome = prompt("Digite o nome do aluno:");
const presenca = parseInt(prompt("Digite a presença do aluno (entre 1 e 10):"));

if (nome.length < 5) {
    alert("Nome inválido! Deve ter pelo menos 5 caracteres.");
} else if (presenca < 1 || presenca > 10) {
    alert("Presença inválida! Deve estar entre 1 e 10.");
} else {
    const somaNota = 0;
    const numMaterias = 0;

    while (true) {
        const materia = prompt("Digite o nome da matéria (ou 'fim' para encerrar):");
        if (materia.toLowerCase() === "fim") {
            break;
        }

        const nota = parseFloat(prompt("Digite a nota para " + materia + " (entre 0 e 10):"));

        if (nota < 0 || nota > 10) {
            alert("Nota inválida para " + materia + "! Deve estar entre 0 e 10.");
        } else {
            somaNota += nota;
            numMaterias++;
        }
    }

    const mediaNota = somaNota / numMaterias;

    if (mediaNota >= 8 && presenca >= 6) {
        alert("A nota do aluno " + nome + " é de " + mediaNota.toFixed(1) + " e sua presença é de " + presenca + ": Aluno aprovado!");
    } else {
        alert("A nota do aluno " + nome + " é de " + mediaNota.toFixed(1) + " e sua presença é de " + presenca + ": Aluno reprovado!");
    }
}

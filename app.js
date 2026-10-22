const fs = require('fs/promises');

async function gerenciarAlunos() {
    try {
        // 1. Salve os dados no arquivo alunos.txt
        const conteudo =
            'Ana - Desenvolvimento de Sistemas\n' +
            'Carlos - Desenvolvimento de Sistemas\n' +
            'Mariana - Desenvolvimento de Sistemas';

        await fs.writeFile('alunos.txt', conteudo, 'utf8');

        // 2. Leia o conteúdo do arquivo
        const dados = await fs.readFile('alunos.txt', 'utf8');

        // 3. Exiba o conteúdo no terminal
        console.log(dados);

    } catch (erro) {
        // 4. Exiba uma mensagem de erro
        console.log('Erro ao gerenciar arquivo:', erro.message);
    }
}

// Executa a função
gerenciarAlunos();
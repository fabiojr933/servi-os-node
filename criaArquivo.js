const fs = require('fs');
const path = require('path');

// Caminho do arquivo
const folderPath = 'C:\\teste';
const filePath = path.join(folderPath, 'arquivo.txt');

// Verifica se a pasta existe; se não, cria a pasta
if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
    console.log('Pasta criada:', folderPath);
}

// Função para atualizar o arquivo
function updateFile() {
    const content = `Arquivo atualizado em: ${new Date().toLocaleString()}\n`;

    fs.appendFile(filePath, content, (err) => {
        if (err) {
            console.error('Erro ao atualizar o arquivo:', err);
        } else {
            console.log('Arquivo atualizado:', filePath);
        }
    });
}

// Intervalo de 2 minutos (120000 milissegundos)
setInterval(updateFile, 120000);

// Atualiza o arquivo imediatamente ao iniciar
updateFile();

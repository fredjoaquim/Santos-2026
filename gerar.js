const fs = require('fs');
const santos = require('./data/santos-janeiro.json');

const baseDir = './santos/2026/janeiro/';

if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir, { recursive: true });
}

santos.forEach(santo => {
    const html = '<!DOCTYPE html>\n<html lang="pt-br">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>' + santo.nome + '</title>\n    <link rel="stylesheet" href="../style.css">\n</head>\n<body>\n    <h1>' + santo.nome + '</h1>\n    <p>' + santo.legenda + '</p>\n</body>\n</html>';
    fs.writeFileSync(baseDir + santo.slug + '.html', html);
});
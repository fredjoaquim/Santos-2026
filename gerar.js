// Importa o módulo de arquivos do Node
const fs = require('fs');

// Carrega o arquivo JSON com os santos
const santos = require('./data/santos-janeiro.json');

// Pasta onde os HTML serão gerados
const baseDir = './santos/2026/janeiro';

// Se a pasta não existir, cria
if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
}

// Para cada santo no JSON
santos.forEach(santo => {

  // HTML da página do santo
  const html = `
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>${santo.nome}</title>
  <link rel="stylesheet" href="../../../style.css">
</head>
<body>

<h1>${santo.nome}</h1>

<p><strong>Comemoração:</strong> ${santo.data}</p>

<hr>

<p><strong>Verdade incômoda:</strong><br>
${santo.legenda}</p>

<hr>

<h2>História completa</h2>

<p>${santo.historia}</p>

<hr>

<p><strong>${santo.nome}, rogai por nós.</strong></p>

<p style="font-size: 0.9em;">
Fonte: Martirológio Romano, Vatican.va
</p>

<a href="./index.html">← Voltar aos santos de janeiro</a>

</body>
</html>
  `;

  // Cria o arquivo HTML com o nome do slug
  fs.writeFileSync(`${baseDir}/${santo.slug}.html`, html);
});

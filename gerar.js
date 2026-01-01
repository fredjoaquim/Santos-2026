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

<main class="pagina-santo">

  <h1>${santo.nome}</h1>

  <p class="data-liturgica">${santo.data}</p>

  <blockquote>
    ${santo.legenda}
  </blockquote>

  <div class="historia-santo">
    ${santo.historia
      .split("\n\n")
      .map(p => `<p>${p}</p>`)
      .join("")}
  </div>

  <p class="oracao-final">
    ${santo.nome}, rogai por nós.
  </p>

  <a href="index.html">← Voltar</a>

</main>

</body>
</html>
`;

  // Cria o arquivo HTML com o nome do slug
  fs.writeFileSync(`${baseDir}/${santo.slug}.html`, html);
});

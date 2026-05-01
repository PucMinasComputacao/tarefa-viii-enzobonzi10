const catalogo = [
  {
    id: 1,
    titulo: "Devorador de Estrelas",
    tipo: "filme",
    ano: 2026,
    generos: ["ficção científica", "drama"],
    nota: 10,
    assistido: true
  },
  {
    id: 2,
    titulo: "Dexter",
    tipo: "serie",
    ano: 2006,
    generos: ["investigação", "crime", "suspense"],
    nota: 8.5,
    assistido: false
  },
  {
    id: 3,
    titulo: "Love, Death & Robots",
    tipo: "serie",
    ano: 2019,
    generos: ["ficção científica", "animação"],
    nota: 9,
    assistido: false
  },
  {
    id: 4,
    titulo: "Interestelar",
    tipo: "filme",
    ano: 2014,
    generos: ["ficção científica", "drama"],
    nota: 10,
    assistido: true
  },
  {
    id: 5,
    titulo: "La Casa de Papel",
    tipo: "serie",
    ano: 2017,
    generos: ["suspense", "crime"],
    nota: 9.2,
    assistido: false
  },
  {
    id: 6,
    titulo: "Meu Malvado Favorito",
    tipo: "filme",
    ano: 2010,
    generos: ["comédia", "animação"],
    nota: 8.8,
    assistido: true
  }
];

console.log("Catálogo completo:", catalogo);

console.log("Primeiro título:", catalogo[0].titulo);

console.log("Ano do último item:", catalogo[catalogo.length - 1].ano);


if (catalogo[2]?.generos?.[1]) {
  console.log("Segundo gênero do terceiro item:", catalogo[2].generos[1]);
} else {
  console.log("O terceiro item possui apenas um gênero.");
}


console.log("\nLista de títulos:");
catalogo.forEach(item => {
  console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});

const titulosEmCaixaAlta = catalogo.map(item => item.titulo.toUpperCase());
console.log("\nTítulos em caixa alta:", titulosEmCaixaAlta);


const naoAssistidos = catalogo.filter(item => !item.assistido);
console.log("Quantidade não assistidos:", naoAssistidos.length);

const destaque = catalogo.find(item => item.nota >= 9);

if (destaque) {
  console.log(`Item com nota >= 9: ${destaque.titulo} (${destaque.nota})`);
} else {
  console.log("Nenhum item com nota >= 9 encontrado.");
}


const mediaGeral = catalogo.reduce((acc, item) => acc + item.nota, 0) / catalogo.length;

const assistidos = catalogo.filter(item => item.assistido);

const mediaAssistidos = assistidos.length > 0
  ? assistidos.reduce((acc, item) => acc + item.nota, 0) / assistidos.length
  : 0;

console.log("Média geral:", mediaGeral.toFixed(2));
console.log("Média dos assistidos:", mediaAssistidos.toFixed(2));



const existeAntigo = catalogo.some(item => item.ano < 2000);
const todosTemGenero = catalogo.every(item => item.generos.length > 0);

console.log("Existe item antes de 2000?", existeAntigo);
console.log("Todos têm pelo menos 1 gênero?", todosTemGenero);


const total = catalogo.length;

const filmes = catalogo.filter(item => item.tipo === "filme").length;
const series = catalogo.filter(item => item.tipo === "serie").length;

const ranking = [...catalogo]
  .sort((a, b) => b.nota - a.nota)
  .slice(0, 3);

const output = document.getElementById("output");


if (output) {
  output.innerHTML = `
    <h3>Resumo do Catálogo</h3>
    <p>Total de itens: ${total}</p>
    <p>Filmes: ${filmes} | Séries: ${series}</p>
    <p>Não assistidos: ${naoAssistidos.length}</p>
    <p>Média geral: ${mediaGeral.toFixed(2)}</p>

    <h4>Top 3 melhores:</h4>
    <ul>
      ${ranking.map(item => `<li>${item.titulo} (${item.nota})</li>`).join("")}
    </ul>
  `;
} else {
  console.warn("Elemento #output não encontrado no HTML.");
}
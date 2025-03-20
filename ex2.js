/*
Nos últimos cinco anos, o ecossistema JavaScript evoluiu significativamente em termos de modularização. 
O CommonJS e os Módulos JavaScript (ES Modules) são duas abordagens principais para organizar e compartilhar 
código em projetos JavaScript. 

1. CommonJS: Uma Abordagem Tradicional
CommonJS é um sistema de módulos criado para permitir a modularização em ambientes fora do navegador, como o Node.js.
// Importando um módulo
const modulo = require('./modulo');

// Exportando um módulo
module.exports = { funcao };

Uso nos Últimos 5 Anos
Popularidade no Node.js: Durante muitos anos, o CommonJS foi o padrão de fato para modularização no Node.js.
Até hoje, ele ainda é amplamente utilizado em projetos legados e bibliotecas.

Declínio Gradual: Nos últimos cinco anos, houve uma transição gradual para os ES Modules (ESM) no Node.js, 
especialmente após o suporte nativo ao ESM ser introduzido na versão 12 do Node.js (2019). No entanto, 
muitos projetos antigos ainda dependem do CommonJS.

Compatibilidade: O CommonJS continua sendo amplamente compatível com ferramentas modernas, como Webpack e Babel, 
permitindo que desenvolvedores mantenham projetos legados sem grandes mudanças.

Vantagens do CommonJS Simplicidade e familiaridade para desenvolvedores que trabalham com Node.js há anos.
Compatibilidade com ferramentas antigas e novas. Suporte robusto para sistemas de arquivos síncronos.

Desvantagens do CommonJS
Não é nativamente suportado pelo navegador, o que limita sua utilização em aplicações front-end modernas.
Menos flexível em comparação aos ES Modules, especialmente para carregamento dinâmico e modularização baseada em 
importações assíncronas.

*/
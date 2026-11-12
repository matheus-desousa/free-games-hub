# 🎮 Free Games Hub — Catálogo e Dashboard de Jogos

> Aplicação web front-end desenvolvida em React para exploração de jogos gratuitos via API pública, com paginação progressiva e visualização de métricas com Chart.js.

🔗 **Demonstração Online:** [Acessar Free Games Hub na Vercel](COLE_SEU_LINK_AQUI) *(Deploy em andamento)*

---

## 🎯 Proposta do Projeto
O **Free Games Hub** foi desenvolvido para consolidar o consumo assíncrono de APIs externas em React, a renderização dinâmica de listas a partir de coleções de objetos e a integração de bibliotecas de visualização de dados na interface.

---

## 🛠️ Tecnologias Utilizadas
* **React.js** (Componentização funcional e gerenciamento de estado)
* **Chart.js** (Renderização de gráficos na interface)
* **JavaScript (ES6+)** (Requisições assíncronas com `fetch` e manipulação de arrays)
* **CSS3** (Estilização e layout responsivo)

---

## 🚀 Principais Recursos
* **Consumo da API Free-To-Play Games:** Listagem dinâmica de títulos gratuitos exibindo os atributos retornados pela API.
* **Paginação Progressiva ("Carregar Mais"):** Exibição sob demanda dos itens do catálogo para manter a navegação fluida.
* **Dashboard Visual:** Integração com Chart.js para exibição de indicadores visuais do catálogo.

---

## 🗺️ Próximos Passos (Roadmap)
* Implementar filtro de busca textual por título do jogo.
* Adicionar sistema de favoritos com persistência local (`localStorage`).
* Conectar os dados dos gráficos ao cálculo dinâmico em tempo real da resposta da API.

---

## 📦 Como Executar o Projeto Localmente

### Pré-requisitos
Antes de começar, certifique-se de ter instalado em sua máquina:
* [Node.js](https://nodejs.org/) (versão 16 ou superior)
* [Git](https://git-scm.com/)

### Passo a Passo
1. Clone o repositório:
   git clone https://github.com/matheus-desousa/free-games-hub.git

2. Acesse o diretório do projeto:
   cd NOME-DO-REPOSITORIO

3. Instale as dependências:
   npm install

4. Inicie o servidor de desenvolvimento:
   npm run dev

> Caso o projeto tenha sido criado sem Vite (via Create React App), utilize `npm start` no passo 4.

---

### ⚙️ Build para Produção (Opcional)
Para gerar a versão otimizada de produção:
npm run build

---

Desenvolvido por **Matheus de Sousa** | [LinkedIn](https://www.linkedin.com/in/matheus-de-sousa-227376214/)
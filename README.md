## 🌎 FSW - DONALDS 🌎

Projeto realizado na semana FSW com Felipe Rocha do FullStackClub, este projeto foi criado com next onde criamos um clone de totens de realização de pedidos do MC Donalds, (dada a presença de rotas como `/menu` e `/orders`).   integração com banco de dados (Prisma) realizamos apenas design móvel da aplicação.

## 🚀 Tecnologias Utilizadas

- Next.js
- TypeScript
- Tailwind CSS
- Prisma
- ESLint
- Prettier
- Shadcn ui
- zod
- react hook form

## Proxima features

- Rotas de login
- Pagamentos online
- Cadastro de produtos
 


## 📂 Arquitetura do Projeto

### 📁 src/

O código-fonte principal da aplicação.

- `app/` 🖥️:  Implementa o roteamento aninhado e layouts do Next.js 13.
    - `[slug]/`: Rota dinâmica, possivelmente para diferentes restaurantes ou seções do app.
        - `menu/`:  Página de menu.
            - `[productId]/`: Página de detalhes de um produto.
        - `orders/`: Página de pedidos.
- `components/` 🧱: Componentes reutilizáveis da UI.
    - `ui/`: Componentes básicos de interface (botões, cards, formulários, etc.).
- `helpers/` 💡: Funções auxiliares.
    - `format-currency.ts`: Formatação de moeda.
- `lib/` 📚: Biblioteca de funções e utilitários.
    - `prisma.ts`:  Cliente Prisma para interação com o banco de dados.
- `page.tsx` 📄: Componente da página principal.
- `layout.tsx` 📄: Componente de layout geral da aplicação.
- `globals.css` 🎨: Estilos globais.
- `favicon.ico` 🖼️: Ícone do site.

### 📁 public/

Arquivos estáticos, como imagens e ícones.

### 📁 prisma/

Configuração e migrações do Prisma.

- `schema.prisma`: Esquema do banco de dados.
- `migrations/`: Migrações do banco de dados.
- `seed.ts`: Script para popular o banco de dados com dados iniciais.


### 📁 .github/workflows

Fluxos de trabalho do GitHub Actions.

- `build.yml`:  Configuração do fluxo de trabalho de build.
- `release.yml`: Configuração do fluxo de trabalho de release.

### 📄 Arquivos da raiz

- `.env`: Variáveis de ambiente.
- `.eslintrc.js`: Configurações do ESLint.
- `.gitignore`: Arquivos e pastas a serem ignorados pelo Git.
- `.next`: Pasta gerada pelo Next.js contendo builds e otimizações.
- `.prettierrc.json`: Configurações do Prettier.
- `.vscode`: Configurações do VS Code.
- `.vscodeignore`: Arquivos e pastas a serem ignorados pelo VS Code.
- `next-env.d.ts`: Declarações de tipo para o Next.js.
- `next.config.ts`: Arquivo de configuração do Next.js.
- `package-lock.json`, `package.json` 📦: Gerenciamento de dependências.
- `postcss.config.mjs`: Configurações do PostCSS.
- `README.md` 📄: Arquivo de descrição do projeto.
- `tailwind.config.ts`: Configurações do Tailwind CSS.
- `tsconfig.json` ⚙️: Configurações do TypeScript.





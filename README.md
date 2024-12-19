# An simple Todo App with Feature Sliced Design architecture

App is using 6 layers:

- app
- pages
- widgets
- features
- entities
- shared

Segments convention for each layer and slices:

- For `app` layer:
  - generated: containing generated file from `@tanstack/router`, this is where the package can refer type from
  - routers: a file-based routing folder that import from layer `pages`
  - styles: global styles & theme
- For `pages`, `widgets`, `features`, `entities` layers:
  - ui: only contain react components (JSX files)
  - model: contain business related code such as constants, type defs, contexts,...
  - api: Backend requests or wrapped hooks with the request
  - lib: library related code (not used)
  - services: business functions that are used in components and hooks
- For `shared` layer:
  - assets: contain images, icons, svgs,...
  - configs: app configuration
  - lib: wrapped library code for convenience usage
  - ui: non-business-related reuseable components or everything related to ui

# Tech stack

- React + Typescript
- Vite
- Shadcn
- Tanstack Router
- Tailwind CSS
- Pnpm

# Linter:

- ESlint
- Prettier
- Steiger (a linter for FSD architecture): view `./steiger.config.js` for customized configuration

# Development:

- Run `pnpm dev` to start local development mode
- Port `5173`
- `Steiger` is also watching code changes to capture FSD's rule violation code

# Dependency Graph

- Run `pnpm draw-dependency-graph` to get output from `dependency-cruiser` npm package. This result is automatically copied to machine's clipboard for generating SVG (consider using online Graphviz tool: https://dreampuf.github.io/GraphvizOnline/?engine=dot#digraph%20G%20%7B%0A%0A%0A%7D)

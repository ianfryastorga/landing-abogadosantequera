# Landing Page de Antequera Abogados

Esta es una landing page para el bufete de abogados Antequera Abogados, desarrollada con Next.js y React.

## Requisitos previos

- Node.js (versión 16.x o superior)
- npm o yarn

## Instalación

1. Clona este repositorio:
   ```
   git clone <url-del-repositorio>
   ```

2. Navega al directorio del proyecto:
   ```
   cd landing-abogadosantequera
   ```

3. Instala las dependencias:
   ```
   npm install
   # o
   yarn install
   ```

## Desarrollo

Para iniciar el servidor de desarrollo:

```
npm run dev
# o
yarn dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Construcción para producción

Para construir la aplicación para producción:

```
npm run build
# o
yarn build
```

## Iniciar en modo producción

Para iniciar la aplicación en modo producción después de construirla:

```
npm run start
# o
yarn start
```

## Estructura del proyecto

- `app/`: Código fuente principal
  - `antequera-abogados/`: Página principal del bufete
    - `components/`: Componentes React utilizados en la página
    - `config.ts`: Configuración del sitio
    - `page.tsx`: Página principal
  - `styles/`: Estilos globales y específicos
- `sections/`: Secciones compartidas
- `public/`: Archivos estáticos 
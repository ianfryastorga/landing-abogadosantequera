# Landing Page de Antequera Abogados

Esta es una landing page para el bufete de abogados Antequera Abogados, desarrollada con Next.js y React. Funciona como una página independiente sin necesidad de realizar peticiones a APIs o servicios externos.

## Características

- **Completamente independiente**: No realiza llamadas a APIs externas
- **Formulario de contacto**: Simula el envío de datos sin realizar peticiones HTTP reales
- **Imágenes locales**: Todas las imágenes se sirven desde la carpeta `public`
- **Diseño responsive**: Se adapta a todos los tamaños de pantalla

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

## Antes de ejecutar

Para completar la configuración de la landing page, necesitas añadir algunas imágenes locales:

1. Agrega imágenes para los fondos:
   - `/public/images/hero-background.jpg` - Imagen para el fondo del hero
   - `/public/images/contact-background.jpg` - Imagen para el fondo de la sección de contacto
   - `/public/images/testimonials-background.jpg` - Imagen para el fondo de la sección de testimonios

2. Agrega imágenes para el equipo:
   - `/public/images/team/member-1.jpg`
   - `/public/images/team/member-2.jpg`
   - `/public/images/team/member-3.jpg`

3. Agrega imágenes para testimonios:
   - `/public/images/testimonials/person-1.jpg`
   - `/public/images/testimonials/person-2.jpg`
   - `/public/images/testimonials/person-3.jpg`

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

## Personalización

Para personalizar la landing page, puedes modificar la configuración en:

- `config/config.ts` - Datos generales de la página y del bufete de abogados

## Estructura del proyecto

- `app/`: Código fuente principal
  - `antequera-abogados/`: Página principal del bufete
  - `components/`: Componentes contextuales
  - `global/`: Componentes globales
  - `styles/`: Estilos globales y específicos
- `components/`: Componentes reutilizables
- `config/`: Configuraciones
- `public/images/`: Imágenes estáticas
  - `team/`: Fotos del equipo
  - `testimonials/`: Fotos de testimonios
- `sections/`: Secciones compartidas 
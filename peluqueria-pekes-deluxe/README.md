# Peluquería Pekes Deluxe

Sitio web para la peluquería canina Pekes Deluxe.

## Stack Tecnológico

- **Next.js 15** - Framework React con App Router y Turbopack
- **Tailwind CSS 4** - Framework de CSS utility-first
- **GSAP** - Librería de animaciones profesionales
- **TypeScript** - Tipado estático

## Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Ejecutar build
npm run start

# Linting
npm run lint
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## Estructura del Proyecto

```
src/
├── app/              # App Router de Next.js
│   ├── layout.tsx    # Layout principal
│   ├── page.tsx      # Página de inicio
│   └── globals.css   # Estilos globales
└── lib/
    └── gsap.ts       # Configuración de GSAP
```

## Configuración

El proyecto viene preconfigurado con:
- Tailwind CSS con configuración optimizada
- GSAP listo para animaciones
- TypeScript con configuración estricta
- ESLint para calidad de código

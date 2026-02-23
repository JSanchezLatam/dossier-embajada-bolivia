# Dossier Embajada Bolivia — Latam Digital

Presentación interactiva para la **Asamblea Legislativa Plurinacional de Bolivia**, propuesta de Transformación Digital en Salud por Latam Digital.

## Stack

- **Next.js** 16.1.6 (App Router)
- **React** 19
- **TypeScript** 5
- **Tailwind CSS** 3 (via `@import "tailwindcss"`)
- **Lucide React** 0.575.0
- **Deployment**: Vercel

## Estructura del proyecto

```
/
├── app/
│   ├── layout.tsx          # Root layout (metadata, lang="es")
│   ├── page.tsx            # Entry point → <DossierBolivia />
│   └── globals.css         # Tailwind + resets globales
├── components/
│   ├── DossierBolivia.tsx  # Componente principal con 'use client' y useState
│   ├── Nav.tsx             # Navegación sticky con botones de sección
│   ├── Logo.tsx            # SVG Logo LATAMDIGITAL (escalable: sm/md/lg)
│   ├── Footer.tsx          # Pie de página
│   ├── SectionHeader.tsx   # Encabezado reutilizable de sección
│   ├── Card.tsx            # Tarjeta reutilizable con borde de acento
│   └── sections/
│       ├── Portada.tsx
│       ├── Nosotros.tsx
│       ├── Reconocimientos.tsx
│       ├── Contexto.tsx
│       ├── Propuesta.tsx
│       ├── Innovacion.tsx
│       ├── Microbiome.tsx
│       ├── Beneficios.tsx
│       ├── Colaboracion.tsx
│       └── Contacto.tsx
└── constants/
    └── data.ts             # Todos los datos y tipos del dossier
```

## Colores de marca

| Token    | Hex       | Uso                              |
|----------|-----------|----------------------------------|
| PURPLE   | `#4B4A8A` | Primario, fondos oscuros         |
| ORANGE   | `#E8621A` | Acento, CTA, bordes destacados   |
| DARK     | `#1E1B3A` | Fondo principal oscuro           |

## Datos

Todos los datos están centralizados en `constants/data.ts`. Para actualizar textos, estadísticas o nuevas secciones, editar únicamente ese archivo.

## Comandos

```bash
npm run dev      # Desarrollo local en http://localhost:3000
npm run build    # Build de producción
npm run start    # Servidor de producción local
npm run lint     # ESLint
```

## Deployment

El proyecto está configurado para **Vercel**. Push a `main` → deploy automático.

Para deploy manual: `vercel --prod`

## Agregar nuevas secciones

1. Añadir la clave en `SECTIONS` en `constants/data.ts`
2. Añadir los datos correspondientes en `constants/data.ts`
3. Crear el componente en `components/sections/NuevaSeccion.tsx`
4. Importar y registrar en `SECTION_COMPONENTS` en `DossierBolivia.tsx`

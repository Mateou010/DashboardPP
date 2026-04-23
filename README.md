# Dashboard de Reforma Electoral Integral

Dashboard web estático para visualizar los cambios del proyecto `INLEG-2026-40722643-APN-PTE` y su impacto operativo.

## Estructura

- `index.html`: layout y secciones del dashboard.
- `styles.css`: diseño visual responsive.
- `main.js`: render dinámico, filtros y buscador.
- `data/lawData.js`: fuente única de datos del tablero.
- `INLEG-2026-40722643-APN-PTE.pdf`: proyecto de ley.
- `datos a incluir en el dashboard.docx`: documento de apoyo con síntesis y datos.

## Desarrollo local

Proyecto sin dependencias.

1. Abrir `index.html` en navegador, o
2. Correr un server estático (ejemplo):

```bash
npx serve .
```

## Flujo colaborativo sugerido

1. Actualizar datos en `data/lawData.js`.
2. Revisar en navegador.
3. Commit con mensaje claro (`feat:`, `fix:`, `docs:`).
4. Push a GitHub.
5. Vercel genera preview por rama/commit.

## Deploy en Vercel

Este proyecto se puede desplegar directamente como sitio estático desde el root del repositorio.

- Comando manual: `vercel deploy . -y`
- Producción (solo cuando corresponda): `vercel deploy . --prod -y`

## Estado actual de deploy

- Preview activa: `https://dashboard-reforma-electoral-integral-889dvxc5y.vercel.app`
- Dominio productivo actual: `https://dashboard-reforma-electoral-integra.vercel.app`

## GitHub + Vercel para trabajo en equipo

Se agregó el workflow `.github/workflows/vercel-deploy.yml` para:

- Deploy de preview en cada Pull Request.
- Deploy productivo al hacer push en `main`.

### Configuración mínima en GitHub (una sola vez)

1. Crear el repositorio en GitHub.
2. Subir este proyecto.
3. En `Settings > Secrets and variables > Actions`, crear el secret:
   - `VERCEL_TOKEN`: token de Vercel con permisos de deploy en el proyecto.

Con eso, los deploys quedan automáticos para el equipo.

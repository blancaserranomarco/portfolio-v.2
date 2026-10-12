# Portfolio v3 · Blanca Serrano

Portfolio bilingüe (EN/ES) de Blanca, senior product designer. Estilo neobrutalista, sin frameworks: HTML + CSS + JS.

## Dónde vive cada cosa

| Qué | Dónde |
|---|---|
| Copia de trabajo | Escritorio → `portfolio-v3` (incluye `brief/` y `propuestas/`, que no se suben a GitHub) |
| Código publicado | GitHub `blancaserranomarco/portfolio-v.2`, rama `main` |
| Web pública | Vercel, proyecto `blanca-portfolio` → https://blanca-portfolio-blond.vercel.app |
| Versión en Claude | Artifact https://claude.ai/artifact/TavqvXqGqCCcaePKcEo2xX |
| Feedback recibido | Notion → página "Porfolio, feedback" → base de datos "Feedback del portfolio" |

## Estructura

```
src/            código fuente (lo único que se edita)
  content.js    textos de casos, empresas, tags y focos (cada texto: 'igual' o ['English','Español'])
  app.js        interfaz, textos UI, mini test, carpetas de trabajo, feedback
  styles.css    estilos
  head.html, shell.html
api/feedback.js función de Vercel: guarda el feedback en Notion (y email si se configura)
assets/         imágenes de los casos
build.py        genera index.html (web) y dist/portfolio.html (artifact)
brief/          (solo local) histórico del descubrimiento inicial
propuestas/     (solo local) bocetos de diseño ya decididos
```

## Cómo hacer un cambio

1. Editar en `src/`.
2. `python3 build.py`.
3. Publicar en los dos sitios para que no se desincronicen:
   - **Artifact:** republicar `dist/portfolio.html` en la URL del artifact.
   - **Web:** subir a GitHub (`main`). Si Vercel no despliega solo, redesplegar a mano desde Vercel.
4. Guardar la copia en el Escritorio.

## Funcionalidades

- **Mini test de entrada:** idioma, nombre (opcional) e interés (growth / sistemas / todo). Se puede saltar. Se guarda en el navegador (`bs_intro`) y se rehace desde el footer.
- **Hero personalizado:** "Hola {nombre}," con brillos; sin nombre, "Hola, soy Blanca."
- **Mi trabajo** en dos pestañas tipo carpeta:
  - *Por proyectos:* filtros (All primero y por defecto) y cards con ilustración; el "por qué" se abre sobre la ilustración (en móvil, cita visible).
  - *Por empresas:* línea temporal por empresa con proyectos asociados; el "por qué" aparece al pasar el ratón.
- **Contacto:** email (con botón copiar) y LinkedIn.
- **Feedback:** pulgar arriba/abajo + comentario + nombre (por defecto "Anónimo").

## Feedback → Notion

Web: el widget envía `POST /api/feedback` → crea una fila en Notion (Usuario, Fecha, Valoración Positivo/Negativo, Comentario; idioma e interés en el cuerpo). Tiene un honeypot anti-spam (campo `website`).
Artifact: no puede llamar a la API; guarda las respuestas en su propia base de datos.

Variables de entorno en Vercel (tras cambiarlas, redesplegar):
- `NOTION_TOKEN`: secreto de la integración. Lo gestiona Blanca, nunca va en el código ni en el chat.
- `NOTION_DATABASE_ID` = `d2d2c8acb0ee4e28bf873f3ed5510939`
- `FEEDBACK_TO`: email de aviso.
- Opcionales para email: `RESEND_API_KEY`, `FEEDBACK_FROM` (sin configurar).

## Pendiente

- Métricas / eventos.
- "Modo 1 minuto" (aplazado).
- Avisos por email del feedback (Resend o automatización de Notion).
- Dominio propio, favicon, Open Graph.

## Registro de cambios importantes

Una línea por cambio que altere estructura, funcionalidad o despliegue. Lo más reciente arriba.

- 2026-10-12 · Feedback a Notion funcionando en producción; web publicada en Vercel desde GitHub.
- 2026-10-12 · Mini test de entrada, hero con nombre, carpetas Por proyectos / Por empresas, contacto nuevo.
- 2026-10-06 · Inicio de la v3 (migración desde Notion).

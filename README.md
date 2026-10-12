# Portfolio v3 · Blanca Serrano

Portfolio bilingüe (EN/ES) de Blanca, senior product designer. Estilo neobrutalista, sin frameworks: HTML + CSS + JS.

## Dónde vive cada cosa

| Qué | Dónde |
|---|---|
| Copia de trabajo | Escritorio → `portfolio-v3` (incluye `brief/` y `propuestas/`, que no se suben a GitHub) |
| Código publicado | GitHub `blancaserranomarco/portfolio-v.2`, rama `main` |
| Web pública | Vercel, proyecto `blanca-portfolio` → https://blancaserrano-portfolio.vercel.app. Cada push a `main` se publica solo |
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
   - **Web:** subir a GitHub (`main`). Vercel lo publica solo en ~1 min.
4. Guardar la copia en el Escritorio.

## Funcionalidades

- **Cabecera:** Inicio · Trabajo · Sobre mí · Contacto; en móvil (≤640px) pasa a menú hamburguesa. El idioma se cambia en el pie (selector junto a "Cambiar mi bienvenida").
- **Mini test de entrada:** idioma, nombre (opcional) e interés (growth / sistemas / todo). Se puede saltar. Se guarda en el navegador (`bs_intro`) y se rehace desde el footer.
- **Hero personalizado:** "Hola {nombre}," con brillos; sin nombre, "Hola, soy Blanca."
- **Mi trabajo** en dos pestañas tipo carpeta:
  - *Por proyectos:* filtros (All primero y por defecto) y cards con ilustración; el "por qué" se abre sobre la ilustración (en móvil, cita visible).
  - *Por empresas:* línea temporal por empresa con proyectos asociados; el "por qué" aparece al pasar el ratón.
  - *Caso abierto:* panel lateral con todo el contenido seguido (sin lectura rápida/completa) e índice de rayitas a la izquierda que marca la sección actual; al pasar el ratón muestra título y extracto.
- **Contacto ("Hablemos"):** botones Copiar email y LinkedIn + email visible; a la derecha tu retrato en pegatina (SVG en `contactHTML`): los ojos siguen el ratón y parpadea; al pincharlo se asusta (ojos cerrados, boca en "o"); al copiar el email sonríe. Oculto en ≤760px. Ilustración original en `assets/yo.png`.
- **Detrás de este portfolio:** botón en el hero ("¿Por qué este portfolio es así?" / "Descubre las decisiones detrás de este diseño.", con mini baraja) que abre una baraja deslizable de 8 cartas con el porqué de cada decisión de UX (texto, "Por qué" y a veces "El dato" con fuente). Cada carta ocupa hasta abajo de la pantalla y lleva dentro la navegación (← · puntos · Continuar; en la última, Cerrar), con la pista "Arrastra la carta o usa ← →" debajo. Ilustraciones animadas junto al título; en ordenador la carta se inclina hacia el ratón para sugerir que se puede arrastrar; se pasa arrastrando, con los botones o con las flechas del teclado. Textos en `DK`/`DECK` de `src/app.js`; cualquier elemento con `data-deck` la abre.
- **Feedback** ("¿Te ha gustado?"): sin caja, separado por una línea; pulgar arriba/abajo + comentario y nombre opcionales (por defecto "Anónimo"); se puede enviar solo la valoración.

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

- 2026-10-12 · Casos: se quita "Lectura rápida / Historia completa" y el botón "Siguiente caso" de abajo; índice lateral de secciones.
- 2026-10-12 · Baraja: 8 cartas (se quita "Ahora, descubre mi trabajo"), navegación dentro de la carta y carta a altura completa.
- 2026-10-12 · El hero sustituye "Ver mi trabajo" y "Hablemos" por el botón-baraja; se quita el bloque lila de abajo.
- 2026-10-12 · "Hablemos" rediseñado con retrato-pegatina interactivo. Orden final: Detrás del portfolio → Hablemos → Feedback.
- 2026-10-12 · Bloque "Detrás del portfolio" movido encima de Contacto; feedback simplificado.
- 2026-10-12 · Idioma movido al pie como desplegable; "Inicio" en la cabecera; menú hamburguesa en móvil.
- 2026-10-12 · Baraja "Detrás de este portfolio" (9 cartas, EN/ES) con entrada antes del feedback.
- 2026-10-12 · Dirección nueva blancaserrano-portfolio.vercel.app; despliegue automático comprobado.
- 2026-10-12 · Feedback a Notion funcionando en producción; web publicada en Vercel desde GitHub.
- 2026-10-12 · Mini test de entrada, hero con nombre, carpetas Por proyectos / Por empresas, contacto nuevo.
- 2026-10-06 · Inicio de la v3 (migración desde Notion).

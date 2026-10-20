# Portfolio v3 · Blanca Serrano

Portfolio bilingüe (EN/ES) de Blanca, senior product designer. Estilo neobrutalista, sin frameworks: HTML + CSS + JS.

## Dónde vive cada cosa

| Qué | Dónde |
|---|---|
| Copia de trabajo | Escritorio → `portfolio-v3` (incluye `contexto/`, `casos/` y `recursos/`, que no se suben a GitHub) |
| Código publicado | GitHub `blancaserranomarco/portfolio-v.2`, rama `main` |
| Web pública | Vercel, proyecto `blanca-portfolio` → https://blancaserrano-portfolio.vercel.app. Cada push a `main` se publica solo |
| Versión en Claude | Artifact https://claude.ai/artifact/TavqvXqGqCCcaePKcEo2xX |
| Feedback recibido | Notion → página "Porfolio, feedback" → base de datos "Feedback del portfolio" |

## Estructura

Orden de lectura para una IA o una persona nueva: `CLAUDE.md` → `README.md` → `casos/_PLANTILLA.md` y la plantilla del tipo de caso → resto de `casos/`.

```
CLAUDE.md          instrucciones de trabajo (lo primero que se lee)
README.md          contexto: dónde vive cada cosa, cómo publicar, pendiente
casos/_PLANTILLA.md  partes comunes de los casos (cabecera, Pregúntame, coherencia, montaje)
casos/_PLANTILLA-EXPERIMENTOS.md  historia de casos de experimentación (TaxDown, Descuentos)
casos/_PLANTILLA-SISTEMA.md  historia de casos de sistema o end-to-end (Seguro de Salud I y II)

src/               código fuente (lo único que se edita)
  content.js       textos publicados de casos, empresas, tags y focos (cada texto: 'igual' o ['English','Español'])
  app.js           interfaz, textos UI, mini test, carpetas de trabajo, feedback
  styles.css       estilos
  head.html, shell.html
api/feedback.js    función de Vercel: guarda el feedback en Notion (y email si se configura)
api/event.js       función de Vercel: cuenta qué pregunta de «Pregúntame» se abre en cada caso (base «Preguntas más abiertas» en Notion)
assets/            imágenes y vídeos que muestra la web (parte del código; no mover a recursos/)
build.py           genera index.html (web) y dist/portfolio.html (artifact)

Solo en el Escritorio (no se suben a GitHub):
contexto/          descubrimiento inicial: auditoría, inventario de proyectos, concepto, preguntas
casos/*.md         material de partida de cada caso (notas, datos); el texto publicado está en src/content.js
recursos/          bocetos ya decididos (bocetos/) y export original de Notion (notion-export/)
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
  - *Caso abierto:* panel lateral con todo el contenido seguido (sin lectura rápida/completa) e índice de rayitas a la izquierda que marca la sección actual; al pasar el ratón muestra título y extracto. Imágenes ampliables al pinchar (o Enter) y vídeos en lugar de GIFs.
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

- Aplicar las plantillas al resto de casos. Seguro de Salud I, en borrador (rama `borrador/salud`) a la espera de la revisión de Blanca; faltan «¿Qué descarté?» y confirmar rol, fechas y nombres de aseguradoras en los vídeos.
- Dar acceso a la integración de Notion a la base «Preguntas más abiertas» (dentro de «Porfolio, feedback») para que `/api/event` pueda escribir.
- Al terminar todos los casos: revisar (sin nombres confidenciales) y subir a GitHub `contexto/`, `casos/` y `recursos/bocetos/`. El export de Notion no se sube (repo público).
- "Modo 1 minuto" (aplazado).
- Avisos por email del feedback (Resend o automatización de Notion).
- Dominio propio, favicon, Open Graph.

## Registro de cambios importantes

Una línea por cambio que altere estructura, funcionalidad o despliegue. Lo más reciente arriba.

- 2026-10-20 · Caso Seguro de Salud II · Renovaciones con la nueva estructura: franja de temporada, explorador de combinaciones con las fichas reales y tabla, prototipo y flujos con selector, notificación animada, feedback de Operaciones como comentario. Datos de enero de 2026 (702 respuestas). Plantillas separadas: común, experimentación y sistema.
- 2026-10-20 · Casos: panel a 2/3 de la pantalla en escritorio y una sola columna centrada de 840 px para texto y bloques; texto de las tarjetas de cabecera al tamaño de los datos.
- 2026-10-19 · El título de cada caso sale de su tarjeta de la portada (`SELCARD.h`); se quita `h1` de los casos.
- 2026-10-19 · Caso Descuentos con la nueva estructura: recorrido del funnel con fricciones y vista «Flujo real», tres capítulos de experimento, deslizador antes/después en el tercero, callout de restricciones y «Pregúntame». Datos de Amplitude (553 → 167).
- 2026-10-19 · Carpeta del Escritorio ordenada: solo `CLAUDE.md` y `README.md` en la raíz; plantilla y material en `casos/`, más `contexto/` y `recursos/`; fuera `brief/`, `propuestas/` y `_to_delete/`.
- 2026-10-19 · Caso TaxDown con la nueva estructura (cabecera con reto · aportación · impacto, capítulos por experimento, encuesta, tabla 2A/2B, quiz con las modales reales, «Pregúntame» con 7 preguntas y registro anónimo de las preguntas abiertas en Notion vía `/api/event`). Sin enlace a Notion. Plantilla de casos en `casos/_PLANTILLA.md`.
- 2026-10-18 · Caso TaxDown reescrito como dos experimentos encadenados (stepper → encuesta → modal; base 14,5%), con enlace al caso en Notion y nuevas imágenes simplificadas.
- 2026-10-12 · Casos: recursos visuales del Notion (pantallas HD, diagramas, vídeos) en Descuentos, Beneficios, Renovaciones, Salud y Banners; fuera las imágenes de relleno.
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

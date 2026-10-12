# Portfolio v3 — Blanca Serrano

Portfolio con elección inmediata: "What brings you here?" con 3 focos (growth, sistemas, construir desde cero) que reordenan el trabajo destacado. Sin elegir nada, se ven los 3 casos más fuertes.

## Abrir en local
Doble clic en `index.html` (funciona sin servidor).

## Editar
- **Textos de casos y perfil:** `src/content.js`. Cada texto es `'igual en ambos idiomas'` o `['English', 'Español']`.
  - `hl` = el highlight que sale en el callout de la shortlist.
  - `blocks` = la historia completa (h título, p párrafo, call destacado, list, table, steps, exp experimento, quote, img, ba antes/después, abc barras, learn aprendizajes).
  - `w` = pesos por interés; deciden el orden según las respuestas.
- **Focos y qué casos muestra cada uno:** `FOCUS` en `src/content.js`.
- **Textos de interfaz:** `UI` en `src/app.js`.
- **Estilos:** `src/styles.css`.

Después de editar, ejecuta `python3 build.py` para regenerar `index.html`.

## Pendiente
- Imágenes de Notion (exportar la página con imágenes y dejar el zip en el escritorio)
- Confirmar si se puede mostrar la marca BBVA (modales y landing de TaxDown)
- Dominio, favicon, Open Graph, analytics

## Feedback → Notion + email

The "Did you like it?" block at the end sends each answer to `POST /api/feedback`
(`api/feedback.js`, a Vercel function). It creates a row in the Notion database
**Feedback del portfolio** (Usuario, Fecha, Valoración, Comentario) and, if configured, emails you.

Setup once, when the site is on Vercel:
1. Notion → Settings → Connections → Develop or manage integrations → New integration (internal). Copy the secret.
2. Open the database "Feedback del portfolio" → ••• → Connections → add that integration.
3. Vercel → Project → Settings → Environment Variables:
   - `NOTION_TOKEN` = the integration secret
   - `NOTION_DATABASE_ID` = `d2d2c8acb0ee4e28bf873f3ed5510939`
   - Email (optional): create a free Resend account, then `RESEND_API_KEY`, `FEEDBACK_TO` = your email.
4. Redeploy.

Inside Claude (the published artifact) the site cannot call that endpoint, so answers made there are kept in the
artifact's own store and can be copied to Notion on request.

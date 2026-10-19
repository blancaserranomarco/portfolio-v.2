# Instrucciones para Claude

Orden de lectura: este archivo → `README.md` (dónde vive cada cosa, cómo publicar, qué está pendiente) → `PLANTILLA-CASO.md` (cómo se estructura un caso) → `casos/` (material de partida de cada caso, solo en el Escritorio).

## Cómo trabajar con Blanca
- Habla en español.
- Antes de aplicar un cambio de diseño, enseña un boceto o propuesta y espera su ok.
- Cambios pequeños pedidos de forma concreta: aplicar directamente.
- Mantener accesibilidad (contraste, foco visible, teclado, textos alternativos) y el responsive.
- Todo texto visible va en EN y ES.

## Reglas técnicas
- Editar solo `src/` y `api/`; `index.html` y `dist/` se generan con `python3 build.py`.
- Cada cambio se publica en los dos sitios: artifact y GitHub/Vercel. Y se guarda en el Escritorio (`portfolio-v3`).
- Material nuevo de un caso → `casos/`; bocetos → `recursos/bocetos/`. Nada suelto en la raíz.
- Nunca pedir, escribir ni guardar tokens o claves (`NOTION_TOKEN`, `RESEND_API_KEY`). Las variables las pone Blanca en Vercel.

## Mantener la documentación (obligatorio)
Tras un cambio importante (nueva sección o funcionalidad, cambio de estructura, despliegue, integración, o algo que se aplaza o se decide), actualiza en el mismo momento:
- `README.md` → la sección afectada (Dónde vive / Estructura / Funcionalidades / Feedback / Pendiente) y una línea en "Registro de cambios importantes".
- Este archivo → solo si cambia una regla de trabajo.

Ajustes de color, texto o espaciado no se registran.
Escribe lo justo: reemplaza lo que quedó obsoleto en vez de añadir, sin duplicar información entre archivos y sin pegar código.

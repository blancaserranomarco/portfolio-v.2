# Sistema visual de los casos

Reglas de diseño para todos los casos con historia (`story:1`). Se aplican **siempre**. Una pieza nueva usa un componente de esta lista. Si ninguno sirve, se crea uno nuevo, se añade aquí y se reutiliza.
Base revisada con TaxDown, Descuentos, Seguro de Salud I y Seguro de Salud II · Renovaciones (octubre de 2026).

## 1. Tipografía

| Uso | Fuente | Tamaño | Peso | Color |
|---|---|---|---|---|
| Título del caso | Fraunces | 51 px escritorio · 32 px móvil | 500 | tinta |
| Título de capítulo (h2) | Fraunces | 32 px | 500 | tinta |
| Antetítulo de capítulo («1 · El contexto») | Fraunces cursiva | pequeño | 400 | gris |
| Subtítulo (h3) | Fraunces | 24 px | 500 | tinta |
| Párrafo | DM Sans | 17 px | 400 | tinta |
| Etiqueta (`sc-k`) | DM Sans MAYÚSCULAS | 11,5 px | 700 | gris; tinta dentro de una pastilla de color |
| Título de callout | DM Sans | 13 px | 700 | tinta |
| Texto de callout | DM Sans | 16 px | 400 | tinta |
| Pie de figura | DM Sans | 13,8 px | 400 | gris |
| Ficha (fechas, muestra, cálculo) | DM Sans | 13 px | 400 | gris |

Dos familias y nada más: Fraunces para títulos y cifras, DM Sans para el resto. La negrita va solo en etiquetas iniciales («**Adopción:**») o en la primera frase de una regla, nunca en un párrafo entero.

## 2. Cifras

Hay cuatro niveles de cifra, siempre con la misma estructura: **etiqueta → cifra → texto de base → variación**.

| Nivel | Dónde | Cifra | Texto debajo | Variación |
|---|---|---|---|---|
| Cabecera | Tarjeta «Impacto» o «Evolución» | Fraunces 600, 29 px (24 px móvil) | DM Sans 18 px tinta | DM Sans 700 verde |
| Resultados | Cajas «La campaña en cifras», «Cómo evolucionó…» (`split` con `h`) | Fraunces 500, 30 px; verde si es el resultado, tinta si es neutro | DM Sans 14,7 px gris («Frente a…», «Desde…», base) | DM Sans 600, 14,7 px, verde (5.º campo del `split`) |
| Cajas descriptivas | Punto de partida por país (`split` sin `h`) | Fraunces 500, 30 px, tinta | DM Sans 14,7 px gris | — |
| Pregúntame | «¿Qué impacto tuvo…?» (`m`) | Fraunces 500, 22 px, tinta | DM Sans 14,4 px gris | — |
| Barras | `bars` | Fraunces 600, 16 px | Etiqueta DM Sans 16 px tinta | — |

Reglas:
- **Un solo verde por caja.** Si la caja lleva variación («+6,9 puntos porcentuales», «+188 %»), la cifra grande va en tinta y la variación en verde. Si no lleva variación, la cifra grande va en verde cuando es el resultado.
- **Verde = mejora o resultado positivo.** Solo va en verde una cifra que mejora frente a una base («+12,8 pp», «−50 % de incidencias») o que mide algo positivo («89 % de respuestas positivas»). Un nivel o un recuento sin comparación («26 % hizo clic», «414 beneficios», «3 países») y un resultado neutro («Sin cambios», «96 %») van en tinta. Hay un solo verde para texto (`--win`) y se ajusta solo en modo oscuro.
- En las cajas, la cifra final va grande y la base va en el texto de debajo. No se usa «antes → después» en grande, que se parte en dos líneas.
- Máximo 3 cajas por fila. Las etiquetas caben en una línea; si no caben, se acortan.
- Formato en español: coma decimal, punto de miles y **espacio antes de %** («29,2 %»). El código lo pone solo (`fmt` y `X`), así que en el contenido se puede escribir con o sin espacio.
- Abreviaturas: «pp» para puntos porcentuales en cifras grandes; en el texto de debajo, «puntos porcentuales». «K» solo si la cifra exacta aparece en otro sitio del caso.
- Toda cifra lleva su base y su periodo en la ficha o en el texto de debajo.

## 3. Componentes

| Componente | Bloque | Borde · radio | Sombra | Uso |
|---|---|---|---|---|
| Tarjetas de cabecera | `sum` | 2 px tinta · 16 | Dura 4 px | Reto, aportación e impacto. Solo color en la etiqueta |
| Objetivo principal | `goal main` | 2 px tinta · 16 | Dura 4 px | Uno por caso, amarillo. Excepción a la regla de sombras |
| Callout | `goal note` | 1 px suave + filete de 4 px lila · 16 | — | Lo que fallaba, la regla del sistema |
| Callout de lectura clave | `goal note good` | Filete verde, fondo verde muy claro · 16 | — | La conclusión de unas cifras |
| Pregunta del experimento | `goal q` | Filete amarillo | — | Solo en casos de experimentación |
| Tabla | `table` | 1 px suave · 16; cabecera en mayúsculas gris sobre fondo papel | — | Datos por año o tipo. Máximo 4 columnas para que quepa en móvil sin desplazar |
| Escena / figura | `scene`, `img`, `views`, `bars`, `flow` | 1 px suave · 16 | Muy suave (1 px) | Todo lo que se lee o se mira |
| Tarjeta interna | Cajas de cifras, pasos del flujo, cajas por país | 1 px suave · 12 | — | Dentro de una escena |
| Comentario | `quote` con `fb` | 1 px tinta | Dura 3 px | Feedback de un equipo. Excepción, porque imita un comentario |
| Elemento que se toca | Preguntas de «Pregúntame», selector, quiz, tarjeta «Continúa con…» | 2 px tinta (1 px en la tarjeta) · 12 o 999 | Dura | Todo lo que tiene clic |
| Pastilla | Tags, selector, etiquetas de color | 999 | — | Texto corto |

Reglas:
- **Sombra dura solo en lo que se toca** y en las dos excepciones de la tabla: tarjetas de cabecera y objetivo, y comentario.
- **Radios: 8** en elementos pequeños, **12** en tarjetas internas, **16** en contenedores y **999** en pastillas. No hay otros valores; la maqueta de móvil es la única excepción.
- **Bordes: 1 px** en lo que se lee y **2 px** en lo que se toca o se destaca. El punteado solo marca una rama o algo opcional (p. ej. la rama del familiar).

## 4. Color

- Fondo `--paper`, tarjetas `--surface`, texto `--ink`, secundario `--muted`.
- Pastel con significado: **rosa** = reto o problema; **amarillo** = objetivo, aportación y pregunta; **verde (menta)** = impacto, ganadora y lectura clave; **lila** = callout informativo; **azul** = dato neutro o segundo en una comparación; **melocotón** = serie destacada en gráficos (p. ej. tickets).
- En un gráfico, todas las barras de una misma serie van del mismo color. Un color distinto significa algo, y el pie de figura lo explica.
- El color de tarjeta del caso (`tone`) solo se usa en la portada.

## 5. Espaciado vertical de la historia

| Entre | Espacio |
|---|---|
| Texto y texto (párrafo, lista tras párrafo) | 14 px |
| Bloque (escena, figura, callout, cifras, comentario, pasos) y lo que lo rodea | 24 px |
| Subtítulo (h3) y lo anterior | 32 px; lo que va justo después, 14 px |
| Capítulo | 56 px |
| Ficha bajo un bloque | 12 px |

El espaciado lo pone `styles.css` («Espaciado vertical de la historia»). Un bloque nuevo se añade a esa lista y no lleva márgenes propios.

## 6. Responsive

- Los componentes con columnas pasan a una sola columna según su propio ancho (container queries), no según la pantalla: el panel ocupa 2/3 en escritorio y su ancho cambia.
- El flujo en pasos pasa a vertical bajo 720 px, con una línea continua entre pasos y la rama hacia un lado.
- Los selectores con más de 2 pestañas pasan a una rejilla de 2 columnas bajo 520 px; si quedan impares, la última ocupa toda la fila.
- En móvil las barras de una lista larga pueden ocultarse y dejar solo el texto y el % (`cls:'b-tk'`).

## 7. Antes de dar un caso por terminado

- [ ] Las cifras siguen la sección 2 y los colores la sección 4.
- [ ] No hay radios, bordes, sombras ni tamaños fuera de estas tablas.
- [ ] Los pies de figura y las fichas tienen el mismo tamaño en todo el caso.
- [ ] Lo he revisado a 1280 px, 900 px y 390 px, en español y en inglés.

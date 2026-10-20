# Plantilla de caso

Partes comunes a todos los casos del portfolio: cabecera, «Pregúntame», coherencia y montaje. La historia del medio depende del tipo de caso (ver apartado 2). Cada proyecto es distinto: usa lo que tenga material real y quita lo que no. **Si no hay dato o pantalla real, la pieza no se muestra; nunca se rellena.**

Leyenda: **Fija** = va en todos los casos · **Si existe** = solo si hay material · **Opcional** = suma, pero no es necesaria.

## 1. Cabecera (fija)

| Pieza | Qué lleva | Ejemplo TaxDown |
|---|---|---|
| Tags | Tipo de trabajo y modelo | A/B testing · B2B |
| Título | El mismo de su tarjeta en la portada (`SELCARD.h`); sale de ahí automáticamente | Mismo descuento, mejor momento: convertir a usuarios de partners |
| Entradilla | Una frase: qué tipo de trabajo y para qué | Una serie de iniciativas basadas en experimentos rápidos para… |
| Datos | 3 columnas bajo una sola línea: **Mi rol · Periodo · Alcance**. Primera línea en negrita, segunda en gris | Senior Product Designer / Growth B2B |
| 3 tarjetas | **El reto** (rosa) · **Mi aportación** (amarillo) · **Impacto** (verde). Blancas, borde negro, color solo en la etiqueta | Impacto: 14,5% → 21,5% · +7 pp |

- El reto une negocio y usuario en una frase.
- Mi aportación: qué hice yo, sin repetir la entradilla.
- El texto de las tarjetas va al mismo tamaño que la primera línea de los datos (p. ej. «Senior Product Designer»).
- Impacto: siempre **antes → después** y la variación al lado. Si no hay métrica final, el resultado más fuerte que sí sea real (p. ej. «−50 % de incidencias») con su base debajo y, si hace falta, una segunda cifra en verde.

## 2. Historia en capítulos (fija)

4–6 capítulos. Cada uno lleva antetítulo con su función (`1 · El contexto`, `2 · El enfoque`…) y un **título con mensaje** que se entienda solo. El índice lateral usa esos títulos y la entradilla.

Hay dos plantillas según el tipo de caso:
- **Experimentación** (`_PLANTILLA-EXPERIMENTOS.md`): el caso se cuenta como una serie de experimentos medidos. Ejemplos: TaxDown y Descuentos.
- **Sistema o end-to-end** (`_PLANTILLA-SISTEMA.md`): un problema complejo resuelto con un modelo o sistema, sin A/B. Ejemplo: Seguro de Salud II · Renovaciones.

## 3. Pregúntame (fija)

Siempre estas 7 preguntas, en primera persona y en este orden. Si una no tiene respuesta real, se queda como «Pendiente de completar» hasta tenerla.

| Pregunta | Formato |
|---|---|
| ¿Qué impacto tuvo en negocio? | Cifras en cajas + pie con el cálculo y si es estimado |
| ¿Cuál fue mi papel? | Bullets: qué propuse, qué diseñé, con quién |
| ¿Qué descarté? | Tabla Opción · Por qué, o un párrafo si es un solo descarte. Solo descartes; si se probó, se dice en el porqué |
| ¿Qué no salió como esperaba? | Hechos concretos, sin repetir los aprendizajes |
| ¿Qué aprendí? | 2–3 bullets: título en negrita + explicación |
| ¿Qué haría distinto hoy? | 1–2 bullets con el mismo formato |
| ¿En qué me inspiré? | Referentes por pieza (onboarding, modal…) y por qué funcionaban. En casos de sistema puede ser «¿En qué me basé para diseñar?»: el método o los patrones de partida |

## 4. Más allá del diseño (opcional)

2–3 tarjetas con lo que hice fuera del diseño y movió el negocio (Ventas, Marketing, shadowing, formaciones…): qué, con quién y qué cambió. Va antes de «Pregúntame».

## 5. Coherencia entre casos

**Vocabulario**
- «Experimento», no «test». Se numeran (experimento 1, experimento 2, 2A/2B) y el número es el mismo en todo el caso, también en la cabecera.
- Hipótesis, oportunidad y pregunta del experimento se llaman siempre así.
- Un término por concepto del producto, definido la primera vez (p. ej. apoderamiento, onboarding).

**Datos**
- Siempre con base: «de 14,5% a 21,5%», no solo «+7 pp».
- Recuento real solo si sabemos el total de ese grupo; si no, proporción («de cada 100»).
- Las estimaciones se marcan como tal y explican su cálculo.
- Mismo color por variante en journey, tablas y etiquetas (2A rosa, 2B gris).

**Visual**
- Cajas que solo se leen: borde fino. Borde negro y sombra dura: lo que se toca y las tarjetas de la cabecera.
- Colores con significado: rosa = reto, amarillo = objetivo, aportación y pregunta, verde = impacto y ganadora.
- Negrita solo como etiqueta inicial («La oportunidad:»), no en frases enteras.
- Mismo espacio entre bloques; tablas y gráficos separados del texto.

**Escritura**
- Primera persona y en activo; «nosotros» solo para lo hecho en equipo.
- Frases cortas; la profundidad la dan los datos y las pantallas.
- EN y ES. Sin nombres confidenciales (solo BBVA como ejemplo de partner).

## 6. Ficha de recogida

Apuntarla durante el proyecto.

- **Estado y fechas:** ¿se lanzó? ¿desde cuándo? Fechas coherentes con LinkedIn.
- **Negocio:** qué necesitaba la empresa, cuánto pesa esa parte, objetivo y métrica de éxito.
- **Contexto:** rol, equipo, periodo, superficies, restricciones (tiempo, temporada, compliance, design system).
- **Por cada experimento:** hipótesis, oportunidad, pregunta, alternativas descartadas, decisiones y riesgos, validación previa, ficha (fechas, tipo, reparto, muestra, significancia) y resultado.
- **Investigación:** método, muestra por grupo, hallazgo y su porqué.
- **Resultado:** antes → después, traducción a euros (base × variación × valor medio) y qué pasó después.
- **Reflexión:** qué salió mal, aprendizajes, qué haría distinto, referentes.
- **Material:** pantallas finales del flujo completo, estados y casos límite, exploraciones descartadas, gráficos de resultados.

## 7. Checklist antes de publicar

- [ ] Cabecera completa: título, entradilla, 3 datos y 3 tarjetas.
- [ ] Se cumple el checklist de su plantilla (experimentación o sistema).
- [ ] El número de experimentos coincide en todo el caso.
- [ ] Al menos una decisión «planteamos X, elegí Y porque Z».
- [ ] Datos con base; estimaciones marcadas.
- [ ] 1–3 animaciones; móvil revisado.
- [ ] Las 7 preguntas de «Pregúntame» respondidas o marcadas como pendientes.
- [ ] Vocabulario y colores coherentes; EN y ES; textos alternativos; sin nombres confidenciales.

## Cómo se monta en `src/content.js`

Un caso con `story:1` usa la cabecera (título de `SELCARD`, `lede`, `facts`, `sum`), los bloques de `blocks` y `ask`. Bloques disponibles: `chap`, `p`, `h`, `goal` (con `main` o `q` para la pregunta), `journey`, `img`, `split` (resultado con `h`, `intro`, `meta`), `dots`, `lead`, `cmp`, `quiz`, `next`, `impact` (con `more` para enlazar al cálculo), `trip` (recorrido del funnel con fricciones y vista «Flujo real»), `slide` (deslizador antes/después), `goal` con `note` (callout), `season` (franja del año) y `combo` (explorador de combinaciones). TaxDown y Descuentos son los ejemplos completos.

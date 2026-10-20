# Plantilla de caso · Sistema o end-to-end

Para casos en los que el trabajo es entender un problema complejo y resolverlo con un modelo o sistema, sin A/B. Ejemplo: Seguro de Salud II · Renovaciones. Se probará y ajustará con Seguro de Salud I. La cabecera, «Pregúntame», la coherencia y el montaje están en `_PLANTILLA.md`.

## Historia en capítulos (fija)

### 1 · El contexto (fijo)
1. Qué se había lanzado y cuál era el siguiente reto, en una o dos frases.
2. El dato que da la escala del problema (usuarios, volumen, crecimiento).
3. La restricción que lo condiciona (temporada, plazos, regulación, países) y, si ayuda, una escena que la haga visible (p. ej. la franja del año con la temporada alta).
4. **Callout** con lo que ya fallaba (p. ej. «La campaña anterior ya mostraba los límites»): el coste en equipo, tickets o trabajo manual.
5. **Objetivo principal** (caja amarilla).

### 2 · El enfoque (fijo)
1. Qué había que resolver antes de diseñar pantallas (p. ej. «Definir las reglas antes de diseñar las pantallas»).
2. El modelo que se planteó y qué debía conseguir.
3. **Cómo evaluaríamos el resultado**: 2–4 métricas en lista.

### 3 · El diseño (fijo)
1. Las dimensiones del problema (quién, qué ocurre) y cuántas combinaciones salen.
2. **Callout con la regla que explica todos los casos**: la regla principal con su primera frase en negrita y debajo las reglas secundarias en viñetas, con negrita hasta los dos puntos.
3. **Una pieza que haga tangible el sistema** (p. ej. el explorador de combinaciones con las fichas reales, una explicación por estado y la tabla con todas las combinaciones).
4. La estructura común: qué se mantiene igual en todos los casos y qué cambia.
5. Casos límite, errores y comunicaciones.
6. **Dos formas de ver el proceso** si hay material: prototipo y diseño de flujos con el selector.
7. **Validar desde varias perspectivas**: una intro y un paso por equipo o grupo (p. ej. Operaciones, Ingeniería, usuarios).

### 4 · El resultado (fijo)
1. Cómo se midió y por qué así (p. ej. una pregunta in-app justo después de la acción, el seguimiento de incidencias).
2. La pieza de medición si existe (p. ej. la notificación animada con el toque y el agradecimiento).
3. **Las cifras**: subtítulo, 3 cajas con su base y la **ficha** debajo (fechas, despliegue, muestra).
4. El desglose que señala dónde investigar (p. ej. renovaciones frente a reemplazos).
5. **Feedback cualitativo** como comentario (avatar, equipo, etiqueta y texto) y lo que destacó.

### 5 · Lo que cambió (fijo)
1. Cómo quedó la campaña o el producto.
2. Qué se reutiliza o queda preparado para después.

## Escenas disponibles
Franja del año (`season`), explorador de combinaciones (`renew`), dos vistas con selector (`views`), antes/después con toque (`ba` con dos imágenes), comentario de feedback (`quote` con `fb`), callout con reglas (`goal` con `note` y `list`), pasos (`steps`), barras (`bars`).

## Checklist de esta plantilla

- [ ] Las reglas del sistema están escritas y la pieza tangible las respeta en todas las combinaciones.
- [ ] Las cifras llevan base y ficha; el desglose dice qué se investigó después.
- [ ] Los términos del producto son siempre los mismos (p. ej. «reemplazo», no «sustitución»).
- [ ] Lo que queda fuera de alcance se dice (p. ej. en «¿Qué descarté?»).

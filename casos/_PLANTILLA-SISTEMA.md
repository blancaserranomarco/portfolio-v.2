# Plantilla de caso · Sistema o end-to-end

Para casos en los que el trabajo es entender un problema complejo y resolverlo con un modelo o sistema, sin A/B. Ejemplos: Seguro de Salud I (un beneficio en tres países) y Seguro de Salud II · Renovaciones. La cabecera, «Pregúntame», la coherencia y el montaje están en `_PLANTILLA.md`.

## Historia en capítulos (fija)

### 1 · El contexto (fijo)
1. Qué se había lanzado y cuál era el siguiente reto, en una o dos frases.
2. El dato que da la escala del problema (usuarios, volumen, crecimiento).
3. La restricción que lo condiciona (temporada, plazos, regulación, países) y, si ayuda, una escena que la haga visible (p. ej. la franja del año con la temporada alta, o el punto de partida de cada país en tres cajas).
4. **Callout** con lo que ya fallaba (p. ej. «La campaña anterior ya mostraba los límites»): el coste en equipo, tickets o trabajo manual. Si hay un análisis de tickets o una frase de un equipo, va debajo (gráfico y comentario).
5. **Objetivo principal** (caja amarilla).

### 2 · El enfoque (fijo)
1. Qué había que resolver antes de diseñar pantallas (p. ej. «Definir las reglas antes de diseñar las pantallas», «Entender el flujo antes de rediseñarlo») y, si existe, la pantalla del estado anterior.
2. El modelo o el MVP que se planteó y qué debía conseguir (si son varios objetivos, en pasos).
3. **Cómo evaluaríamos el resultado**: 2–4 métricas en lista.

### 3 · El diseño (fijo)
1. El flujo principal si ayuda (diagrama) y las dimensiones o condiciones del problema (quién, quién paga, qué permite la empresa, qué ocurre) y por qué se multiplican los casos.
2. **Callout con la regla que explica todos los casos**: la regla principal con su primera frase en negrita y debajo las reglas secundarias en viñetas, con negrita hasta los dos puntos.
3. **Una pieza que haga tangible el sistema**: el explorador de combinaciones si hay fichas reales para todos los estados; si no, la tabla de reglas o avisos real.
4. La estructura común: qué se mantiene igual en todos los casos y qué cambia.
5. Casos límite, errores y comunicaciones.
6. **El producto con el selector** si hay material: prototipo o vídeos por tarea (para ti, para un familiar…) y el mapa de pantallas o de flujos. Si hay un documento maestro (estados, avisos), va después.
7. **Validar desde varias perspectivas**: una intro y un paso por equipo o grupo (p. ej. Operaciones, Ingeniería, usuarios).

### 4 · El resultado (fijo)
1. Cómo se midió y por qué así (p. ej. una pregunta in-app justo después de la acción, el seguimiento de incidencias).
2. La pieza de medición si existe (p. ej. la notificación animada con el toque y el agradecimiento).
3. **Las cifras**: subtítulo, 3 cajas con su base (antes → después y la variación) y la **ficha** debajo (fechas, despliegue, muestra, cómo se calcula).
4. El desglose que señala dónde investigar (p. ej. renovaciones frente a reemplazos, adopción por país).
5. **Feedback cualitativo** como comentario (avatar, equipo, etiqueta y texto) y lo que destacó.

### 5 · Lo que cambió (fijo)
1. Cómo quedó la campaña o el producto. Si el resultado reveló algo que cambió la estrategia (un giro, p. ej. «Escalar no es lo mismo que ser adoptado»), va aquí con su dato y lo que se hizo distinto desde entonces.
2. Qué se reutiliza o queda preparado para después (otros beneficios, el caso siguiente).

## Escenas disponibles
Franja del año (`season`), cajas por país o estado (`split` sin título), flujo en pasos con rama (`flow`, pasa a vertical cuando el gráfico es estrecho), antes/después con línea que se arrastra (`slide`), explorador de combinaciones (`renew`), vistas con selector (`views`, 2–4 pestañas de vídeo o imagen), antes/después con toque (`ba` con dos imágenes), comentario de feedback (`quote` con `fb`), callout con reglas (`goal` con `note` y `list`), pasos (`steps`), barras (`bars`).

## Checklist de esta plantilla

- [ ] Las reglas del sistema están escritas y la pieza tangible las respeta en todas las combinaciones.
- [ ] Las cifras llevan base y ficha; el desglose dice qué se investigó después.
- [ ] Los términos del producto son siempre los mismos (p. ej. «reemplazo», no «sustitución»).
- [ ] Lo que queda fuera de alcance se dice (p. ej. en «¿Qué descarté?»).
- [ ] Las pantallas y vídeos no muestran marcas de aseguradoras ni partners (se tapan o se usa un nombre genérico, p. ej. «Plan Integral élite»).

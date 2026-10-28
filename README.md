# Recetario

Aplicación web para consultar recetas rápidas y fáciles de preparar. El sistema permite visualizar una selección de platillos destacados y acceder al detalle de cada una para revisar ingredientes y preparación.

## Objetivo del proyecto

El objetivo de Recetario es ofrecer una experiencia de navegación sencilla para que el usuario pueda:
- Explorar recetas destacadas desde la pantalla principal.
- Seleccionar una receta para ver su contenido completo.
- Volver al inicio sin perder la estructura de la aplicación.

## Historias de usuario

1. HU-01: Como visitante, quiero ver una lista de recetas destacadas al ingresar a la aplicación, para elegir rápidamente cuál preparar.
2. HU-02: Como visitante, quiero abrir el detalle de una receta, para conocer sus ingredientes y pasos de preparación.
3. HU-03: Como visitante, quiero regresar a la pantalla principal desde una receta, para seguir navegando entre opciones.

## Casos de prueba

### CP-01: Visualización de recetas destacadas
- Objetivo: Validar que la pantalla principal carga correctamente las recetas disponibles.
- Entrada: Acceso a la ruta principal `/`.
- Resultado esperado:
  - Se muestra el título principal "Recetario".
  - Se visualiza la sección de recetas destacadas.
  - Aparecen al menos dos opciones de platillos con nombre e imagen.
  - Cada tarjeta permite navegar a la receta correspondiente.

### CP-02: Acceso al detalle de una receta y regreso al inicio
- Objetivo: Validar que el usuario puede consultar la información detallada de una receta y volver al menú principal.
- Entrada: Seleccionar una receta desde la pantalla inicial.
- Resultado esperado:
  - Se carga la vista de detalle con el nombre de la receta, descripción, ingredientes y pasos de preparación.
  - Se muestra el botón de regreso.
  - Al hacer clic en "Regresar" o "Volver al inicio", el usuario vuelve a la pantalla principal.

## Descripción funcional

La aplicación cuenta con:
- Página de inicio con listado de recetas.
- Enlace para acceder al detalle de cada receta.
- Vista individual con información del platillo.
- Navegación entre rutas usando React Router.

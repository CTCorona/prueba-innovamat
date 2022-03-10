# README

## Acceso
Podéis acceder desde el siguiente enlace: [prueba-innovamat](https://prueba-innovamat.surge.sh/) o bien ejecutarlo localmente clonando el repositorio y ejecutando los siguientes comandos:

- `yarn`
- `yarn dev`
- Acceder a [`http://localhost:3000/`](http://localhost:3000/)

## API

- Para `/talleres` y `rincones` funciona correctamente
- `/ambientes`: Da un error 404 con lo cual la dirección no existe todavía
- `/rutinas` Existe pero el método es incorrecto, está usando OPTIONS y debería usarse GET para este caso en particular

Para la gestión de errores mostraría algún mensaje indicando que el contenido no se ha podido cargar correctamente o no está disponible por el momento.

## Proceso

Al momento de recibir la prueba, lo primero es leer los requisitos y ver el diseño. Después probé los endpoints para conocer los diferentes objetos que iba a recibir. Una vez obtenida toda la información que consideré necesaria empecé a dividir en componentes cada sección de manera que en caso de ser necesario pudiese reutilizar algún componente.
Al tener claro cómo iba a ser la estructura del proyecto empecé instalando `vite` y a organizar por carpetas, instalar algún plugin que creí necesario como `styledComponents` y `wouter`.

Primero maquete toda la página con datos estáticos y una vez finalizado empecé a prepararlo para utilizar los objetos procedentes de la API y añadir la funcionalidad a los componentes que era necesario. 

Al venir de usar Vue no estoy familiarizado del todo con Context y Redux así que no me ha dado tiempo de aprender y crear un store para manejar los diferentes estados que veía oportuno, sin embargo la idea que que tengo en la cabeza (al menos desde el punto de vista de Vuex) sería crear un archivo para el contenido que recibiría de la API, donde tendría las acciones para poder realizar las llamadas a la API, otro para guardar los favoritos y un último para la búsqueda más filtros. En cada archivo tendría las diferentes mutaciones que necesitase, añadir/quitar de favoritos, actualizar los filtros activos, actualizar el contenido después de realizar una acción. Y por último cargar los estados en el componente que se requiera, para las rutas que renderizan el contenido lo gestionaría con un useEffect para que cada vez que detecte un cambio actualice el contenido a ser mostrado.

Y del mismo modo, al no estar del todo familiarizado con React, he utilizado los styledComponents cómo si se tratase de un archivo de Vue manteniendo los estilos por componente.
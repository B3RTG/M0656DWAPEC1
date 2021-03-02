# PEC1 - Ejercicio 1 - Preguntas teóricas
### 1. La aparición de HTML5/CSS3/JS ha supuesto el nacimiento del desarrollo front-end
moderno.
- ¿Cual es la ventaja del uso de etiquetas semánticas? Nombra y explica almenos 3 de ellas.
  
  Con las etiquetas semanticas HTML nos brinda etiquetas con mayor significado sobre su contenido. Cada parte o sección o elemento de nuestra página, que aunque en la práctica
  no genera un resultado distinto al de usar una etiqueta 'div', dota de mayor significado a nuestro código. Podemos decir que en la práctica vemos básicamente 3 ventajas:
  - __Legibilidad de código__ y facilidad de mantenimiento: en un proyecto pequeño esto no podría representar una diferencia sustancial, pero cuando un proyecto comienza a escalar, añadiendo más páginas y más líneas de código, la presencia de etiquetas semánticas que nos ayuden a ubicarnos y sirvan de referencia natural será una enorme ventaja.
  - __Accesibilidad__ del sitio web.
  - __Posicionamiento SEO__: Utilizar un marcado semántico facilitará a los algoritmos de posicionamiento analizar nuestro sitio y darle un mejor índice de posicionamiento

  Etiquetas:
  - __nav__:  Representa una sección de una página cuyo propósito es proporcionar enlaces de navegación
  - __header__: Representa un grupo de ayudas introductorias o de navegación. Puede contener algunos elementos de encabezado, así como también un logo, un formulario de búsqueda, un nombre de autor y otros componentes
  - __footer__: Representa un pie de página para el contenido de sección más cercano o el elemento raíz de sección
  - __section__: es un elemento de seccionamiento genérico, diseñado para contener una parte de un documento temáticamente definida. Los contenidos de un elemento section son usualmente precedidos por un encabezado.

- Cita al menos 3 APIs HTML5 y explica brevemente su funcionalidad.
  - __Fetch API__: proporciona una interfaz para recuperar recursos (incluso a través de la red). Resultará familiar a cualquiera que haya usado XMLHttpRequest, pero la nueva API ofrece un conjunto de características más potente y flexible.
  - __API Audio y video__: ofrecer audio y video en la web de varias formas, que van desde archivos multimedia 'estáticos' hasta transmisiones en vivo adaptables.
  - __API de geolocalización__:  De forma muy sencilla podemos incluir mapas de Google y muchas más funcionalidad a nuestras páginas web.

- Cita qué opción ofrece CSS3 para conseguir que se apliquen diferentes estilos CSS sobre el mismo elemento en su visualización en diferentes dispositivos (diferentes tamaños de pantalla).
 
  Nos ofrece la ayuda de las "media queries". Estas nos permiten modificar la aparencia de la web o aplicación en función del tipo de dispositivo (pantalla escritorio, mobil, impresora,...)

- Cita al menos 4 de las características principales de TypeScript (importante superset de JavaScript que trataremos en el siguiente capítulo)
  
  - __Tipado estático__: Las variables tienen un tipo de dato y solo se pueden asignar variables del tipo correspondiente.
  - __Utilización de interfaces__
  - __Casting de datos__
  - __Argumentos con tipo__
  - __Valores de retorno__ de las funciones __tipados__

### 2. El lenguaje CSS es muy rígido, poco práctico y ordenado a la hora de programar. Para evitar este problema se han creado los preprocesadores CSS, que ofrecen evidentes ventajas

- Cita al menos 2 de estos preprocesadores.

    - __SASS__
    - __LESS__

- Cita al menos 4 ventajas que ofrecen estos preprocesadores.

    Extienden las funcionalidades de un CSS común, permitiéndonos tener variables, funciones, mixins, reutilizar código, tener más flexibilidad al momento del desarrollo, etc...

- Explica brevemente en qué consisten los sourcemaps.
  
  permiten que el navegador mapee el CSS generado por un preprocesador, como Sass, de nuevo al archivo de origen original, incluido exactamente qué mixin, marcador de posición o variable de Sass es responsable de una línea determinada de CSS

- Explica qué es un transpilador.
  
  Es un tipo especial de compilador que traduce de un lenguaje fuente a otro fuente también de un nivel de abstracción parecido.

### 1.3 El flujo de trabajo profesional en front-end hace indispensable el uso de herramientas como controles de versiones
- Cita al menos dos sistemas de control de versiones.
  - git
  - subversion

- Cita y explica al menos 3 comandos de Git.

    - __commit__: Envia al repositorio local todos los cambios de que estan en estado 'staged'.
    - __add__: Añade un o varios ficheros como 'staged'
    - __push__: envia el repositorio local al repositorio remoto.

- ¿Qué diferencias existen entre los comandos git revert y reset?

    El comando 'revert' revierte el proyecto al estado de un commit generando un nuevo commit que revierte los cambios realizados mientras que 'reset' se utiliza para mover el proyecto a un commit anterior eliminando todos los posteriores de el historial de commits
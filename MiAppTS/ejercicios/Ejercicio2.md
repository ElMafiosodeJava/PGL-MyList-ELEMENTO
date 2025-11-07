## 2. Basándote en el principio de Atomic Design, explica cómo has organizado los
elementos visuales que conforman la app en componentes core de React Native y los
tuyos propios. Recuerda indicar el nombre de los componentes.

![alt text](<Esquema de atomic desing.jpg>)

Organicé los elementos por orden de menos a más.

- **Átomos**  
  Primero elaboré átomos, como puede ser por ejemplo un `CardColors.AZUL_MUY_OSCURO` o por ejemplo un solo botón, ya que son los elementos más primordiales de la interfaz y reutilizables. En el caso de la variable `AZUL_MUY_OSCURO`, es una variable que guarda un código de color que podemos aplicar a algo más adelante, guardada en un archivo `.ts` con una clase a la que llamar cada vez que la necesite.

- **Moléculas**  
  Luego seguí con moléculas, que combinan átomos. En el caso que puse en el esquema de la app que hice, un botón unido a un texto dentro de un `View` y cumple una tarea simple; en este caso, mostrar algo.

- **Organismos**  
  Una vez acabadas todas las moléculas que forman una parte importante, inevitablemente se creó un organismo. En este caso, por ejemplo, el componente **`Header`**, ya que coloqué tres botones que por separado cumplen una tarea sencilla (ser presionados y mostrar algo), encima el logo de Skyscanner y el título a la derecha. Eso forma una interfaz completa de la parte superior de la app.

- **Plantilla (Template)**  
  La plantilla sigue con la filosofía de que una agrupación de elementos forma algo más grande y, en este caso, la unión de organismos forma una plantilla; es decir, componentes **`Header`**, **`BodyCard`**, **`TravelList`** y **`Footer`** en conjunto, que sería el esqueleto de la app, los wireframes y el esqueleto final.

- **Página (Page)**  
  La página de la app sería la app en su diseño final, lista para empezar a ser usada o testeada.

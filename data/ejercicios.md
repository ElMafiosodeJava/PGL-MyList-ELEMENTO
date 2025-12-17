2.-
 
El tipado del objeto se hizo creando en un documento .ts llamado “CardTypes” el type categoría donde se debe seleccionar una de todas esas cadenas de string y con la interface shop, podemos implementar el resto de características del objeto añadiendo al atributo categoría categoría de este.
 
Más tarde se configura ese type de categoría, en otro  documento typescript llamado “CardsItems” dentro de Data, se añade otros props a otra función con los nombres de la categoría a mostrar y la imagen que corresponde a cada categoría y se exporta, como no sufre cambios la definimos como constante. Para que cuando se seleccione una categoría, por ejemplo “mancuernas”, muestre el nombre de la categoría y la imagen que conlleva.

 

En el componente BodyCard le pasamos los propios props type creados del propio componente añadiendo a los props anteriormente mencionados dos funciones, la booleana para seleccionar el objeto y deseleccionarlo y la de eliminar el objeto, están vacías porque se implementarán en el index.tsx y se pasarán como prop a BodyCard. 

 
 
Luego para renderizar los objetos en el Index.tsx, se crea una función donde se llama a cada elemento tipado de un objeto del array de tipo shop, también se llama a la función de categoría de gimnasio para obtener el icono de la categoría pasada por prop y el nombre de la categoría. De paso también se añaden las funciones restantes que pasamos como prop en el componente Bodycard y les damos una función en Index.tsx, les pasamos el id de cada objeto por si nos interesa seleccionarlo o eliminarlo. Una vez llamadas a todas las props tanto de BodyCard como de categorías, se mapean en variables. Una vez mapeado, se guarda el objeto en shop gracias a un useState.
 

Por último se crea el flatlist en la que se llama al array a renderizar, Id del objeto y renderizar y se renderizan los ítems, en caso de no haber, printea un mensaje diciendo “no hay productos en tu lista”.
3.-
 
Para el borrado del objeto empleé un botón en BodyCard y le pasé la función de borrar.
 
En el Index.tsx declaré esta función que se ejecuta al hacer click en el objeto, crea una copia del array del objeto y lo borra cuando el id coincide con el id del objeto y devuelve el array sin el objeto borrado, se guarda en el useState del array Shop, guardando los cambios.
 
  
 
Para marcar el objeto, creé una función llamada toggleMarked que emplea el mismo concepto que la anterior función de borrar, crea una copia del array instantáneamente si coincide con el id buscado y cambia a false o true, depende de si se activa o no.
 
Se activan estos estilos, que permiten representar de manera visual si han sido seleccionados o no.
 


 
Además, se van sumando los precios de los objetos, contando las cantidades seleccionadas.
4.-
 
Aquí utilizamos un componente modal donde renderizamos una ventana con un botón para añadir un objeto o cancelar.
5.-


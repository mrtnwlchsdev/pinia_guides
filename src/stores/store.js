import { defineStore } from "pinia"

/*
  La funcion defineStore recibe 2 parametros
    - El nombre de la store
    - Un objeto 

  La funcion defineStore es asignada a una variable, de esta manera los estados de la store podran ser accedidos desde cualquier componente de la aplicacion invocando dicha variable
  Por convencion el nombre de la variable se identifica de la misma manera que se nomnbra la store, pero antecediendo la palabra use
*/
export const useTaskStore = defineStore('taskStore', {
  
  // Dentro de la funcion store como propiedad se define un metodo llamado store
  // El metodo state retorna un objeto, el cual se encargara de contener los estados de la store como propiedades
  // En el siguiente ejemplo el objeto que retorna el metodo state contiene 2 propiedades, tasks y name 
  state: () => ({
    tasks: [
      {id: 1, title: 'Buy some milk', isFav: false},
      {id: 2, title: 'Play gloomhaven', isFav: true}
    ],
  })
})
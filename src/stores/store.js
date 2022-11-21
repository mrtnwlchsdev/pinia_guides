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
  }),
  /*
    Dentro de la store es posible definir una propiedad llamada getters, cuyo valor sera un objeto
    El objeto getters contiene metodos encargados de manipular el resto de propiedades de la store, retornando a su vez valores especificos luego de que estos sean manipulados
    Mediante los metodos getter solo es posible acceder al valor del cada estado de la aplicacion, mas no modificarlo
  */
  getters: {
    favs() {
      return this.tasks.filter(fav => fav.isFav)
    },
    favCount() {
      return this.tasks.reduce((p,c) => {
        return c.isFav ? p + 1 : p
      }, 0)
    },

    /*
      Los metodos getter pueden ser definidos como funciones de tipo flecha
      Al ser funciones de tipo flecha no pueden utilizar la palabra clave this para acceder al contexto del objeto al que pertenece
      En el siguiente ejemplo se pasa el state de la store como parametro para posteriormente manipular su propiedad tasks y retornar un valor
    */
    totalCount: (state) => {
      return state.tasks.length
    }
  },

  /*
    Dentro de la store es posible definir una propiedad llamada actions, cuyo valor sera un objeto
    En Pinia para actualizar el estado de la la aplicacion se utilizan funciones llamadas actions
  */
  actions: {
    addTask(task) {
      this.tasks.push(task)
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id)
    },
    toggleFav(id) {
      const task = this.tasks.find(task => task.id === id)
      task.isFav = !task.isFav
    }
  }
})  
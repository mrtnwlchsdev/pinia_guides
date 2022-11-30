<template>
  <main>
    <header>
      <img src="./assets/pinia_logo.svg" alt="Pinia logo">
      <h1>Pinia Tasks</h1>
    </header>
    <section class="new-task-form">
      <TaskForm />
    </section>
    <div 
      v-if="loading"
      class="loading"
    >
      Loading...
    </div>
    <nav class="filter">
      <button 
        @click="filter = 'all'"
      >
        ({{totalCount}}) All tasks
      </button>
      <button 
        @click="filter = 'favs'"
      >
        ({{favCount}}) Fav tasks
      </button>
    </nav>
    <section>
      <section class="task-list" v-if="filter === 'all'">
        <p>You have {{totalCount}} tasks left to do</p>
        <article 
          v-for="(task,index) in tasks"
          :key="index"
        >
        <TaskDetails :task="task" />
      </article>
      </section>
      <section class="task-list" v-if="filter === 'favs'">
        <p>You have {{favCount}} tasks left to do</p>
        <article
          v-for="(task,index) in favs"
          :key="index"
        >
          <TaskDetails :task="task" />
        </article>
      </section>
    </section>
  </main>
</template>

<script> 
  import { storeToRefs } from 'pinia'
import { ref } from 'vue'
  import TaskDetails from './components/TaskDetails.vue'
  import TaskForm from './components/TaskForm.vue'

  // Importacion de la store useTaskStore
  import { useTaskStore } from './stores/store'

  export default {
    components: {
      TaskDetails,
      TaskForm
    },
    setup() {

      // Asignacion de la store importada a una variable dentro de la funcion setup() del componente
      const taskStore = useTaskStore()

      /*
        El hook storeToRefs() recibe como parametro el nombre de la variable al cual se ha asignado la store de Pinia dentro del componente
        El hook storeToRefs() permite desestructurar las propiedades y getters de la store en variables individuales
        Las actions de la store no pueden ser desestructuradas mediante el hook storeToRefs()
      */ 
      const { tasks, loading, favs, favCount, totalCount } = storeToRefs(taskStore)

      taskStore.getTasks()

      const filter = ref('all')

      return {
        tasks,
        loading, 
        favs, 
        favCount,
        totalCount,
        filter
      }
    }
  }
</script>
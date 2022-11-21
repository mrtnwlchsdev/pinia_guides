<template>
  <main>
    <header>
      <img src="./assets/pinia_logo.svg" alt="Pinia logo">
      <h1>Pinia Tasks</h1>
    </header>
    <section class="new-task-form">
      <TaskForm />
    </section>
    <nav class="filter">
      <button 
        @click="filter = 'all'"
      >
        ({{taskStore.totalCount}}) All tasks
      </button>
      <button 
        @click="filter = 'favs'"
      >
        ({{taskStore.favCount}}) Fav tasks
      </button>
    </nav>
    <section>
      <section class="task-list" v-if="filter === 'all'">
        <p>You have {{taskStore.totalCount}} tasks left to do</p>
        <article 
          v-for="(task,index) in taskStore.tasks"
          :key="index"
        >
        <TaskDetails :task="task" />
      </article>
      </section>
      <section class="task-list" v-if="filter === 'favs'">
        <p>You have {{taskStore.favCount}} tasks left to do</p>
        <article
          v-for="(task,index) in taskStore.favs"
          :key="index"
        >
          <TaskDetails :task="task" />
        </article>
      </section>
    </section>
  </main>
</template>

<script> 
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
  

      const filter = ref('all')

      return {
        taskStore,
        filter
      }
    }
  }
</script>
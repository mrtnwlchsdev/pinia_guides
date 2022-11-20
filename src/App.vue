<script> 
  import TaskDetails from './components/TaskDetails.vue'

  // Importacion de la store useTaskStore
  import { useTaskStore } from './stores/store'

  export default {
    components: { TaskDetails },
    setup() {

      // Asignacion de la store importada a una variable dentro de la funcion setup() del componente
      const taskStore = useTaskStore()

      return {
        taskStore
      }
    }
  }
</script>

<template>
    <main>
      <header>
        <img src="./assets/pinia_logo.svg" alt="Pinia logo">
        <h1>Pinia Tasks</h1>
      </header>
      <section>
        <article 
          class="task-list"
          v-for="(task,index) in taskStore.tasks"
          :key="index"
        >

          <TaskDetails :task="task" />
        </article>
      </section>
    </main>
</template>
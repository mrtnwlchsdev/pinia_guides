<template>
    <section class="task">
        <h3>{{ task.title }}</h3>
        <article class="icons">
            <i 
                class="material-icons"
                tooltip="'Eliminar'"
                @click="taskStore.deleteTask(task.id)"
            >
                delete
            </i>
            <i 
                class="material-icons"
                :class="{active: task.isFav}"
                @click="taskStore.toggleFav(task.id)"
            >
                favorite
            </i>
        </article>
    </section>
</template>

<script>
    import { useTaskStore } from '../stores/store'
    import tooltip from 'v-tooltip'

    export default {
        props: [
            'task'
        ],
        setup () {
            const taskStore = useTaskStore()

            return {
                taskStore
            }
        }
    }
</script>
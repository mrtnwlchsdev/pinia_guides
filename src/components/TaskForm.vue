<template>
    <form @submit.prevent="handleSubmit">
        <input
            type="text"
            placeholder="I need to..."
            v-model="newTask"
        >
        <button>Add task</button>
    </form>
</template>

<script>
    import { ref } from 'vue'
    import { useTaskStore } from '../stores/store'


    export default {
        setup() {
            const taskStore = useTaskStore()

            const newTask = ref('')

            const handleSubmit = () => {
                if (newTask.value.length > 0) {
                    taskStore.addTask({
                        id: Math.floor(Math.random() * 10000),
                        title: newTask.value,
                        isFav: false
                    })
                    newTask.value = ''
                }
            }

            return {
                newTask,
                handleSubmit
            }
        }
    }
</script>
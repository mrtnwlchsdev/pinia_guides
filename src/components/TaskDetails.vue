<template>
    <section class="task">
        <h3>{{ title }}</h3>
        <article class="icons">
            <i class="material-icons">
                delete
            </i>
            <i class="material-icons">
                favorite
            </i>
        </article>
    </section>
</template>

<script>
export default {
    props: [
        'task'
    ],
    setup (props) {
        const title = props.task.title

        return {
            title
        }
    }
}
</script>
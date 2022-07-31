<template>
    <the-card>
        <div class="flex-1">
            <h1 class="text-xl font-semibold text-neutral-600">Completed Tasks ({{tasks.length}})</h1>
        </div>
        <div class="flex items-center mt-6">
            <!-- tasks list here -->
            <task-list :tasks="tasks" :show-buttons="false"></task-list>
        </div>
    </the-card>
</template>
<script>
import TaskList from '@/components/Task/TaskList.vue'
import TheCard from '@/components/TheCard.vue'

export default {
    name: 'CompletedTasks',
    components: {
        TheCard,
        TaskList
    },
    props: {
        tasks: {
            type: Array,
            required: true,
        },
    },
}
</script>
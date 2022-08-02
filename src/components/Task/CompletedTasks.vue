<template>
    <the-card>
        <div class="flex-1">
            <h1 class="text-xl font-semibold text-neutral-600">Completed Tasks ({{tasks.length}})</h1>
        </div>
        <div class="mt-1 mb-1">
            <input v-model="search" id="search" name="search" type="text" autocomplete="search" placeholder="search task" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-800 transition duration-500 ease-in-out transform border border-orange-500 rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300">
        </div>
        <div class="flex items-center mt-6">
            <!-- tasks list here -->
            <task-list :tasks="filteredTasks" :show-buttons="false"></task-list>
        </div>
    </the-card>
</template>
<script>
import TaskList from '@/components/Task/TaskList.vue'
import TheCard from '@/components/TheCard.vue'
import tasksMixins from '@/mixins/tasks.js'

export default {
    name: 'CompletedTasks',
    components: {
        TheCard,
        TaskList
    },
    mixins: [tasksMixins],
    props: {
        tasks: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            search: '',
        }
    },
}
</script>
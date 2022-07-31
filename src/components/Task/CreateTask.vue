<template>
    <the-card>
        <div class="flex-1">
            <h1 class="text-xl font-semibold text-neutral-600">Creat Task</h1>
        </div>
        <div class="flex items-center mt-6">
            <form @submit.prevent="createTask()" class="space-y-6">
                <div>
                    <label for="title" class="block text-sm font-medium text-neutral-600"> Task Title </label>
                    <div class="mt-1">
                        <input v-model="task.title" id="title" name="title" type="text" autocomplete="title" required placeholder="enter task title" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-800 transition duration-500 ease-in-out transform border border-orange-500 rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300">
                    </div>
                </div>
                <div>
                    <label for="category" class="block text-sm font-medium text-neutral-600">Task Category</label>
                    <div class="mt-1">
                        <input v-model="task.category" id="category" name="category" type="text" autocomplete="title" required placeholder="enter task category" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-800 transition duration-500 ease-in-out transform border border-orange-500 rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300">
                    </div>
                </div>
                <div>
                    <button type="submit" class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Save</button>
                </div>
            </form>
        </div>
    </the-card>
</template>
<script>
import TheCard from '@/components/TheCard.vue'

export default {
    name: 'CreateTask',
    components: {
        TheCard
    },
    data() {
        return {
            task: {
                title: '',
                category: '',
            },
        }
    },
    methods: {
        createTask() {
            this.$emit('add', this.task)
            this.task = {
                title: '',
                category: '',
            }
        }
    }
}
</script>
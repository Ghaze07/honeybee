<template>
    <ul class="list-disc list-inside space-y-6 text-justify">
        <li v-for="task in tasks" :key="task.id" class="text-justify">
            {{task.title}}
            <span class="text-sm text-neutral-600">({{task.category}})</span>
            <span class="ml-5" v-if="showButtons">
                <button @click="$emit('complete', task)" class="text-sm text-green-600">Done</button>
            </span>
            <span class="ml-5" v-if="showButtons">
                <button @click="$emit('remove', task)" class="text-red-600">Remove</button>
            </span>
        </li>
    </ul>
</template>
<script>
export default {
    name: 'TaskList',
    props: {
        tasks: {
            type: Array,
            required: true,
        },
        showButtons: {
            type: Boolean,
            required: true,
        },
    },
    computed: {
        categories() {
            return this.tasks.map(task => task.category).filter((category, index, array) => array.indexOf(category) === index);
        }
    }
}
</script>
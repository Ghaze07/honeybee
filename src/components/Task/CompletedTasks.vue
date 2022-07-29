<template>
    <the-card>
        <div class="flex-1">
            <h1 class="text-xl font-semibold text-neutral-600">Completed Tasks</h1>
        </div>
        <div class="flex items-center mt-6">
            <!-- tasks list here -->
        </div>
    </the-card>
</template>
<script>
import TheCard from '@/components/TheCard.vue'

export default {
    name: 'CompletedTasks',
    components: {
        TheCard
    }
}
</script>
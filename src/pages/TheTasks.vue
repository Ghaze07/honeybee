<template>
    <the-header></the-header>
    
    <section>
      <div class="relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8 bg-violet-700">
        <div class="relative mx-auto max-w-7xl">
          <div class="grid max-w-lg gap-5 mx-auto lg:grid-cols-3 lg:max-w-none">
            <create-task />
            <pending-tasks />
            <completed-tasks />
          </div>
        </div>
      </div>
    </section>
</template>
<script>
import TheHeader from '@/components/TheHeader.vue'
import CreateTask from '@/components/Task/CreateTask.vue'
import PendingTasks from '@/components/Task/PendingTasks.vue'
import CompletedTasks from '@/components/Task/CompletedTasks.vue'

export default {
    name: 'TheTasks',
    components: {
      TheHeader,
      CreateTask,
      PendingTasks,
      CompletedTasks,
    }
}
</script>
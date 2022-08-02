<template>
    <the-header></the-header>
    <section>
      <div class="relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8 bg-violet-700">
        <div class="relative mx-auto max-w-7xl">
          <div class="grid max-w-lg gap-5 mx-auto lg:grid-cols-3 lg:max-w-none">
            <create-task @add="addNewTask"/>
            <pending-tasks :tasks="pendingTasks" @complete="markAsComplete" @remove="removeTask"></pending-tasks>
            <completed-tasks :tasks="completedTasks"></completed-tasks>
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
import tasks from '@/store/tasks.js'

export default {
    name: 'TheTasks',
    components: {
      TheHeader,
      CreateTask,
      PendingTasks,
      CompletedTasks,
    },
    data() {
      return {
        tasks: tasks,
        task: null
      }
    },
    computed: {
      pendingTasks() {
        return this.tasks.filter(task => task.status === 'pending')
      },
      completedTasks() {
        return this.tasks.filter(task => task.status === 'completed')
      },
    },
    methods: {
      addNewTask(task) {
        this.tasks.push({
          'id' : this.tasks.length + 1,
          'title' : task.title,
          'category' : task.category,
          'status' : 'pending',
        })
      },
      markAsComplete(task) {
        this.tasks.find(t => t.id === task.id).status = 'completed'
      },
      removeTask(task) {
        this.tasks.splice(this.tasks.indexOf(task), 1)
      }
    },
}
</script>
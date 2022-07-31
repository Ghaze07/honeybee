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
        'tasks': [
          {
            'id' : 1,
            'title' : 'Task 1',
            'category' : 'sci',
            'status' : 'pending',
          },
          {
            'id' : 2,
            'title' : 'Task 2',
            'category' : 'math',
            'status' : 'pending',
          },
          {
            'id' : 3,
            'title' : 'Task 3',
            'category' : 'general',
            'status' : 'completed',
          },
          {
            'id' : 4,
            'title' : 'Task 4',
            'category' : 'math',
            'status' : 'completed',
          },
          {
            'id' : 5,
            'title' : 'Task 5',
            'category' : 'general',
            'status' : 'pending',
          },
          {
            'id' : 6,
            'title' : 'Task 6',
            'category' : 'math',
            'status' : 'pending',
          },
          {
            'id' : 7,
            'title' : 'Task 7',
            'category' : 'sci',
            'status' : 'completed',
          },
          {
            'id' : 8,
            'title' : 'Task 8',
            'category' : 'math',
            'status' : 'completed',
          },
          {
            'id' : 9,
            'title' : 'Task 9',
            'category' : 'sci',
            'status' : 'pending',
          },
          {
            'id' : 10,
            'title' : 'Task 10',
            'category' : 'math',
            'status' : 'pending',
          },
          {
            'id' : 11,
            'title' : 'Task 11',
            'category' : 'general',
            'status' : 'completed',
          },
          {
            'id' : 12,
            'title' : 'Task 12',
            'category' : 'general',
            'status' : 'completed',
          },
        ],
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
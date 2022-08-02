export default {
    
    computed: {
        filteredTasks() {
            if(this.search === '') {
                return this.tasks
            }
            return this.tasks.filter(task => {
                return task.title.toLowerCase().includes(this.search.toLowerCase())
            })
        },
    },
}
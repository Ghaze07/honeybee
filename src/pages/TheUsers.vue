<template>
    <the-header></the-header>
    <div class="overflow-x-auto">
        <div class="min-w-screen min-h-screen flex items-center justify-center bg-violet-700 font-sans overflow-hidden">
            <div class="w-full lg:w-5/6">
                <div class="bg-white shadow-md rounded my-6">
                    <users-table :users="users"></users-table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TheHeader from '@/components/TheHeader.vue'
import UsersTable from '@/components/User/UsersTable.vue'
import users from '@/store/users.js'

export default {
    name: 'TheUsers',
    components: {
      TheHeader,
      UsersTable,
    },
    data() {
      return {
        users: users,
        user: null
      }
    },
}
</script>
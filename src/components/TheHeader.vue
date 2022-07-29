<template>
    <div class=" w-full bg-black">
        <div class="flex flex-col max-w-screen-xl p-5 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
            <nav class="flex-col flex-grow hidden md:flex md:justify-start md:flex-row">
                <ul class="space-y-2 list-none lg:space-y-0 lg:items-center lg:inline-flex">
                    <li>
                        <router-link active-class="active" :to="{ name: 'home'}" class="px-2 lg:px-6 py-6 text-sm border-b-2 border-transparent hover:border-blue-600 leading-[22px] md:px-3 text-gray-500 hover:text-blue-500">
                            Home
                        </router-link>
                    </li>
                    <li>
                        <router-link active-class="active" :to="{ name: 'tasks'}" class="px-2 lg:px-6 py-6 text-sm border-b-2 border-transparent hover:border-blue-600 leading-[22px] md:px-3 text-gray-500 hover:text-blue-500">
                            Tasks
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TheHeader',
}
</script>
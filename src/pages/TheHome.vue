<template>
    <the-header></the-header>
    
    <section>
        <div class="relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8 bg-violet-700 h-screen">
            <div class="relative mx-auto max-w-7xl">
                <div class="text-center">
                    <h1 class="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-orange-500 md:text-5xl lg:text-6xl lg:max-w-7xl">
                      Honey Bee
                    </h1>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import TheHeader from '@/components/TheHeader.vue'

export default {
    name: 'TheHome',
    components: {
        TheHeader,
    }
}
</script>
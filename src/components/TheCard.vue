<template>
    <div class="flex flex-col overflow-hidden rounded-lg shadow-2xl">
        <div class="flex flex-col justify-between flex-1 p-6 bg-white">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TheCard',
}
</script>
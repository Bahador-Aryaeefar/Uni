<template>
    <div class="relative">
        <DayBody></DayBody>
    </div>
</template>

<script setup>
definePageMeta({
    // layout: 'main',
    middleware: ["auth"]
})
</script>


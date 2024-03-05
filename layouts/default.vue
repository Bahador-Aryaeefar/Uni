<template>
    <div class="max-w-[110rem] mx-auto pb-[10rem]" dir="rtl">
        <slot/>
    </div>
</template>

<script setup>
useHead({
    bodyAttrs: {
        class: 'bg-[#FAFAFA]'
    }
})
</script>

<style>
body {
    position: relative;
    min-height: 100vh;
    margin: 0;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}

/* @media screen and (max-width: 1000px) {
    html {
        font-size: 14px;
    }
}

@media screen and (max-width: 800px) {
    html {
        font-size: 12px;
    }
}

@media screen and (max-width: 400px) {
    html {
        font-size: 10px;
    }
} */
</style>
<template>
    <div class="pt-[6.5rem]">
        <img class="block w-full max-w-[26.375rem] mx-auto" src="/icons/day/off.png" alt="401">
        <div class="text-center text-black font-bold mt-[5rem] text-xl">لطفا برای احراز هویت از طریق لینک زیر وارد شوید
        </div>
        <div class="text-[#9E9E9E] text-center mt-5">این ورود تنها یک بار مورد نیاز است</div>
        <button @click="open"
            class="bg-[#1470FA] rounded-[1rem] text-white text-sm font-bold w-full max-w-[17.75rem] mt-[3.125rem] mx-auto block h-16">
            ورود</button>
    </div>
</template>

<script setup>
const open = () => {
    window.open(window.location.origin + "/sso/login", "_self")
}
</script>
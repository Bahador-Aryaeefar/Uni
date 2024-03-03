<template>
    <div class="flex bg-[#FAFAFA] items-center justify-between rounded-[0.5rem] py-3 px-6 border-[0.125rem] border-[#EEEEEE]">
        <div class="h-fit">
            <div class="text-[#757575] font-bold mobile:text-sm">کلاس {{info?.name}}</div>
            <div class="text-sm text-[#9E9E9E] mt-1 mobile:text-xs">کد درس: {{info?.serial}}</div>
        </div>
        <div class="flex items-center gap-3">
            <div class="bg-[#F5F5F5] rounded-[0.25rem] p-2 text-xs text-[#9E9E9E] mobile:text-[0.625rem]">گروه {{info?.unit}}</div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['info'])
</script>
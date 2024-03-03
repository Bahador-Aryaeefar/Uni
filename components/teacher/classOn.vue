<template>
    <div @click="day" class="flex bg-white items-center justify-between rounded-[0.5rem] py-3 px-6 cursor-pointer">
        <div class="h-fit">
            <div class="text-black font-bold mobile:text-sm">کلاس {{ info?.name }}</div>
            <div class="text-sm text-[#757575] mt-1 mobile:text-xs">کد درس: {{ info?.serial }}</div>
        </div>
        <div class="flex items-center gap-2 shrink-0">
            <div class="bg-[#F5F5F5] rounded-[0.25rem] p-2 text-xs text-[#757575] mobile:text-[0.625rem]">گروه {{ info?.unit }}</div>
            <div class="rounded-[0.25rem] p-2 text-xs mobile:text-[0.625rem]" :class="info?.day?.numberOfStudents ? 'bg-[#FF98001A] text-[#FF9800]' : 'bg-[#E91E631A] text-[#E91E63]'">{{ info?.day?.numberOfStudents ? 'ثبت موقت' : 'ثبت نشده' }}</div>
            <img class="w-6" src="/icons/landing/arrow.svg" alt="arrow">
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['info'])

function day() {
    useCourse().session.value = props.info
    navigateTo('/class')
}
</script>
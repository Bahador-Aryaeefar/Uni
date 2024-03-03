<template>
    <div @click="day" class="flex bg-white items-center justify-between rounded-[0.5rem] py-3 px-6 cursor-pointer">
        <div class="h-fit">
            <div class="text-black mobile:text-sm font-bold">کلاس {{ info?.name }}</div>
            <div class="text-sm text-[#757575] mobile:text-xs mt-1">کد درس: {{ info?.serial }}</div>
        </div>
        <div class="flex items-center gap-2 shrink-0">
            <div class="bg-[#F5F5F5] rounded-[0.25rem] p-2 text-xs text-[#757575] mobile:text-[0.625rem]">گروه {{ info?.unit }}</div>
            <div v-if="!info?.isActive" class="rounded-[0.25rem] p-2 text-xs mobile:text-[0.625rem] bg-[#E91E631A] text-[#E91E63]">غیر فعال</div>
            <div v-else-if="info?.attendanceDone" class="rounded-[0.25rem] p-2 text-xs mobile:text-[0.625rem] bg-[#4CAF501A] text-[#4CAF50]">حاضر</div>
            <div v-else class="rounded-[0.25rem] p-2 text-xs mobile:text-[0.625rem] bg-[#FF98001A] text-[#FF9800]">فعال</div>
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
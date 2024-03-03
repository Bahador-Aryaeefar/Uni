<template>
    <div @click="next" class="rounded-[0.5rem] overflow-hidden h-[8.75rem] bg-[#F5F5F5] w-[13rem]" :class="isActive ? 'cursor-pointer' : ''">
        <div :class="`h-[4.5rem] ${bgcolor} w-full relative`">
            <div class="w-[6.25rem] h-[6.25rem] rounded-full bg-[#FAFAFA] absolute left-0 right-0 mx-auto -top-[5.313rem]">
            </div>
            <div
                class="w-[6.25rem] h-[6.25rem] rounded-full bg-white absolute -left-[4.313rem] -top-[4.188rem] opacity-[0.4]">
            </div>
            <div
                class="w-[6.25rem] h-[6.25rem] rounded-full bg-white absolute -left-[3.813rem] -top-[3.688rem] opacity-[0.2]">
            </div>
            <div
                class="w-[6.25rem] h-[6.25rem] rounded-full bg-white absolute -left-[3.313rem] -top-[3.125rem] opacity-[0.1]">
            </div>
            <div
                class="absolute right-[0.688rem] top-[0.438rem] flex flex-col items-center justify-center text-white font-bold text-sm leading-[1.063rem]">
                {{ num + 1 }}
                <div class="w-5 h-[0.125rem] rounded-full bg-white m-1"></div>
            </div>
            <div class="text-white text-sm font-bold text-center leading-[1.063rem] pt-6">{{ info.firstName }}</div>
            <div class="text-white text-sm font-bold text-center leading-[1.063rem]">{{ info.lastName }}</div>
        </div>
        <div class="py-4 flex items-center gap-4 px-3">
            <div class="w-1/2">
                <div class="text-[#9E9E9E] text-xs leading-[0.938rem]">وضعیت حضور</div>
                <div :class="`flex items-center gap-1 ${color} text-sm leading-[1.063rem] mt-1`">
                    <div :class="`w-2 h-2 ${bgcolor} rounded-full mt-0.5`"></div>
                    {{ text }}
                </div>
            </div>
            <div class="w-1/2">
                <div class="text-[#9E9E9E] text-xs leading-[0.938rem]">تعداد غیبت ها</div>
                <div class="text-[#212121] text-sm leading-[1.063rem] mt-1">
                    {{ info.numberOfAbsences }} غیبت
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['num', 'info','isActive'])
const emit = defineEmits(['stat'])
const bgcolor = computed(() => {
    switch (props.info.status) {
        case 0:
            return 'bg-[#4CAF50]'
        case 1:
            return 'bg-[#E91E63]'
        case 2:
            return 'bg-[#FF9800]'
    }
})
const color = computed(() => {
    switch (props.info.status) {
        case 0:
            return 'text-[#4CAF50]'
        case 1:
            return 'text-[#E91E63]'
        case 2:
            return 'text-[#FF9800]'
    }
})
const text = computed(() => {
    switch (props.info.status) {
        case 0:
            return 'حاضر'
        case 1:
            return 'غایب'
        case 2:
            return 'غایب موجه'
    }
})

const next = () => {
    if(!props.isActive) return
    switch (props.info.status) {
        case 0:
            emit('stat',1)
            break
        case 1:
            emit('stat',2)
            break
        case 2:
            emit('stat',0)
            break
    }
}
</script>
<template>
    <div v-if="course?.session?.value" class="px-4">
        <div
            class="flex items-center py-5 px-[2.25rem] bg-[#F5F5F5] border-b-[0.125rem] border-b-[#EEEEEE] mobile:px-6">
            <NuxtLink class="shrink-0" to="/main">
                <img class="w-6 h-6" src="/icons/day/back.svg" alt="back">
            </NuxtLink>
        </div>

        <div class="flex justify-center gap-[3rem] items-end whitespace-nowrap flex-wrap mt-20">
            <div>
                <div class="flex justify-between gap-5 items-center">
                    <span class="text-[#757575] font-bold text-xl mobile:text-sm  leading-[2rem]">{{ session.name }}</span>
                    <div
                        class="shrink-0 p-2 text-[#757575] text-xs mobile:text-[0.625rem] rounded-[0.25rem] border-[0.125rem] border-[#EEEEEE]">
                        گروه {{ session.unit }}
                    </div>
                </div>

                <div class="mt-2.5 mobile:mt-1 font-bold text-sm text-[#9E9E9E] mobile:text-xs">{{ session.serial }}</div>
            </div>

            <div>
                <div class="text-[#757575] font-bold text-xl mobile:text-sm leading-[2rem]">
                    {{ useAuth().name.value }}
                </div>

                <div class="mt-3 font-bold text-sm mobile:text-xs text-[#9E9E9E]">{{ session.attendanceDone ? 'حاضر' : 'غایب' }}</div>
            </div>
        </div>

        <div v-if="!session.isActive">
            <div class="mt-[3.75rem] flex items-center justify-center text-xl font-bold text-[#212121] gap-2 mobile:text-sm">
                <img class="w-[2.25rem]" src="/icons/day/warning.svg" alt="warning">
                برای ثبت حضور، استاد باید فرایند حضور و غیاب را فعال کند.
            </div>
            <img class="w-full mx-auto max-w-[23.688rem] mt-[2.25rem]" src="/icons/day/off.png" alt="off">
        </div>

        <div v-else-if="session.attendanceDone">
            <div class="mt-[3.75rem] flex items-center justify-center text-[2rem] font-bold text-[#4CAF50] gap-2 mobile:text-xl">
                <img class="w-[2.25rem]" src="/icons/day/verify.svg" alt="verify">
                حضوری شما ثبت شد.
            </div>
            <img class="w-full mx-auto max-w-[23.688rem] mt-[2.25rem]" src="/icons/day/verify.png" alt="verify">
        </div>

        <div class="mt-[3.75rem]" v-else>
            <div class="text-[#212121] font-bold text-[2rem]  text-center">سر کلاس حاضر هستید؟</div>

            <div @click="student.addAttendance(course.session.value.runDayId)" class="mt-[3.875rem] w-[16rem] h-[16rem] mobile:w-[12.5rem] mobile:h-[12.5rem] relative mx-auto cursor-pointer circle">
                <div class="absolute w-full h-full bg-[#4CAF50] opacity-[0.4] circle1"></div>
                <div class="absolute w-full h-full bg-[#4CAF50] opacity-[0.4] circle2"></div>
                <div class="absolute w-full h-full bg-[#4CAF50] opacity-[0.4] circle3"></div>
                <div
                    class="absolute w-full h-full bg-[#4CAF50] rounded-full flex items-center justify-center text-white  text-xl font-bold text-white mobile:text-lg">
                    بله؛ ثبت حضور
                </div>
            </div>
        </div>

        <div class="flex justify-center gap-2 mt-[5rem]">
            <div class="rounded-[0.25rem] bg-[#E91E631A] text-[#E91E63] p-2 text-sm">{{ session.numberOfAbsences }} غیبت
                غیر موجه</div>
            <div class="rounded-[0.25rem] bg-[#FF98001A] text-[#FF9800] p-2 text-sm">
                {{ session.numberOfAcceptableAbsence }} غیبت موجه</div>
        </div>
    </div>
</template>

<script setup>
const course = useCourse()
if (!course.session.value) navigateTo('/main')
const session = computed(() => course.session.value)
const student = useStudent()

watch(() => student.classes.value,() => {
    course.session.value = student.classes?.value?.filter((x) => x?.runDayId == session?.value?.runDayId)[0]
})
</script>

<style scoped>
.circle1 {
    /* transform-origin: 50%-10% 50%-20%; */
    animation: spin1 8s linear infinite;
    scale: 1.14;
}

.circle2 {
    /* transform-origin: 50%-10% 50%-20%; */
    animation: spin2 8s linear infinite;
    scale: 1.12;
}

.circle3 {
    /* transform-origin: 50%-10% 50%-20%; */
    animation: spin3 8s linear infinite;
    scale: 1.1;
}

.circle {
    scale: 1;
    transition: all 1s;
}

.circle:hover {
    scale: 1.1;
}

@keyframes spin1 {
    0% {
        border-radius: 60% 75% 65% 80%;
    }

    25% {
        border-radius: 85% 90% 70% 125%;
        rotate: 90deg;
    }

    50% {
        border-radius: 80% 85% 95% 70%;
        rotate: 180deg;
    }

    75% {
        border-radius: 75% 95% 80% 85%;
        rotate: 270deg;
    }

    100% {
        border-radius: 60% 75% 65% 80%;
        rotate: 360deg;
    }
}

@keyframes spin2 {
    0% {
        border-radius: 60% 75% 65% 80%;
        rotate: 270deg;
    }

    25% {
        border-radius: 85% 90% 70% 125%;
        rotate: 360deg;
    }

    50% {
        border-radius: 80% 85% 95% 70%;
        rotate: 90deg;
    }

    75% {
        border-radius: 75% 95% 80% 85%;
        rotate: 180deg;
    }

    100% {
        border-radius: 60% 75% 65% 80%;
        rotate: 270deg;
    }
}

@keyframes spin3 {
    0% {
        border-radius: 60% 75% 65% 80%;
        rotate: 90deg;
    }

    25% {
        border-radius: 85% 90% 70% 125%;
        rotate: 180deg;
    }

    50% {
        border-radius: 80% 85% 95% 70%;
        rotate: 270deg;
    }

    75% {
        border-radius: 75% 95% 80% 85%;
        rotate: 360deg;
    }

    100% {
        border-radius: 60% 75% 65% 80%;
        rotate: 90deg;
    }
}
</style>
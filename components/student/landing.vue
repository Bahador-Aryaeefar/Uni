<template>
    <div class="">
        <div class="pb-[4.25rem] pt-[10.06rem]" style="background: linear-gradient(180deg, #0D47A1 0%, #1470FA 100%);">
            <div class="px-[5.69rem] mobile:px-4">
                <h3 class="text-white text-sm font-bold">کلاس های شما</h3>
                <div
                    class="grid gap-6 mt-6 grid-cols-[repeat(3,1fr)] tablet:grid-cols-[repeat(2,1fr)] mobile:grid-cols-[repeat(1,1fr)]">
                    <StudentClassOn v-for="item in classes" :info="item" class=""></StudentClassOn>
                </div>
            </div>
        </div>

        <img class="w-full" src="/images/landing/back.svg" alt="">
    </div>
</template>

<script setup>
const student = useStudent()
student.getClasses()

const classes = computed(() => student?.classes?.value?.sort((a,b) => {
    if(a.isActive && !b.isActive) return -1
    else if(!a.isActive && b.isActive) return 1
    else return 0
}))
</script>
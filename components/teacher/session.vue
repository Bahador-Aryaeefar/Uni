<template>
    <div v-if="course.session.value && course.students.value">
        <div
            class="flex items-center py-5 px-[2.25rem] bg-[#F5F5F5] border-b-[0.125rem] border-b-[#EEEEEE] mobile:px-6">
            <NuxtLink class="shrink-0" to="/main">
                <img class="w-6 h-6" src="/icons/day/back.svg" alt="back">
            </NuxtLink>

            <div class="mr-6">
                <div class="text-black font-bold">کلاس {{ course.session.value.name }}</div>
                <div class="mt-2 text-[#757575] text-sm">کد درس: {{ course.session.value.serial }}</div>
            </div>

            <div
                class="rounded-[0.25rem] p-2 text-xs text-[#757575] border-[0.125rem] border-[#EEEEEE] mr-8 whitespace-nowrap">
                گروه
                {{ course.session.value.unit }}</div>

            <div class="rounded-[0.25rem] p-2 text-xs m-3"
                :class="course.session.value.day.numberOfStudents ? 'bg-[#FF98001A] text-[#FF9800]' : 'bg-[#E91E631A] text-[#E91E63]'">
                {{ course.session.value.day.numberOfStudents ? 'ثبت موقت' : 'ثبت نشده' }}</div>

        </div>


        <div v-if="course.students.value?.attendanceByStudentStatus" class="px-8 mobile:px-4 flex justify-between items-center mt-8 mobile:flex-col gap-8">
            <div class="flex items-center gap-3">
                <img class="w-[2.25rem]" src="/icons/day/people.svg" alt="people">
                <div class="text-[#292D32] font-bold">
                    <span class="text-[2rem]">{{
        students?.filter(x =>
            x.status == 0)?.length }}</span><span class="opacity-[0.4] px-2">نفر از</span><span
                        class="text-[2rem]">{{ students?.length
                        }}</span><span class="opacity-[0.4] px-2">نفر حاضری زده اند.</span>
                </div>
            </div>
            <button @click="course.attendanceByStudent({ runDayId: course?.session?.value?.day?.id, status: 1 })"
                class="h-16 w-full rounded-[1rem] bg-[#1470FA] text-white font-bold text-sm max-w-[26rem] bg-[#FA452D] px-4 flex justify-center items-center gap-2.5">
                <img class="w-6" src="/icons/day/pause.svg" alt="pause">
                توقف فرایند حضور و غیاب
            </button>
        </div>

        <div v-else class="px-8 mobile:px-4">
            <button @click="course.attendanceByStudent({ runDayId: course?.session?.value?.day?.id, status: 0 })"
                class="h-16 w-full rounded-[1rem] bg-[#1470FA] text-white font-bold text-sm max-w-[26rem] mx-auto block mt-8 px-4">شروع
                فرایند حضور و غیاب توسط دانشجو</button>
        </div>

        <div class="flex gap-3 mt-8 px-4 flex-wrap">
            <div
                class="flex grow shrink-0 w-[28rem] border-[0.125rem] border-[#E0E0E0] rounded-[0.5rem] overflow-hidden mobile:flex-wrap mobile:w-full">
                <div @click="filter = 0"
                    class="w-1/4 mobile:w-1/2 h-[3.375rem] cursor-pointer border-l-[0.0625rem] mobile:border-b-[0.0625rem] flex flex-col justify-center gap-0.5 px-[0.625rem]"
                    :class="filter == 0 ? 'bg-[#F5F5F5]' : 'bg-[#FAFAFA]'">
                    <div class="text-sm" :class="filter == 0 ? 'text-[#212121]' : 'text-[#757575]'">کل دانشجویان</div>
                    <div class="text-sm" :class="filter == 0 ? 'text-[#757575]' : 'text-[#9E9E9E]'">{{ students?.length
                        }}
                        نفر
                    </div>
                </div>
                <div @click="filter = 1"
                    class="w-1/4 mobile:w-1/2 h-[3.375rem] cursor-pointer border-x-[0.0625rem] mobile:border-b-[0.0625rem] mobile:border-l-0 border-[#E0E0E0] flex flex-col justify-center gap-0.5 px-[0.625rem]"
                    :class="filter == 1 ? 'bg-[#F5F5F5]' : 'bg-[#FAFAFA]'">
                    <div class="text-sm" :class="filter == 1 ? 'text-[#212121]' : 'text-[#757575]'">حاضرین</div>
                    <div class="text-sm" :class="filter == 1 ? 'text-[#757575]' : 'text-[#9E9E9E]'">{{
        students?.filter(x =>
            x.status == 0)?.length }} نفر</div>
                </div>
                <div @click="filter = 2"
                    class="w-1/4 mobile:w-1/2 h-[3.375rem] cursor-pointer border-x-[0.0625rem] mobile:border-t-[0.0625rem] mobile:border-r-0 border-[#E0E0E0] flex flex-col justify-center gap-0.5 px-[0.625rem]"
                    :class="filter == 2 ? 'bg-[#F5F5F5]' : 'bg-[#FAFAFA]'">
                    <div class="text-sm" :class="filter == 2 ? 'text-[#212121]' : 'text-[#757575]'">غایبین</div>
                    <div class="text-sm" :class="filter == 2 ? 'text-[#757575]' : 'text-[#9E9E9E]'">{{
        students?.filter(x =>
            x.status == 1)?.length }} نفر</div>
                </div>
                <div @click="filter = 3"
                    class="w-1/4 mobile:w-1/2 h-[3.375rem] cursor-pointer border-r-[0.0625rem] mobile:border-t-[0.0625rem] flex flex-col justify-center gap-0.5 px-[0.625rem]"
                    :class="filter == 3 ? 'bg-[#F5F5F5]' : 'bg-[#FAFAFA]'">
                    <div class="text-sm" :class="filter == 3 ? 'text-[#212121]' : 'text-[#757575]'">غایبین موجه</div>
                    <div class="text-sm" :class="filter == 3 ? 'text-[#757575]' : 'text-[#9E9E9E]'">{{
        students?.filter(x =>
            x.status == 2)?.length }} نفر</div>
                </div>
            </div>

            <div class="grow w-[30rem] flex items-center rounded-[0.5rem] border-[0.125rem] px-4">
                <img class="w-5 h-5" src="/icons/day/search.svg" alt="search">
                <input v-model="search" @input="(event) => search = event.target.value"
                    class="h-[3.375rem] grow px-[0.625rem] text-[#212121] placeholder:text-[#9E9E9E] text-sm focus:outline-none bg-transparent"
                    placeholder="جست وجو در بین نام و نام خانوداگی..." type="text">
            </div>
        </div>

        <div class="grid flex-wrap  mt-[3.625rem] px-[3rem] gap-y-[2.25rem] gap-x-3 auto-cols-auto place-content-center"
            style="grid-template-columns: repeat(auto-fill, minmax(13rem, max-content))">
            <TeacherStudent v-for="(item, index) in filtered" :num="index" :info="item" :isActive="!course.students.value?.attendanceByStudentStatus"
                @stat="(next) => item.status = next">
            </TeacherStudent>
        </div>

        <div v-if="!course.students.value?.attendanceByStudentStatus"
            class="flex justify-center gap-4 flex-wrap mt-12 px-6">
            <button @click="navigateTo('/main')"
                class="block h-14 rounded-[0.5rem] bg-[#E91E63] w-full text-white text-lg font-bold max-w-[20rem]">انصراف</button>
            <button @click="confirm(0)"
                class="block h-14 rounded-[0.5rem] bg-[#FF9800] w-full text-white text-lg font-bold max-w-[20rem]">ثبت
                موقت</button>
            <button @click="confirm(1)"
                class="block h-14 rounded-[0.5rem] bg-[#4CAF50] w-full text-white text-lg font-bold max-w-[20rem]">ثبت
                نهایی</button>
        </div>
    </div>
</template>

<script setup>
const search = ref('')
const filter = ref(0)
const course = useCourse()
if (!course.session.value) navigateTo('/main')

else course.getStudents(course?.session?.value?.day?.id)

const students = ref(course?.students?.value?.students?.map(x => {
    x.status = getStat(x.status)
    return x
}))

watch(() => course.students.value, (newS, oldS) => {
    students.value = course?.students?.value?.students?.map(x => {
        x.status = getStat(x.status)
        return x
    })
})

const getStat = (s) => {
    switch (s) {
        case "حضور":
            return 0
        case "غیبت":
            return 1
        case "غیبت موجه":
            return 2
        default:
            return 0
    }
}

const filtered = computed(() => {
    if (!students.value) return
    let temp = null
    switch (filter.value) {
        case 0:
            temp = students.value
            break
        case 1:
            temp = students.value.filter(x => x.status == 0)
            break
        case 2:
            temp = students.value.filter(x => x.status == 1)
            break
        case 3:
            temp = students.value.filter(x => x.status == 2)
            break
    }
    return temp.filter(x => (x.firstName + " " + x.lastName).toLowerCase().includes(search.value.toLowerCase()))
})

const confirm = (type) => {
    let req = {}
    req["runDayId"] = course?.session?.value?.day?.id
    req.students = []
    for (let s of students.value) {
        req.students.push({ "studentId": s.id, "attendanceStatus": s.status })
    }
    req.registrationType = type
    console.log(req);
    course.postAttendance(req)
}

const check = setInterval(() => {
    if(course?.students?.value?.attendanceByStudentStatus) course.updateStudents(course?.session?.value?.day?.id)
}, 3000)

onUnmounted(() => {
    clearInterval(check)
})
</script>
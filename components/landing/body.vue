<template>
    <div class="">
        <div class="pb-[4.25rem] pt-[10.06rem]" style="background: linear-gradient(180deg, #0D47A1 0%, #1470FA 100%);">
            <div class="px-[5.69rem] mobile:px-4">
                <h3 class="text-white text-sm font-bold">کلاس های فعال</h3>
                <div
                    class="grid gap-6 mt-6 grid-cols-[repeat(3,1fr)] tablet:grid-cols-[repeat(2,1fr)] mobile:grid-cols-[repeat(1,1fr)]">
                    <Class class=""></Class>
                    <Class class=""></Class>
                    <Class class=""></Class>
                    <Class class=""></Class>
                    <Class class=""></Class>
                </div>
            </div>
        </div>

        <img class="w-full" src="/images/landing/back.svg" alt="">

        <div class="pt-10 px-[5.69rem] mobile:px-4">
            <h3 class="text-black text-sm font-bold">کلاس های غیر فعال</h3>
            <div
                class="grid gap-6 mt-6 grid-cols-[repeat(3,1fr)] tablet:grid-cols-[repeat(2,1fr)] mobile:grid-cols-[repeat(1,1fr)]">
                <ClassOff class=""></ClassOff>
                <ClassOff class=""></ClassOff>
                <ClassOff class=""></ClassOff>
                <ClassOff class=""></ClassOff>
                <ClassOff class=""></ClassOff>
            </div>
        </div>
    </div>
</template>
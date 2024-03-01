<template>
    <div class="pt-[10rem] px-4">
        <div class="flex justify-center gap-[3rem] items-end whitespace-nowrap flex-wrap">
            <div>
                <div class="flex justify-between gap-5 items-center">
                    <span class="text-[#757575] font-bold text-xl leading-[2rem]">نام درس</span>
                    <div class="shrink-0 p-2 text-[#757575] text-xs rounded-[0.25rem] border-[0.125rem] border-[#EEEEEE]">
                        گروه ۰۱
                    </div>
                </div>

                <div class="mt-3 font-bold text-sm text-[#9E9E9E]">نام و نام خانوداگی استاد</div>
            </div>

            <div>
                <div class="text-[#757575] font-bold text-xl leading-[2rem]">
                    نام و نام خانوادگی
                </div>

                <div class="mt-3 font-bold text-sm text-[#9E9E9E]">وضعیت حضور و غیاب</div>
            </div>
        </div>

        <div class="text-[#212121] font-bold text-[2rem] mt-[3.75rem] text-center">سر کلاس حاضر هستید؟</div>

        <div class="mt-[3.875rem] w-[16rem] h-[16rem] relative mx-auto cursor-pointer circle">
            <div class="absolute w-full h-full bg-[#4CAF50] opacity-[0.4] circle1"></div>
            <div class="absolute w-full h-full bg-[#4CAF50] opacity-[0.4] circle2"></div>
            <div class="absolute w-full h-full bg-[#4CAF50] opacity-[0.4] circle3"></div>
            <div
                class="absolute w-full h-full bg-[#4CAF50] rounded-full flex items-center justify-center text-white  text-xl font-bold text-white">
                بله؛ ثبت حضور
            </div>
        </div>

        <div class="flex justify-center gap-2 mt-[5rem]">
            <div class="rounded-[0.25rem] bg-[#E91E631A] text-[#E91E63] p-2 text-sm">۴ غیبت غیر موجه</div>
            <div class="rounded-[0.25rem] bg-[#FF98001A] text-[#FF9800] p-2 text-sm">۲ غیبت موجه</div>
        </div>
    </div>
</template>

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
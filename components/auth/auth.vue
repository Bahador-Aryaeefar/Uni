<template>
    <div class="fixed left-0 top-0 w-[100vw] h-[100vh] z-[10] flex break-words overflow-auto px-10 bg-[#1470FA] mobile:px-4">
        <div class="w-[42rem] bg-white rounded-[1rem] py-6 px-10 m-auto mobile:px-4">
            <h1 class="text-[2rem] font-bold leading-[3.5rem] text-[#1470FA] text-center">
                {{ !isLogin ? "ثبت نام" : "ورود" }}
            </h1>

            <div v-if="false" class="flex p-1 h-[2.5rem] bg-[#F7F7F9] rounded-full text-[#514037] w-[13.25rem] mx-auto mt-4">
                <div class="w-1/2 cursor-pointer flex items-center justify-center rounded-full"
                    :class="!isLogin ? 'text-[#1470FA] bg-white' : ''" @click="isLogin = false">
                    ثبت نام
                </div>

                <div class="w-1/2 cursor-pointer flex items-center justify-center rounded-full"
                    :class="isLogin ? 'text-[#1470FA] bg-white' : ''" @click="isLogin = true">
                    ورود
                </div>
            </div>

            <form class="mt-4 flex gap-4 flex-wrap justify-center" @submit.prevent="" autocomplete="on">
                <div class="h-14 w-[18rem] mobile:w-full relative">
                    <input id="name" v-model="name"
                        :class="(isConfirmed && !name) ? 'border-[#EE0035]' : 'border-[#E1E2E4] hover:border-[#1470FA]'"
                        class="h-full px-6 w-full text-[#1C0E07] text-lg focus:outline-none bg-transparent placeholder:text-[#A69F9B] border-[0.125rem] focus:border-[#1470FA] rounded-full"
                        type="text" placeholder="کد ملی">
                </div>

                <div class="h-14 w-[18rem] mobile:w-full relative">
                    <input id="password" v-model="password"
                        :class="(isConfirmed && !password) ? 'border-[#EE0035]' : 'border-[#E1E2E4] hover:border-[#1470FA]'"
                        class="h-full px-6 w-full text-[#1C0E07] text-lg focus:outline-none bg-transparent placeholder:text-[#A69F9B] border-[0.125rem] focus:border-[#1470FA] rounded-full"
                        :type="isPass ? 'password' : 'text'" placeholder="رمز عبور">
                    <img @click="isPass = !isPass"
                        class="w-6 absolute rtl:left-4 ltr:right-4 top-0 bottom-0 my-auto cursor-pointer"
                        :src="`/icons/auth/visibility${isPass ? '' : '-off'}.svg`" alt="visibility">
                </div>
            </form>

            <div @click="getAuth"
                class="flex items-center justify-center mx-auto h-14 mt-4 rounded-full bg-[#1470FA] cursor-pointer gap-2 text-white text-xl">
                ورود
            </div>

            <!-- <div v-if="isLogin" class="mt-4 text-center text-[#A69F9B] leading-[1.75rem] text-lg">
                حساب کاربری ندارید؟
                <span class="mx-2 text-[#1470FA] cursor-pointer" @click="isLogin = false">ثبت نام</span>
            </div>

            <div v-else class="mt-4 text-center text-[#A69F9B] leading-[1.75rem] text-lg">
                حساب کاربری دارید؟
                <span class="mx-2 text-[#1470FA] cursor-pointer" @click="isLogin = true">ورود</span>
            </div> -->
        </div>
    </div>
</template>

<script setup>
const router = useRoute()
const isLogin = ref(true)
const email = ref("")
const name = ref("")
const password = ref("")
const isPass = ref(true)
const isConfirmed = ref(false)

const auth = useAuth()
const getAuth = () => {
    if (isLogin.value) login()
}

const login = () => {
    isConfirmed.value = true
    let isValid = true

    if (!name.value) isValid = false
    if (!password.value) isValid = false

    if (!isValid) return

    const req = {
        userName: name.value,
        password: password.value
    }

    console.log(req)
    auth.login(req)
}
</script>
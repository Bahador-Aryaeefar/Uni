<template>
    <div>
        <nav class="relative">
            <div
                class="h-[5.2rem] absolute top-0 left-0 w-full flex items-center justify-between px-6 z-[1]">
                <div class="items-center flex gap-2 text-[#1470FA] font-bold text-sm">
                    <img class="w-6" src="/icons/landing/profile-s.svg" alt="profile">
                    {{useAuth().name.value ? useAuth().name.value : '-'}}
                </div>

                <img @click="useAuth().logout()" class="w-6 cursor-pointer" src="/icons/landing/logout-s.svg" alt="logout">
            </div>
        </nav>
    </div>
</template>
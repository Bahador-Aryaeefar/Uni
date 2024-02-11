<template>
    <div class="flex bg-white items-center justify-between rounded-[0.5rem] py-3 px-6 cursor-pointer">
        <div class="h-fit">
            <div class="text-black font-bold">کلاس {{ info?.name }}</div>
            <div class="text-sm text-[#757575] mt-1">کد درس: {{ info?.serial }}</div>
        </div>
        <div class="flex items-center gap-3">
            <div class="bg-[#F5F5F5] rounded-[0.25rem] p-2 text-xs text-[#757575]">گروه {{ info?.unit }}</div>
            <img class="w-6" src="/icons/landing/arrow.svg" alt="arrow">
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['info'])
const getDays = async (id) => {
    console.log('getDays')
    await useFetch('/api/Course/GetAllRunDay/' + id, {
        method: 'Get',
        credentials: 'include',
        baseURL: useBase().base.value,
        onRequestError({ request, options, error, response }) {
            // Handle the request errors
            console.log(error)
        },
        onResponse({ request, response, options }) {
            // Process the response data    return response._data
            console.log(response)
            if (response.status == 200 || response.status == 201) {
                //
            }
        },
        onResponseError({ request, response, options }) {
            // Handle the response errors 
            console.log(error)
        },
        initialCache: false,
        server: false,

    })
}
getDays(props.info.id)
</script>
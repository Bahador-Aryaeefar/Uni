<template>
    <div class="">
        <div class="pb-[4.25rem] pt-[10.06rem]" style="background: linear-gradient(180deg, #0D47A1 0%, #1470FA 100%);">
            <div class="px-[5.69rem] mobile:px-4">
                <h3 class="text-white text-sm font-bold">کلاس های فعال</h3>
                <div
                    class="grid gap-6 mt-6 grid-cols-[repeat(3,1fr)] tablet:grid-cols-[repeat(2,1fr)] mobile:grid-cols-[repeat(1,1fr)]">
                    <Class v-for="item in classes?.filter(x => x.isActive)" :info="item" class=""></Class>
                </div>
            </div>
        </div>

        <img class="w-full" src="/images/landing/back.svg" alt="">

        <div class="pt-10 px-[5.69rem] mobile:px-4">
            <h3 class="text-black text-sm font-bold">کلاس های غیر فعال</h3>
            <div
                class="grid gap-6 mt-6 grid-cols-[repeat(3,1fr)] tablet:grid-cols-[repeat(2,1fr)] mobile:grid-cols-[repeat(1,1fr)]">
                <ClassOff v-for="item in classes?.filter(x => !x.isActive)" :info="item" class=""></ClassOff>
            </div>
        </div>
    </div>
</template>

<script setup>
const prof = useProf()
const classes = ref(prof?.classes?.value?.map(x => {
    x.isActive = false
    return x
}))

if (classes.value && classes.value[0]) {
    for (let cl of classes.value) {
        const getDays = async (item) => {
            console.log('getDays')
            await useFetch('/api/Course/GetAllRunDay/' + item.id, {
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
                        if (response?._data?.data && response?._data?.data[0]) {
                            for (let day of response?._data?.data) {
                                if (day.status == 0) {
                                    cl.isActive = true
                                    cl.day = day
                                }
                            }
                        }
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
        getDays(cl)
    }
}

watch(() => prof.classes.value, (newP, oldP) => {
    classes.value = prof?.classes?.value?.map(x => {
        x.isActive = false
        return x
    })

    if (classes.value && classes.value[0]) {
        for (let cl of classes.value) {
            const getDays = async (item) => {
                console.log('getDays')
                await useFetch('/api/Course/GetAllRunDay/' + item.id, {
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
                            if (response?._data?.data && response?._data?.data[0]) {
                                for (let day of response?._data?.data) {
                                    if (day.status == 0) {
                                        cl.isActive = true
                                        cl.day = day
                                    }
                                }
                            }
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
            getDays(cl)
        }
    }
})

prof.getClasses()
</script>
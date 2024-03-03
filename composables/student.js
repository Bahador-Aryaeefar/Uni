export const useStudent = () => {
    const router = useRouter()
    const classes = useState('classesStudent', () => null)

    const getClasses = async () => {
        console.log('getClasses')
        classes.value = null
        await useFetch('/api/Student/ActiveAttendances', {
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
                    classes.value = response?._data?.data
                }
                else if (response.status == 401) useAuth().logout()
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                console.log(error)
            },
            initialCache: false,
            server: false,

        })
    }

    const updateClasses = async () => {
        console.log('updateClasses')
        await useFetch('/api/Student/ActiveAttendances', {
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
                    classes.value = response?._data?.data
                }
                else if (response.status == 401) useAuth().logout()
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                console.log(error)
            },
            initialCache: false,
            server: false,

        })
    }

    const addAttendance = async (id) => {
        console.log('addAttendance')
        await useFetch(`/api/Student/AddAttendance/${id}`, {
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
                    updateClasses()
                }
                else if (response.status == 401) useAuth().logout()
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                console.log(error)
            },
            initialCache: false,
            server: false,

        })
    }

    return { getClasses, updateClasses, classes, addAttendance }
}
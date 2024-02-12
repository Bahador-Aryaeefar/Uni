export const useProf = () => {
    const router = useRouter()
    const classes = useState('classes', () => null)

    const getClasses = async () => {
        console.log('getClasses')
        classes.value = null
        await useFetch('/api/Professor/GetAllCourse', {
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

    return { getClasses, classes }
}
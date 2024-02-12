export const useAuth = () => {
    const router = useRouter()
    const name = useState('name', () => null)

    const isLogin = () => {
        const cookie = useCookie('name')
        if (cookie.value != null) {
            return true
        }
        return false
    }

    const login = async (req) => {
        console.log('login')
        const cookie = useCookie('name')
        await useFetch('/api/Account/Login', {
            method: 'POST',
            body: req,
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
                    cookie.value = response?._data?.data?.fullNameUser
                    navigateTo('/')
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                console.log(error)
            },
            initialCache: false,
            server: false
        })
    }

    const logout = async () => {
        console.log('Logout')
        const cookie = useCookie('name')
        await useFetch('/api/Account/Logout', {
            method: 'GET',
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
                    navigateTo('/auth')
                    cookie.value = null
                    name.value = null
                }
            },
            onResponseError({ request, response, options }) {
                // Handle the response errors 
                console.log(error)
            },
            initialCache: false,
            server: false
        })
    }

    return { login, logout, isLogin, name }
}
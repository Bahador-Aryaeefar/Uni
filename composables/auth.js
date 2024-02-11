export const useAuth = () => {
    const router = useRouter()

    const isLogin = () => {
        const cookie = useCookie('pas_token', {httpOnly: true})
        if (cookie.value != null) {
            return true
        }
        return true
    }

    const login = async (req) => {
        console.log('login')
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

    return { login, logout, isLogin }
}
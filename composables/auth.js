export const useAuth = () => {
    const router = useRouter()
    const name = useState('name', () => null)
    const role = useState('role', () => null)

    const isLogin = () => {
        if (name.value != null && role.value != null) {
            return true
        }
        return false
    }

    const loginProf = async (req) => {
        console.log('loginProf')
        await useFetch('/api/Account/LoginProfessor', {
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
                    navigateTo('/main')
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

    const loginStudent = async (req) => {
        console.log('loginStudent')
        await useFetch('/api/Account/LoginStudent', {
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
                    navigateTo('/main')
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

    const login = async (req) => {
        console.log('login')
        await useFetch('/api/Account/Login', {
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
                    // navigateTo('/main')
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

    const getUser = async (req) => {
        console.log('getUser')
        await useFetch('/api/Account/CurrentUserInfo', {
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
                    name.value = response?._data?.data?.fullNameUser
                    role.value = response?._data?.data?.role
                }
            },
            onResponseError({ request, response, options, error }) {
                // Handle the response errors 
                console.log(error)
                if(response.status == 401) logout()
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
                name.value = null
                role.value = null
                navigateTo('/auth')
                if (response.status == 200 || response.status == 201) {
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

    return { loginProf, logout, isLogin, name, role, getUser,login, loginStudent }
}
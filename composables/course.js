export const useCourse = () => {
    const router = useRouter()
    const days = useState('days', () => null)
    const session = useState('session', () => null)
    const students = useState('students', () => null)

    const getDays = async (id) => {
        days.value = null
        students.value = null
        session.value = null
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
                // Process the response data
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    days.value = response?._data
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

    const getStudents = async (id) => {
        students.value = null
        console.log('getStudents')
        await useFetch('/api/Course/GetAllStudents/' + id, {
            method: 'Get',
            credentials: 'include',
            baseURL: useBase().base.value,
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                console.log(error)
            },
            onResponse({ request, response, options }) {
                // Process the response data
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    students.value = response?._data?.data
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

    const updateStudents = async (id) => {
        console.log('updateStudents')
        await useFetch('/api/Course/GetAllStudents/' + id, {
            method: 'Get',
            credentials: 'include',
            baseURL: useBase().base.value,
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                console.log(error)
            },
            onResponse({ request, response, options }) {
                // Process the response data
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    students.value = response?._data?.data
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

    const postAttendance = async (req) => {
        students.value = null
        console.log('postAttendance')
        await useFetch('/api/Course/AddAttendance', {
            method: 'POST',
            body: req,
            credentials: 'include',
            baseURL: useBase().base.value,
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                console.log(error)
            },
            onResponse({ request, response, options }) {
                // Process the response data
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    if (req.registrationType) navigateTo('/main')
                    else getStudents(req.runDayId)
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

    const attendanceByStudent = async (req) => {
        console.log('attendanceByStudent')
        await useFetch('/api/Course/AttendanceByStudent', {
            method: 'POST',
            body: req,
            credentials: 'include',
            baseURL: useBase().base.value,
            onRequestError({ request, options, error, response }) {
                // Handle the request errors
                console.log(error)
            },
            onResponse({ request, response, options }) {
                // Process the response data
                console.log(response)
                if (response.status == 200 || response.status == 201) {
                    getStudents(req.runDayId)
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

    return { getDays, getStudents, updateStudents, postAttendance, days, session, students, attendanceByStudent }
}
export default defineNuxtRouteMiddleware(async (to, from) => {
      const login = useAuth()
      if (login.isLogin()) {
            login.name.value = useCookie('name').value
            return
      }
      else {
            login.logout()
            return
      }
})

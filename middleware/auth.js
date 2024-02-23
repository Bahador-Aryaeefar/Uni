export default defineNuxtRouteMiddleware(async (to, from) => {
      let login = null
      if(useAuth()) login = useAuth()
      else return
      if (login.isLogin()) {
            login.name.value = useCookie('name').value
            return
      }
      else {
            login.logout()
            return
      }
})

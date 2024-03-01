export default defineNuxtRouteMiddleware(async (to, from) => {
      let login = null
      if (useAuth()) login = useAuth()
      else return
      if (login.isLogin()) return
      else return await login.getUser()
})

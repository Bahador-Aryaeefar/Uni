export default defineNuxtRouteMiddleware(async(to, from) => {
      const login = useAuth()
      if (login.isLogin()) return
      else return navigateTo('/auth')
})

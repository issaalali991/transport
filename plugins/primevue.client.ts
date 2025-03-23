// plugins/primevue.client.ts
import { defineNuxtPlugin } from '#app'
import StyleClass from 'primevue/styleclass'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.directive('styleclass', StyleClass)
})

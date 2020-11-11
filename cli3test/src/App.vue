<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>


<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import {
  provideAuth,
  provideStorage,
  useAuth,
  createApolloClient
} from './composables'
import { provide } from '@vue/composition-api'
import { HASURA_HTTP_ENDPOINT } from './config'
import { DefaultApolloClient } from '@vue/apollo-composable'
export default defineComponent({
  name: 'App',
  setup() {
    provideAuth()
    provideStorage()
    const auth = useAuth()
    provide(DefaultApolloClient, createApolloClient(HASURA_HTTP_ENDPOINT, auth))
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

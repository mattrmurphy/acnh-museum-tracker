<template>
  <main class="h-screen mx-auto w-full md:w-4/6" id="app">
    <Navigation />
    <router-view class="p-4" />
  </main>
</template>

<script>
import Navigation from "@/components/Navigation";

export default {
  name: "App",
  components: { Navigation },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}
</style>

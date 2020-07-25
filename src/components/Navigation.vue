<template>
  <nav
    class="flex flex-col md:flex-row md:items-center md:justify-between p-4 text-white bg-green-600"
  >
    <div class="flex justify-between items-center">
      <router-link class="font-bold text-xl sm:text-lg" to="/">ACNH Museum Tracker</router-link>
      <div class="md:hidden">
        <button class="flex items-center p-1" @click="toggleMenu">
          <span v-show="!menuOpen">
            <i data-feather="menu"></i>
          </span>
          <span v-show="menuOpen">
            <i data-feather="x"></i>
          </span>
        </button>
      </div>
    </div>
    <div class="flex flex-row hidden md:flex">
      <router-link
        class="p-2 mr-1 font-semibold hover:bg-green-700 rounded"
        :class="{ 'bg-green-700': $route.path === '/fish'}"
        to="/fish"
      >Fish</router-link>
      <router-link
        class="p-2 mr-1 font-semibold hover:bg-green-700 rounded"
        :class="{ 'bg-green-700': $route.path === 'bugs' }"
        to="/bugs"
      >Bugs</router-link>
      <router-link
        class="p-2 mr-1 font-semibold hover:bg-green-700 rounded"
        :class="{ 'bg-green-700': $route.path === 'fossls' }"
        to="/fossils"
      >Fossils</router-link>
      <router-link
        class="p-2 mr-1 font-semibold hover:bg-green-700 rounded"
        :class="{ 'bg-green-700': $route.path === 'art' }"
        to="/art"
      >Art</router-link>
      <router-link
        class="p-2 font-semibold hover:bg-green-700 rounded"
        :class="{ 'bg-green-700': $route.path.includes('museum')}"
        to="/museum"
      >Museum</router-link>
    </div>
    <div class="flex flex-col md:hidden mt-2 -mx-1" v-show="menuOpen">
      <router-link
        class="p-2 mr-1 font-semibold hover:bg-green-700 rounded"
        :class="{ 'bg-green-700': $route.path === '/fish'}"
        to="/fish"
      >Fish</router-link>
      <router-link
        class="p-2 mr-1 font-semibold hover:bg-green-700 rounded"
        :class="{ 'bg-green-700': $route.path === 'bugs' }"
        to="/bugs"
      >Bugs</router-link>
      <router-link
        class="p-2 mr-1 font-semibold hover:bg-green-700 rounded"
        :class="{ 'bg-green-700': $route.path === 'fossls' }"
        to="/fossils"
      >Fossils</router-link>
      <router-link
        class="p-2 mr-1 font-semibold hover:bg-green-700 rounded"
        :class="{ 'bg-green-700': $route.path === 'art' }"
        to="/art"
      >Art</router-link>
      <router-link
        class="p-2 font-semibold hover:bg-green-700 rounded"
        :class="{ 'bg-green-700': $route.path.includes('museum')}"
        to="/museum"
      >Museum</router-link>
    </div>
  </nav>
</template>

<script>
import feather from "feather-icons";

export default {
  name: "Navigation",
  data() {
    return {
      menuOpen: false,
    };
  },
  computed: {
    menuIcon() {
      return this.menuOpen ? "x" : "menu";
    },
  },
  mounted() {
    feather.replace();
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>
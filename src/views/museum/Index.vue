<template>
  <div>Museum Index Page
      <router-link to="/museum/fish">Fish</router-link>
      <router-link to="/museum/bugs">Bugs</router-link>
      <router-link to="/museum/fossils">Fossils</router-link>
      <router-link to="/museum/art">Art</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "MuseumIndex"
};
</script>
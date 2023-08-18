<template>
  <div id="app">
    <router-view></router-view> <!-- Dette viser komponentene for forskjellige ruter -->
  </div>
</template>

<script>
export default {
  name: 'App',
  // Ingen spesielle egenskaper som data eller metoder trengs her for dette eksemplet
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background-color: #f0f0f0; /* Behagelig gråfarge */
  font-size: 20px; /* Store fonter */
  margin: 0; /* Fjern marginkanter for å fylle hele siden */
  padding: 0; /* Fjern padding for å fylle hele siden */
}
</style>

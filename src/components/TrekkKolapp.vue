<template>
    <div>
      <p>Vil du få tak i Carl-Olav?</p>
      <button class="kolapp" @click="trekkKolapp">Trekk en kø-lapp</button>
    </div>
  </template>
  
  <script>
  import { mapMutations, mapState } from 'vuex';
  
  export default {
    methods: {
      ...mapState(['lopenummer']),
      ...mapMutations(['incrementLopenummer']),
      trekkKolapp() {
        const dittLopenummer = this.lopenummer();
        this.incrementLopenummer();
        this.$router.push({ name: "ko", params: { lopenummer: dittLopenummer } });
      }
    }
  };
  </script>
<style>
    p {
    font-size: 30px; /* Stor fontstørrelse */
    }

    .kolapp {
        background-color: #3498db; /* Blåfarge */
        color: white; /* Hvit tekstfarge */
        padding: 15px 30px; /* Økt padding rundt knappen for å gjøre den større */
        border: none; /* Fjern standardgrense */
        border-radius: 15px; /* Avrundede kanter */
        font-size: 24px; /* Enda større fontstørrelse på knappetekst */
        cursor: pointer; /* Endre markørens utseende til en peker */
    }
</style>

<template>
    <div>
      <p>Vil du få tak i Carl-Olav?</p>
      <button class="kolapp" @click="trekkKolapp">Trekk en kø-lapp</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        lopeNummer: null
      };
    },
    methods: {
      async trekkKolapp() {
        try {
          // Hent løpenummer fra serveren
          const response = await axios.post('/api/lopenummer'); // Endre URL til din server-endepunkt
          this.lopeNummer = response.data.lopenummer;
          
          // Naviger til "kø"-siden med behandlingsnummer og løpeNummer
          this.$router.push({ name: "ko", params: { lopeNummer: this.lopeNummer } });
        } catch (error) {
          console.error('Feil ved henting av løpenummer:', error);
        }
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

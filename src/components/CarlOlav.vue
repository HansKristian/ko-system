<template>
  <div>
    <p>Nå behandles nummer: <span class="medium-text ">{{ behandlingsnummer }}</span></p>
    <p>Antall som venter: {{ antall }}</p>
    <button class="blue-button" @click="okBehandling">Neste</button>
    <br />
    <button class="red-button" @click="reset">Reset</button>
  </div>
</template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        behandlingsnummer: 1,
        antall: 1,
      };
    },
    methods: {
      async okBehandling() {
        try {
          this.behandlingsnummer++
          await axios.post('/api/increment'); // Kall serveren for å øke behandlingsnummeret
          await this.fetchBehandlingsnummer(); // Oppdater behandlingsnummeret
        } catch (error) {
          console.error('Feil ved øking av behandlingsnummer:', error);
        }
      },
      async reset() {
        try {
          await axios.post('/api/reset'); // Kall serveren for å tilbakestille behandlingsnummeret
          await this.fetchBehandlingsnummer(); // Oppdater behandlingsnummeret
        } catch (error) {
          console.error('Feil ved tilbakestilling av behandlingsnummer:', error);
        }
      },
      async fetchBehandlingsnummer() {
        try {
          const response = await axios.get('/api/behandlingsnummer'); // Hent behandlingsnummer fra serveren
          this.behandlingsnummer = response.data.behandlingsnummer;
        } catch (error) {
          console.error('Feil ved henting av behandlingsnummer:', error);
        }
      },
      async fetchAntall() {
        try {
          const response = await axios.get('/api/antall'); // Hent behandlingsnummer fra serveren
          this.antall = response.data.antall;
        } catch (error) {
          console.error('Feil ved henting av behandlingsnummer:', error);
        }
      },
      initWebSocket() {
        const socket = new WebSocket('ws:localhost:3000'); // Endre URL-en til WebSocket-serveren
        socket.addEventListener('message', (event) => {
            const data = JSON.parse(event.data);
            if (data.type === 'lopenummerUpdate' || data.type === 'reset' || data.type === 'behandlingsnummerUpdate') {
                this.fetchAntall();
            }
      });
    },
    },
    mounted() {
      this.fetchBehandlingsnummer(); // Hent behandlingsnummer ved komponentmontering
      this.fetchAntall();
      this.initWebSocket();
    },
  };
  </script>

<style>
.blue-button {
    background-color: #3498db; /* Blåfarge */
    color: white; /* Hvit tekstfarge */
    padding: 15px 30px; /* Økt padding rundt knappen for å gjøre den større */
    border: none; /* Fjern standardgrense */
    border-radius: 5px; /* Avrundede kanter */
    font-size: 24px; /* Enda større fontstørrelse på knappetekst */
    cursor: pointer; /* Endre markørens utseende til en peker */
}

.red-button {
  background-color: #ff5555;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 80px;
}

.medium-text {
  font-weight: bold;
  font-size: 1em;
}
</style>
  
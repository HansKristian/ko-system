<template>
  
  <div v-if="erDinTur">
      <p class="big-text green-text">Det din tur!</p>
  </div>
  <div v-else>
    <p>Nå behandles nummer:</p>
    <p class="big-number red-text">{{ behandlingsnummer }}</p>
    
  </div>
  <div class="ticket-box">
      <p class="ticket-text">Din kø-lapp</p>
      <p class="ticket-number">{{ lopeNummer }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      behandlingsnummer: null,
    };
  },
  props: {
    lopeNummer: String,
  },
  computed: {
    erDinTur() {
      return this.lopeNummer <= this.behandlingsnummer;
    },
  },
  methods: {
    async fetchBehandlingsnummer() {
      try {
        const response = await axios.get('/api/behandlingsnummer'); // Endre URL-en til riktig endepunkt
        this.behandlingsnummer = response.data.behandlingsnummer;
      } catch (error) {
        console.error('Feil ved henting av behandlingsnummer:', error);
      }
    },
    initWebSocket() {
      const socket = new WebSocket('ws:localhost:3000'); // TODO hvilken URL skal være her?
      socket.addEventListener('message', (event) => {
        const data = JSON.parse(event.data);
        if (data.type === 'behandlingsnummerUpdate' || data.type === 'reset') {
          this.fetchBehandlingsnummer();
        }
      });
    },
  },
  mounted() {
    this.fetchBehandlingsnummer();
    this.initWebSocket();
  },
};
</script>
<style>

.big-number {
  font-size: 4em; /* Stor fontstørrelse for behandlingsnummer */
  font-weight: bold;
}

.big-text {
  font-size: 4em; /* Stor fontstørrelse for behandlingsnummer */
  font-weight: bold;
}

.red-text {
  color: #f72f2f; /* Rød tekstfarge */
}

.green-text {
  color: #5bae50;
}

.ticket-box {
  background-color: white;
  border: 2px solid #000;
  padding: 10px;
  display: inline-block;
  width: 300px; /* Angi ønsket bredde */
}


.ticket-number {
  font-size: 3em;
}
</style>

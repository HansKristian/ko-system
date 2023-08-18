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
      <p class="ticket-number">{{ lopenummer }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {

  props: {
    lopenummer: String,
  },

  computed: {
    ...mapState(['behandlingsnummer']),
    erDinTur() {
      return this.lopenummer <= this.behandlingsnummer;
    }
  }
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

<template>
  <div>
    <p>Nå behandles nummer: <span class="medium-text ">{{ behandlingsnummer }}</span></p>
    <p>Antall som venter: 2</p>
    <button class="blue-button" @click="incrementBehandlingsnummer">Neste</button>
    <br />
    <button class="red-button" @click="reset">Reset</button>
  </div>
</template>
  
  <script>
  import { mapState, mapMutations } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['behandlingsnummer', 'lopenummer'])
    },
    methods: {
      ...mapMutations(['incrementBehandlingsnummer', 'reset']),
    }
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
  
<template>

  <p>
    Nombre pokemon
  </p>
  
  <input type="text"
    v-model="nombrePokemon"
    class="border border-gray-300 rounded px-2 py-1"
    @input="nombrePokemon = nombrePokemon.toLowerCase()"
    @change="buscarDatos"
    @keypress.enter="buscarDatos"
  >

  <p>
    respuesta api
  </p>

  <img v-if="informacionAPI" :src="informacionAPI.sprites.front_default" alt="">

  <p
    v-if="!informacionAPI"
  >
    NO SE ENCONTRO EL POKEMON
  </p>

  <button
    v-if="informacionAPI"
    @click="mostrarRespuesta = !mostrarRespuesta"
  >
    Mostrar respuesta API
  </button>

  <p v-if="mostrarRespuesta">
    {{ informacionAPI }}
  </p>

</template>

<script>

import axios from 'axios';

export default {
  data(){
    return {
      nombrePokemon: "TEXTO RANDOM",
      informacionAPI: null,
      mostrarRespuesta: false,
    }
  },

  methods: {
    async buscarDatos(){
      
      if(!this.nombrePokemon) {
        alert("Por favor ingresa un nombre de pokemon");
        return;
      };

      const enlace = "https://pokeapi.co/api/v2/pokemon/" + this.nombrePokemon.toLowerCase();

      try{
        const respuesta = await axios.get(enlace);
        this.informacionAPI = respuesta.data;
        console.log(respuesta.data);
      } catch (error) {
        console.error("Error al buscar el pokemon:", error);
        this.informacionAPI = null;
        // alert("No se encontró el pokemon: " + this.nombrePokemon);
      }

    }
  },
}

</script>
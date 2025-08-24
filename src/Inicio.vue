<template>
  <main class="flex flex-col h-screen">
    <header>
      Mi nombre es: {{ name }} y tengo {{ age }} años
    </header>
    <div class="flex-grow flex flex-col mx-auto">
      contenido
      <button
        class="bg-blue-500 disabled:bg-gray-500 text-white font-bold py-2 px-4 rounded"
        @click="buscarDatos()"
        :disabled="bloquear_boton"
        :class="
          {
            'h-screen': bloquear_boton,
          }
        "
      >
        normal
      </button>

      <br>

      <p>
        Nombre
      </p>

      <input type="text"
        v-model="name"
        @input="name = name.toUpperCase()"
        @change="name = name.toLowerCase()"
        @keypress.enter="age += 1"
        class="border border-gray-300 rounded px-2 py-1"
      >

      {
        true ? () : null
        true && ()
      }
      <p
        v-if="name === 'papu'"
      >

        este mensaje solo sale si el nombre es papu o HOLA
      </p>

      
      <template v-for="test in articulos" :key="test.name">
        <p>
          {{ test?.lokaMuños || 'No existe lokaMuños' }}
        </p>
      </template>
    </div>


    <footer>
      footer
      {{ name }}
      {{ age }}
      {{ arreglos }}
      {{ objetos?.texto || 'No existe texto' }}
      {{ boolean }}
    </footer>
  </main>
</template>

<script>

export default {
  created(){
    // ! EL create  es para cuando se crea el componente,
    // Por ejemplo, un navbar para ver el icono del usuario
    // Validar si esta autentificado
    // Ó para hacer una peticion a una API
    console.log('fetch')
  },

  beforeCreate(){
    // Este evento se ejecuta antes de que se cree el componente
    // Ideal para hacer peticiones a una API
    console.log('before fetch')
  },

  mounted(){
    // Este evento se ejecuta cuando se renderizo todo el template
    console.log('fetch done')
  },

  beforeMount(){
    // Este evento se ejecuta antes de que se renderize el template
    console.log('before fetch done')
  },

  data(){
    return {
      name: "Santi",
      age: 30,
      arreglos: [
        1,2,3
      ],
      articulos: [
        {
          name: "papu",
        },
        {
          name: "loco",
        }
      ],
      objetos: {
        "a": 1,
      },
      boolean: true,

      bloquear_boton: false,
    }
  },

  methods: {

    async buscarDatos(){
      this.bloquear_boton = true;
    },

  }
}

</script>
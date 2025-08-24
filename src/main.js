import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

class Persona{
  constructor(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar(){
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}
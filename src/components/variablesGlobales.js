import { ref } from 'vue'

export const isDarkMode = ref(false)

`bg-black ${isDarkMode.value ? 'text-white' : 'text-black'}`
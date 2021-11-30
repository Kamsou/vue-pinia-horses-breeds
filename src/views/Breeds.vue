<template>
  <div class="flex flex-wrap justify-evenly">
    <BreedCard v-for="(breed, index) in breeds" :breed="breed" :index="index" :key="breed.name" />
  </div>
  <div class="absolute left-2/4 transform -translate-x-1/2">
    <input v-model="name" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" />
    <textarea v-model="description" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner mb-4" />
    <button class="bg-black text-white py-4 px-8 rounded-full mb-8" @click="createBreed">Ajouter une race</button>
  </div>
</template>

<script>
  import { computed, ref } from "vue";
  import BreedCard from "../components/BreedCard.vue"
  import { useStore } from "../store"

  export default {
    components: {
      BreedCard
    },
    setup() {
      const store = useStore()

      const name = ref('')
      const description = ref('')

      const breeds = computed(() => store.breeds)

      const createBreed = () => store.addBreed({ name: name.value, description: description.value, imageFile: '' })

      return {
        breeds,
        name,
        description,
        createBreed,
      }
    }
  }
</script>
<template>
  <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
    <div class="flex justify-center md:justify-end -mt-16 h-64 mb-4">
      <img class="" :src="`/src/assets/${breed.imageFile}`">
    </div>
    <div>
      <h2 class="text-gray-800 text-xl font-semibold">{{breed.name}}</h2>
    </div>
    <div class="flex justify-end mt-4">
      <router-link :to="`/breed?id=${index}`" class="text-xl font-medium text-blue-400">En savoir plus</router-link>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'BreedCard',
  props: {
    breed: {
      type: Object, 
      default: () => ({})
    },
    index: {
      type: Number, 
      default: 0,
    }
  },
}
</script>
<template>
  <div class="flex flex-wrap justify-between p-20">
    <BreedCard v-for="(breed, index) in breeds" :breed="breed" :index="index" :key="breed.name" />
  </div>
</template>

<script>
  import { computed  } from "vue";
  import BreedCard from "../components/BreedCard.vue"
  import { useStore } from "../store"

  export default {
    components: {
      BreedCard
    },
    setup() {
      const store = useStore()
      const breeds = computed(() => store.breeds)

      return {
        breeds
      }
    }
  }
</script>
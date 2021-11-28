<template>
  <h2>{{ breed.name }}</h2>
  <h2>{{ breed.description }}</h2>
</template>

<script>
  import { computed } from "vue";
  import { useStore } from "../store";
  import { useRoute } from 'vue-router';

  export default {
    setup() {
        const store = useStore()
        const route = useRoute()
        const breedIndex = computed(() => route.query.id)
        const breed = computed(() => store.getBreedByIndex(breedIndex.value))

        return {
          breed
        }
      }
  }
</script>
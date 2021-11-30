<template>
  <div class="absolute top-2/4 left-2/4 transform -translate-y-1/2 -translate-x-1/2">
    <h1>{{ breed.name }}</h1>
    <h3>{{ breed.description }}</h3>
  </div>
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
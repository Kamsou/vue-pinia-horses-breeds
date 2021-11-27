import { defineStore } from "pinia";

export const useStore = defineStore({
  id: 'breeds',
  state: () => ({
    breeds: [
      { 
        name: 'Appaloosa',
        description: 'L’Appaloosa est une race de chevaux de selle pouvant avoir une utilisation sportive originaire des Etats Unis.',
        imageFile: 'appaloosa.jpg'
      },
      {
        name: 'Pottok',
        description: 'Le Pottok est un poney originaire du pays basque français et espagnol.',
        imageFile: 'pottok.jpg'
      },
      {
        name: 'Paint Horse',
        description: 'L’American Paint Horse est un cheval de selle originaire des États-Unis',
        imageFile: 'paint-horse.jpg'
      },
      {
        name: 'Fjord',
        description: 'Le Fjord est une race norvégienne qui a connu peu de croisements',
        imageFile: 'fjord.jpg'
      },
    ]
  })
})
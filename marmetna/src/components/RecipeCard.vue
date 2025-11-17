<template>
  <div class="recipe-card">
    <img :src="recipe.image" alt="Recipe image" />
    <h2>{{ recipe.title }}</h2>
    <p>
      Préparation : {{ recipe.prepTime }} |
      Cuisson : {{ recipe.cookTime }} |
      Difficulté : {{ recipe.difficulty }}
    </p>
    <p>Calories : {{ recipe.calories }} kcal</p>
    <button class="like-btn" @click="$emit('like')">❤️ Like</button>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

// ✅ Déclaration locale du type Recipe
interface Recipe {
  title: string
  prepTime: string
  cookTime: string
  calories: number
  image: string
  difficulty: string
}

// ✅ Définition de la prop
const props = defineProps<{ recipe: Recipe }>()

// ✅ Hooks du cycle de vie + console.log
console.log(`🟡 Création du composant RecipeCard pour "${props.recipe.title}"`)

onBeforeMount(() => {
  console.log(`🕓 Avant montage de "${props.recipe.title}"`)
})

onMounted(() => {
  console.log(`✅ Composant "${props.recipe.title}" monté à l’écran`)
})

onUpdated(() => {
  console.log(`♻️ Composant "${props.recipe.title}" mis à jour`)
})

onBeforeUnmount(() => {
  console.log(`⚠️ Avant destruction de "${props.recipe.title}"`)
})

onUnmounted(() => {
  console.log(`💀 Composant "${props.recipe.title}" détruit`)
})
</script>

<style scoped>
.recipe-card {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 1rem;
  width: 250px;
  text-align: center;
  transition: transform 0.2s;
  background-color: #fff;
}
.recipe-card:hover {
  transform: scale(1.05);
}
.recipe-card img {
  width: 100%;
  border-radius: 10px;
}
.like-btn {
  margin-top: 10px;
  padding: 5px 10px;
  border: none;
  background-color: #ff6f61;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
}
.like-btn:hover {
  background-color: #ff4f41;
}
</style>
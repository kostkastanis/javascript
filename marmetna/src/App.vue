<template>
  <div id="app">
    <!-- Header -->
    <Header />

    <!-- Banner -->
    <Banner>
      Recipe of the Week: 🍪 Cookie au Chocolat !
    </Banner>

    <!-- Main content -->
    <main>
      <!-- Add Recipe + Search -->
      <div class="top-controls">
        <button class="add-btn" @click="showModal = true">Add Recipe</button>
        <input
          type="text"
          class="search-input"
          placeholder="Rechercher une recette..."
          v-model="searchTerm"
        />
      </div>

      <!-- Recipe cards -->
      <div class="recipes-container">
        <RecipeCard
          v-for="(recipe, index) in filteredRecipes"
          :key="index"
          :recipe="recipe"
          @like="likes++"
        />
      </div>

      <p v-if="filteredRecipes.length === 0">Aucune recette trouvée 😢</p>
      <p>Total Likes: {{ likes }}</p>
    </main>

    <!-- Recipe Form Modal -->
    <div v-if="showModal" class="modal-overlay" @click.self="showModal = false">
      <div class="modal-content">
        <h2>Add New Recipe</h2>
        <form @submit.prevent="submitRecipe">
          <label>
            Title:
            <input v-model="newRecipe.title" required />
          </label>
          <label>
            Preparation Time:
            <input v-model="newRecipe.prepTime" required />
          </label>
          <label>
            Cook Time:
            <input v-model="newRecipe.cookTime" required />
          </label>
          <label>
            Calories:
            <input type="number" v-model.number="newRecipe.calories" required />
          </label>
          <label>
            Image URL:
            <input v-model="newRecipe.image" required />
          </label>
          <label>
            Difficulté:
            <select v-model="newRecipe.difficulty">
              <option>Facile</option>
              <option>Moyen</option>
              <option>Difficile</option>
            </select>
          </label>
          <div class="modal-buttons">
            <button type="submit">Save</button>
            <button type="button" @click="showModal = false">Cancel</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Banner from './components/Banner.vue'
import RecipeCard from './components/RecipeCard.vue'

interface Recipe {
  title: string
  prepTime: string
  cookTime: string
  calories: number
  image: string
  difficulty: string
}

const recipes = ref<Recipe[]>([
  { title: "Cookie au chocolat", prepTime: "10 min", cookTime: "15 min", calories: 250, image: "https://source.unsplash.com/400x300/?chocolate-cookie", difficulty: "Facile" },
  { title: "Tarte aux pommes", prepTime: "15 min", cookTime: "30 min", calories: 300, image: "https://source.unsplash.com/400x300/?apple-pie", difficulty: "Moyen" }
])

const searchTerm = ref('')
const likes = ref(0)
const showModal = ref(false)

const newRecipe = ref<Recipe>({
  title: '',
  prepTime: '',
  cookTime: '',
  calories: 0,
  image: '',
  difficulty: 'Facile'
})

const filteredRecipes = computed(() =>
  recipes.value.filter(r =>
    r.title.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
)

function submitRecipe() {
  recipes.value.push({ ...newRecipe.value })
  newRecipe.value = { title: '', prepTime: '', cookTime: '', calories: 0, image: '', difficulty: 'Facile' }
  showModal.value = false
}
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background-color: #fff8e7;
  margin: 0;
  text-align: center;
}

/* Top controls: Add + Search */
.top-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

/* Add button */
.add-btn {
  padding: 0.5rem 1rem;
  background-color: #ff6f61;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

/* Search input */
.search-input {
  padding: 0.5rem 1rem;
  width: 300px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
}

/* Recipe cards container */
.recipes-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  width: 400px;
  text-align: left;
}
.modal-content label {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}
.modal-content input, .modal-content select {
  padding: 0.5rem;
  font-size: 1rem;
}
.modal-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}
.modal-buttons button[type="submit"] {
  background-color: #ff6f61;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
}
.modal-buttons button[type="button"] {
  background-color: #ccc;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
}
</style>
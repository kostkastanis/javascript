<template>
  <div class="banner">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
// Pas de logique
</script>

<style scoped>
.banner {
  width: 100%;
  background-color: #ffc107;
  color: #333;
  text-align: center;
  padding: 1rem;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 10px;
  margin-bottom: 2rem;
}
</style>
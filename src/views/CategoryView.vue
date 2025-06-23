<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">Categories</h2>
    <ul class="space-y-2">
      <li v-for="category in categories" :key="category.id" class="bg-white p-4 rounded shadow">
        <div class="font-semibold">{{ category.name }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import categoryService from '../plugin/categoryServices';

export default {
  name: 'CategoryView',
  data() {
    return {
      categories: [],
    };
  },
  async mounted() {
    const res = await categoryService.getAll();
    this.categories = res.data;
  },
};
</script>
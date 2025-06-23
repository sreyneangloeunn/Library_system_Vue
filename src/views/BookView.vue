<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">Books</h2>
    <ul class="space-y-2">
      <li v-for="book in books" :key="book.id" class="bg-white p-4 rounded shadow">
        <div class="font-semibold">{{ book.title }}</div>
        <div class="text-sm text-gray-600">Author: {{ book.author }} | ISBN: {{ book.isbn }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import bookService from '../plugin/bookServices';

export default {
  name: 'BookView',
  data() {
    return {
      books: [],
    };
  },
  async mounted() {
    const res = await bookService.getAll();
    this.books = res.data;
  },
};
</script>
<template>
  <div class="p-6 max-w-5xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">📊 Library Dashboard</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <DashboardCard title="Total Books" icon="📚" :count="stats.books" />
      <DashboardCard title="Total Members" icon="👥" :count="stats.members" />
      <DashboardCard title="Book Categories" icon="🏷️" :count="stats.categories" />
      <DashboardCard title="Total Loans" icon="🔁" :count="stats.loans" />
    </div>
  </div>
</template>

<script>
import DashboardCard from '../components/DashboardCard.vue';
import bookService from '../plugin/bookServices';
import memberService from '../plugin/memberServices';
import categoryService from '../plugin/categoryServices';
import loanService from '../plugin/loanServices';

export default {
  name: 'DashboardView',
  components: { DashboardCard },
  data() {
    return {
      stats: {
        books: 0,
        members: 0,
        categories: 0,
        loans: 0,
      },
    };
  },
  async mounted() {
    await this.fetchStats();
  },
  methods: {
    async fetchStats() {
      try {
        const [books, members, categories, loans] = await Promise.all([
          bookService.getAll(),
          memberService.getAll(),
          categoryService.getAll(),
          loanService.getAll(),
        ]);

        this.stats.books = books.data.length;
        this.stats.members = members.data.length;
        this.stats.categories = categories.data.length;
        this.stats.loans = loans.data.length;
      } catch (error) {
        console.error('Error fetching dashboard stats:', error);
      }
    },
  },
};
</script>

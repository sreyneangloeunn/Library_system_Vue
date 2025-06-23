<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">Loans</h2>
    <ul class="space-y-2">
      <li v-for="loan in loans" :key="loan.id" class="bg-white p-4 rounded shadow">
        <div class="font-semibold">Book ID: {{ loan.book_id }} | Member ID: {{ loan.member_id }}</div>
        <div class="text-sm text-gray-600">
          Loaned: {{ loan.loan_date }} | Due: {{ loan.due_date }} | Status: {{ loan.status }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import loanService from '../plugin/loanServices';

export default {
  name: 'LoanView',
  data() {
    return {
      loans: [],
    };
  },
  async mounted() {
    const res = await loanService.getAll();
    this.loans = res.data;
  },
};
</script>
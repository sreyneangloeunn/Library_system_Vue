<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">Members</h2>
    <ul class="space-y-2">
      <li v-for="member in members" :key="member.id" class="bg-white p-4 rounded shadow">
        <div class="font-semibold">{{ member.name }}</div>
        <div class="text-sm text-gray-600">Email: {{ member.email }} | Phone: {{ member.phone }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import memberService from '../plugin/memberServices';

export default {
  name: 'MemberView',
  data() {
    return {
      members: [],
    };
  },
  async mounted() {
    const res = await memberService.getAll();
    this.members = res.data;
  },
};
</script>

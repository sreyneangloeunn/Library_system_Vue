<template>
  <div class="bg-white shadow rounded-2xl p-5 text-center hover:shadow-md transition">
    <div class="text-4xl mb-2">{{ icon }}</div>
    <div class="text-2xl font-semibold">{{ count }}</div>
    <div class="text-gray-500 mt-1">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: 'DashboardCard',
  props: {
    title: String,
    count: Number,
    icon: String,
  },
};
</script>

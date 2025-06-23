<script setup>
import { RouterLink, RouterView } from 'vue-router'

const links = [
  { label: 'Dashboard', to: '/', icon: '🏠' },
  { label: 'Books', to: '/books', icon: '📚' },
  { label: 'Members', to: '/members', icon: '👥' },
  { label: 'Libraries', to: '/libraries', icon: '🏛️' },
  { label: 'Loans', to: '/loans', icon: '📋' },
]
</script>

<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <nav class="w-64 bg-blue-700 text-white flex flex-col p-6">
      <div class="mb-10">
        <h2 class="text-2xl font-semibold tracking-wide">Libray<span class="text-3xl">📖</span></h2>
        
      </div>

      <ul class="flex flex-col space-y-3">
        <li v-for="link in links" :key="link.to">
          <RouterLink
            :to="link.to"
            class="flex items-center space-x-3 px-4 py-2 rounded hover:bg-blue-800 transition-colors duration-200"
            active-class="bg-blue-900 font-semibold shadow-lg"
            exact
          >
            <span class="text-xl">{{ link.icon }}</span>
            <span class="text-lg">{{ link.label }}</span>
          </RouterLink>
        </li>
      </ul>
    </nav>

    <!-- Main content area -->
    <main class="flex-1 p-6 overflow-auto">
      <RouterView />
    </main>
  </div>
</template>

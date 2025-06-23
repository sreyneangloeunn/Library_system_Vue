<template>
  <div class="p-8 bg-gray-50 min-h-screen">
    <!-- Page Header -->
    <h2 class="text-3xl font-bold text-blue-800 mb-8 flex items-center gap-2">
      📚 Welcome to Our Library!
    </h2>

    <!-- Library Info Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
      <div
        v-for="library in libraries"
        :key="library.id"
        class="bg-white border border-blue-100 rounded-xl p-6 shadow hover:shadow-lg transition"
      >
        <h3 class="text-xl font-semibold text-blue-700 mb-2">{{ library.name }}</h3>
        <p class="text-gray-700 mb-1"><strong>📍 Address:</strong> {{ library.address }}</p>
        <p class="text-gray-700 mb-1"><strong>📞 Phone:</strong> {{ library.phone || 'N/A' }}</p>
        <p class="text-gray-600 text-sm mt-2">
          <strong>ID:</strong> {{ library.id }} <br />
          <strong>Created:</strong> {{ formatDate(library.created_at) }}
        </p>
      </div>
    </div>

    <!-- Library History Section -->
    <section class="mb-10">
      <h3 class="text-2xl font-bold text-blue-700 mb-4">🏛️ Our History</h3>
      <p class="text-gray-700 leading-relaxed">
        Established in 1995, our library has served the community with a rich collection of educational
        and literary resources. From ancient literature to modern technology references, we aim to
        empower students, researchers, and book lovers with accessible knowledge and a peaceful study
        environment.
      </p>
    </section>

    <!-- Sample Books Section -->
    <section class="mb-10">
      <h3 class="text-2xl font-bold text-blue-700 mb-4">📗 Featured Books</h3>
      <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <li class="bg-white p-4 rounded shadow border border-gray-100">
          <h4 class="text-lg font-semibold text-gray-800">The Great Gatsby</h4>
          <p class="text-sm text-gray-600">by F. Scott Fitzgerald</p>
        </li>
        <li class="bg-white p-4 rounded shadow border border-gray-100">
          <h4 class="text-lg font-semibold text-gray-800">A Brief History of Time</h4>
          <p class="text-sm text-gray-600">by Stephen Hawking</p>
        </li>
        <li class="bg-white p-4 rounded shadow border border-gray-100">
          <h4 class="text-lg font-semibold text-gray-800">Clean Code</h4>
          <p class="text-sm text-gray-600">by Robert C. Martin</p>
        </li>
      </ul>
    </section>

    <!-- Librarian Info Section -->
    <section>
      <h3 class="text-2xl font-bold text-blue-700 mb-4">👩‍💼 Librarian Contact</h3>
      <div class="bg-white p-6 rounded shadow border border-gray-100 max-w-md">
        <p><strong>Name:</strong> Sarah Johnson</p>
        <p><strong>Email:</strong> sarah.johnson@librarysystem.com</p>
        <p><strong>Phone:</strong> +1 234 567 890</p>
        <p class="mt-2 text-gray-600 text-sm">
          Reach out to our chief librarian for help with memberships, book requests, or archive access.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import libraryService from '../plugin/libraryServices'

export default {
  name: 'LibraryView',
  data() {
    return {
      libraries: []
    }
  },
  async mounted() {
    try {
      const res = await libraryService.getAll()
      console.log('✅ API Response:', res.data)
      this.libraries = res.data
    } catch (error) {
      console.error('❌ Failed to fetch libraries:', error)
    }
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString()
    }
  }
}
</script>

<script>
  import { page } from '$app/stores';
  let isMenuOpen = false;

  $: currentPath = $page.url.pathname;
</script>

<nav class="bg-white backdrop-blur-sm shadow-lg sticky top-0 z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16">
      <!-- Logo -->
      <div class="flex items-center">
        <img src="/logo.png" alt="Puspa Kamal Wooden Furnitures Logo" class="h-10 w-auto mr-3" />
        <a href="/" class="text-xl font-serif text-accent-500 font-bold">Puspa Kamal Wooden Furnitures</a>  <!-- Fixed: text-l → text-xl, text-accent → text-accent-500 -->
      </div>
      
      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center space-x-8">
        <a href="/" class="text-gray-700 hover:text-accent-500 px-3 py-2 text-sm font-medium transition-colors {currentPath === '/' ? 'active' : ''}">Home</a>
        <a href="/catalog" class="text-gray-700 hover:text-accent-500 px-3 py-2 text-sm font-medium transition-colors {currentPath === '/catalog' ? 'active' : ''}">Gallery</a>
        <a href="/about" class="text-gray-700 hover:text-accent-500 px-3 py-2 text-sm font-medium transition-colors {currentPath === '/about' ? 'active' : ''}">About</a>
        <a href="/contact" class="text-gray-700 hover:text-accent-500 px-3 py-2 text-sm font-medium transition-colors {currentPath === '/contact' ? 'active' : ''}">Contact</a>
      </div>
      
      <!-- Mobile Menu Button -->
      <div class="md:hidden flex items-center">
        <button on:click={() => isMenuOpen = !isMenuOpen} class="text-gray-700 hover:text-accent-500 focus:outline-none">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
  
  <!-- Mobile Menu -->
  {#if isMenuOpen}
    <div class="md:hidden bg-white border-t border-gray-200">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="/" 
           on:click={() => isMenuOpen = false}
           class="block px-3 py-2 text-gray-700 hover:text-accent-500 text-sm font-medium focus:outline-none {currentPath === '/' ? 'active' : ''}">Home</a>
        <a href="/catalog" 
           on:click={() => isMenuOpen = false}
           class="block px-3 py-2 text-gray-700 hover:text-accent-500 text-sm font-medium focus:outline-none {currentPath === '/catalog' ? 'active' : ''}">Gallery</a>
        <a href="/about" 
           on:click={() => isMenuOpen = false}
           class="block px-3 py-2 text-gray-700 hover:text-accent-500 text-sm font-medium focus:outline-none {currentPath === '/about' ? 'active' : ''}">About</a>
        <a href="/contact" 
           on:click={() => isMenuOpen = false}
           class="block px-3 py-2 text-gray-700 hover:text-accent-500 text-sm font-medium focus:outline-none {currentPath === '/contact' ? 'active' : ''}">Contact</a>
      </div>
    </div>
  {/if}
</nav>

<style>
  /* Active link styling */
  .active {
    color: #3b82f6; /* Tailwind's blue-500 */
    font-weight: 600;
  }
</style>
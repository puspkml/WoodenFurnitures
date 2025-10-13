<script>
  import { onMount } from 'svelte';
  import { catalogData } from '$lib/catalog.js'; // Auto-generated import

  let categories = catalogData.categories;
  let activeTab = 'all'; // Default to 'all' for mixed view
  let searchQuery = ''; // For global search
  let selectedImage = null;
  let selectedIndex = 0; // For modal navigation
  let currentImages = []; // Filtered images for active tab/search
  let allShuffledImages = []; // Shuffled version for 'all' tab (to avoid re-shuffling on search)
  let isLoading = true;
  let showBackToTop = false;
  let whatsappNumber = '1234567890'; // Replace with your dedicated WhatsApp number (international format without + or spaces, e.g., '15551234567' for US)

  // Fisher-Yates shuffle function
  function shuffle(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  // Shuffle all images when switching to 'all' tab
  $: if (activeTab === 'all') {
    allShuffledImages = shuffle(Object.values(categories).flat());
  }

  // Filter images based on active tab and search
  $: if (activeTab === 'all') {
    currentImages = allShuffledImages.filter(img =>
      img.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      img.alt.toLowerCase().includes(searchQuery.toLowerCase())
    );
  } else if (activeTab && categories[activeTab]) {
    currentImages = categories[activeTab].filter(img =>
      img.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      img.alt.toLowerCase().includes(searchQuery.toLowerCase())
    );
  } else {
    currentImages = [];
  }

  onMount(() => {
    setTimeout(() => { isLoading = false; }, 500); // Fade-in delay for polish
    window.addEventListener('scroll', () => {
      showBackToTop = window.scrollY > 300;
    });
  });

  function setActiveTab(tab) {
    activeTab = tab;
    selectedImage = null; // Reset modal
  }

  function openModal(image, index) {
    selectedIndex = index;
    selectedImage = image;
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    selectedImage = null;
    document.body.style.overflow = 'auto';
  }

  function prevImage() {
    selectedIndex = (selectedIndex - 1 + currentImages.length) % currentImages.length;
    selectedImage = currentImages[selectedIndex];
  }

  function nextImage() {
    selectedIndex = (selectedIndex + 1) % currentImages.length;
    selectedImage = currentImages[selectedIndex];
  }

  function toggleZoom() {
    const img = document.querySelector('.modal-img');
    if (img.style.transform === 'scale(1.5)') {
      img.style.transform = 'scale(1)';
    } else {
      img.style.transform = 'scale(1.5)';
    }
  }

  function shareToWhatsApp() {
    if (selectedImage && whatsappNumber) {
      const message = `Check out this furniture piece from Puspa Kamal Wooden Furnitures:\n\nName: ${selectedImage.name}\nDescription: ${selectedImage.alt}\n\nImage: ${selectedImage.src}\n\nFor orders or customizations, contact us directly!`;
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    } else {
      alert('WhatsApp number not configured. Please update the whatsappNumber variable in the script.');
    }
  }

  function handleKeydown(event) {
    if (!selectedImage) return;
    if (event.key === 'Escape') closeModal();
    if (event.key === 'ArrowLeft') prevImage();
    if (event.key === 'ArrowRight') nextImage();
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleImageError(event) {
    event.target.src = '/placeholder-furniture.jpg'; // Add a static placeholder image in static/ if needed
    event.target.classList.add('bg-gray-200', 'flex', 'items-center', 'justify-center', 'text-gray-400');
    event.target.innerHTML = '📦'; // Simple icon fallback
  } 
</script>

<svelte:head>
  <title>Professional Catalog ({catalogData.totalImages} Items) - Puspa Kamal Wooden Furnitures</title>
  <meta name="description" content="Discover our curated collection of handcrafted wooden furniture. Browse sofas, beds, tables, and more in high-quality detail." />
  <meta name="keywords" content="wooden furniture, sofas, beds, catalog, Puspa Kamal Wooden Furnitures, Furnitures, Wooden" />
</svelte:head>

<!-- Hero/Intro -->
<section class="relative bg-cover bg-center h-64 md:h-96 flex items-center justify-center text-white text-center px-4 overflow-hidden"
         style="background-image: url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=1080&fit=crop');">
  <div class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
  <div class="relative z-10 max-w-4xl mx-auto">
    <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 drop-shadow-lg">Our Furniture Catalog</h1>
    <p class="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed drop-shadow-md">
      These Catalogs are just for display purposes. For orders, please contact us directly. Any design can be customized as per your requirements.
    </p>
  </div>
</section>

<!-- Search & Tabs -->
<div class="py-6 sm:py-8 px-4 max-w-7xl mx-auto">
  <!-- Search Bar -->
  <div class="mb-6 sm:mb-8 text-center">
    
  </div>

  <!-- Category Tabs (All first, then categories) -->
  {#if Object.keys(categories).length > 0 || catalogData.totalImages > 0}
    <nav class="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8 -mx-2 overflow-x-auto pb-2">
      <!-- All Tab (Always shown first) -->
      <button
        on:click={() => setActiveTab('all')}
        class:active={activeTab === 'all'}
        class="px-4 sm:px-6 py-2 sm:py-3 mx-1 rounded-full font-sans font-medium text-xs sm:text-sm transition-all duration-300 shadow-sm {activeTab === 'all' ? 'bg-accent text-white shadow-md' : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'}"
        aria-label="View all categories mixed"
      >
        All ({catalogData.totalImages})
      </button>
      
      <!-- Individual Category Tabs -->
      {#each Object.keys(categories) as categoryKey}
        <button
          on:click={() => setActiveTab(categoryKey)}
          class:active={activeTab === categoryKey}
          class="px-4 sm:px-6 py-2 sm:py-3 mx-1 rounded-full font-sans font-medium text-xs sm:text-sm transition-all duration-300 shadow-sm {activeTab === categoryKey ? 'bg-accent text-white shadow-md' : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'}"
          aria-label={`Switch to ${categoryKey} category`}
        >
          {categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1).replace(/-/g, ' ')} ({categories[categoryKey].length})
        </button>
      {/each}
    </nav>
  {/if}
</div>

<!-- Pinterest-Style Masonry Catalog Grid -->
<section class="py-8 sm:py-12 sm:py-16 px-4 max-w-7xl mx-auto">
  {#if isLoading}
    <div class="text-center py-12 sm:py-16">
      <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-accent mx-auto"></div>
      <p class="mt-4 text-gray-600 text-base sm:text-lg">Loading catalog...</p>
    </div>
  {:else if (activeTab === 'all' && catalogData.totalImages === 0) || Object.keys(categories).length === 0 || currentImages.length === 0}
    <div class="text-center py-12 sm:py-16">
      <div class="text-5xl sm:text-6xl mb-4">📦</div>
      <h2 class="text-xl sm:text-2xl font-serif font-bold text-gray-800 mb-2">Catalog is Empty</h2>
      <p class="text-gray-600 mb-6 max-w-md mx-auto text-sm sm:text-base">
        No furniture pieces found yet. Add images to <code>static/furnitures/[category]/</code> (e.g., sofa/, bed/) and run <code>npm run generate-catalog</code>.
      </p>
      <button on:click={() => location.reload()} class="bg-accent hover:bg-opacity-90 text-white px-6 py-3 rounded-full font-sans text-base sm:text-lg transition-all duration-300 shadow-md">
        Refresh Catalog
      </button>
    </div>
  {:else}
    <div class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-6 animate-fade-in">
      {#each currentImages as image, index}
        <div class="group relative bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-500 cursor-pointer border border-gray-100 mb-4 break-inside-avoid [@media (min-width: 640px)]:mb-6"
             on:click={() => openModal(image, index)}
             on:keydown={handleKeydown}
             tabindex="0"
             role="button"
             aria-label={`View ${image.name} in full size`}>
          <div class="relative overflow-hidden">
            <img 
              src={image.src} 
              alt={image.alt}
              on:error={handleImageError}
              class="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105 min-h-[200px] sm:min-h-[250px]"
              loading="lazy" />
          </div>
          <div class="p-3 sm:p-4">
            <h3 class="font-serif font-semibold text-gray-800 text-xs sm:text-sm sm:text-base mb-1 line-clamp-2">{image.name}</h3>
            <p class="text-xs text-gray-500">{image.alt.split(' - ')[0]}</p>
          </div>
        </div>
      {/each}
    </div>
    {#if searchQuery && currentImages.length === 0}
      <div class="text-center py-6 sm:py-8 mt-8">
        <p class="text-gray-600 text-sm sm:text-base">No results for "{searchQuery}". Try a different search.</p>
      </div>
    {/if}
  {/if}
</section>

<!-- Enhanced Full-Screen Modal -->
{#if selectedImage}
  <div class="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-2 sm:p-4" 
       on:click={closeModal} 
       on:keydown={handleKeydown}
       tabindex="-1">
    <div class="relative w-full max-w-6xl max-h-full flex flex-col items-center justify-center" on:click|stopPropagation on:dblclick={toggleZoom}>
      <!-- Navigation Arrows (Larger on Mobile for Touch) -->
      <button on:click={prevImage} class="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 sm:p-3 rounded-full transition-all duration-300 z-10 text-2xl sm:text-xl" aria-label="Previous image">
        ‹
      </button>
      <button on:click={nextImage} class="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 sm:p-3 rounded-full transition-all duration-300 z-10 text-2xl sm:text-xl" aria-label="Next image">
        ›
      </button>

      <!-- Close Button (Larger on Mobile) -->
      <button on:click={closeModal} 
              class="absolute top-2 sm:top-4 right-2 sm:right-4 text-white text-2xl sm:text-3xl hover:text-gray-300 z-10 bg-black/50 rounded-full w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center transition-all duration-300">
        &times;
      </button>

      <!-- Image -->
      <img src={selectedImage.src} 
           alt={selectedImage.alt} 
           class="modal-img w-full h-auto max-h-[80vh] sm:max-h-[95vh] max-w-[95vw] object-contain rounded-lg transition-transform duration-300"
           style="transform: scale(1);" />

      <!-- Caption (Responsive Positioning and Sizing) -->
      <div class="absolute bottom-20 sm:bottom-32 left-2 sm:left-4 right-2 sm:right-4 text-center text-white bg-black/30 rounded-lg p-3 sm:p-4 backdrop-blur-sm max-w-full">
        <h3 class="font-serif text-xl sm:text-2xl font-bold">{selectedImage.name}</h3>
        <p class="text-xs sm:text-sm opacity-90 mt-1 line-clamp-2">{selectedImage.alt}</p>
        <p class="text-xs opacity-75 mt-2 hidden sm:block">Use arrows or swipe to navigate • Double-click to zoom</p>
      </div>

      <!-- Big Bold "Inquire over WhatsApp" Button at Bottom Center (Responsive) -->
      <button on:click={shareToWhatsApp} 
              class="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 bg-green-600 hover:bg-green-700 text-white font-bold text-sm sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-2xl transition-all duration-300 z-10 flex items-center gap-2 w-full sm:w-auto max-w-xs sm:max-w-none"
              aria-label="Inquire about this image over WhatsApp">
        <span class="text-lg sm:text-xl">💬</span>
        Inquire over WhatsApp
      </button>
    </div>
  </div>
{/if}

<!-- Back to Top Button (Hidden on Very Small Mobile, Shown on Larger) -->
{#if showBackToTop}
  <button 
    on:click={scrollToTop} 
    class="fixed bottom-4 sm:bottom-10 right-24 sm:right-26 bg-gray-100 hover:bg-opacity-90 text-black p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 z-40 hidden sm:flex flex-col items-center justify-center space-y-1"
    aria-label="Back to top"
  >
    <!-- Up Arrow Icon -->
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" class="w-5 h-5">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>

    <!-- Text Below -->
    <span class="text-xs font-medium">Back to top</span>
  </button>
{/if}

<style>
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fadeIn 0.6s ease-out;
  }
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  /* Mobile swipe support (basic) */
  .modal-img {
    touch-action: pinch-zoom;
  }
  /* Ensure no horizontal scroll on mobile modal */
  @media (max-width: 640px) {
    .modal-img {
      max-width: 100vw;
      margin: 0 -4px; /* Compensate for padding */
    }
  }
  /* Pinterest Masonry Enhancements */
  .columns-1 > * {
    break-inside: avoid;
  }
  .columns-2 > * {
    break-inside: avoid;
  }
  .columns-3 > * {
    break-inside: avoid;
  }
  .columns-4 > * {
    break-inside: avoid;
  }
</style>
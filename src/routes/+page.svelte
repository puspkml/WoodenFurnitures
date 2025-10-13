<script>
  import { onMount } from 'svelte';
  
  let showBackToTop = false; // Controls visibility

  // Combined onMount for animations and scroll listener
  onMount(() => {
    // Fade-in animation for elements
    const elements = document.querySelectorAll('.animate-fade-in');
    elements.forEach((el, index) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      setTimeout(() => {
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, index * 200);
    });

    // Scroll listener for Back to Top
    const handleScroll = () => {
      showBackToTop = window.scrollY > 300;
    };
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function scrollToSections() {
    document.getElementById('why-choose-us').scrollIntoView({ behavior: 'smooth' });
  }
</script>
<svelte:head>
  <!-- Primary Meta Tags -->
  <title>Puspa Kamal Wooden Furnitures | Handcrafted in Darjeeling & Mirik</title>
  <meta name="description" content="Handcrafted wooden furniture by Puspa Kamal Wooden Furnitures, founded by Suraj Rai and Sarada Puri Rai, in Darjeeling & Mirik. Custom designs, solid wood tables, chairs, cabinets, with delivery to Siliguri and nearby regions." />

  <meta property="og:description" content="Custom handcrafted wooden furniture by Suraj Rai and Sarada Puri Rai at Puspa Kamal Wooden Furnitures. Delivery to Darjeeling, Mirik, Siliguri." />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <meta name="theme-color" content="#8B4513" />

  <!-- Open Graph / Social Sharing -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Puspa Kamal Wooden Furnitures | Handcrafted in Darjeeling & Mirik" />
  <meta property="og:description" content="Custom handcrafted wooden furniture, solid wood tables, chairs, and cabinets. Delivery available to Siliguri, Darjeeling, and surrounding areas." />
  <meta property="og:image" content="https://pkwoodenfurnitures.netlify.app/cover.png" />
  <meta property="og:url" content="https://pkwoodenfurnitures.netlify.app" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Puspa Kamal Wooden Furnitures | Handcrafted in Darjeeling & Mirik" />
  <meta name="twitter:description" content="Custom handcrafted wooden furniture, solid wood tables, chairs, and cabinets. Delivery available to Siliguri, Darjeeling, and surrounding areas." />
  <meta name="twitter:image" content="https://pkwoodenfurnitures.netlify.app/cover.png" />

  <!-- Google Fonts / Beautiful Calligraphic Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Great+Vibes:wght@400&family=Dancing+Script:wght@400;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet">

  <!-- Structured Data for Local SEO -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FurnitureStore",
    "name": "Puspa Kamal Wooden Furnitures",
    "image": "https://pkwoodenfurnitures.netlify.app/cover.png",
    "url": "https://pkwoodenfurnitures.netlify.app",
    "telephone": "+91-8145838655",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street, Mirik",
      "addressLocality": "Mirik",
      "addressRegion": "Darjeeling",
      "postalCode": "734214",
      "addressCountry": "IN"
    },
    "founder": [
      {
        "@type": "Person",
        "name": "Suraj Rai"
      },
      {
        "@type": "Person",
        "name": "Sarada Puri Rai"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/share/p/1A9c3wQtiD/"
    ]
  }
  </script>
</svelte:head>


<style>
  /* Custom fade-in for subtle animations */
  .animate-fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  /* Hero section optimizations */
  .hero-section {
    will-change: transform;
    background-attachment: fixed;
  }

  /* Mobile fallback for fixed backgrounds */
  @media (max-width: 640px) {
    .hero-section {
      background-attachment: scroll !important;
    }
  }

  /* Hover effect for Discover More arrow */
  .discover-more:hover .arrow {
    opacity: 1;
    transform: translateY(2px);
  }

  .arrow {
    opacity: 0.7;
    transition: all 0.3s ease;
  }

  /* Catalog overlay for readability */
  .catalog-overlay {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
  }

  /* Subtle shadows and borders for professionalism */
  .section-card {
    background: white;
    border-radius: 1rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    border: 1px solid #f3f4f6;
  }

  /* Artistic Font Families */
  .font-calligraphic-hero {
    font-family: 'Great Vibes', cursive;
  }

  .font-script-heading {
    font-family: 'Dancing Script', cursive;
  }

  .font-playfair {
    font-family: 'Playfair Display', serif;
  }

  .font-merriweather {
    font-family: 'Merriweather', serif;
  }

  @keyframes bounce-slow {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(6px);
    }
  }

  .animate-bounce-slow {
    animation: bounce-slow 1.8s infinite ease-in-out;
  }
</style>
<!-- Hero Section -->
<section 
  class="hero-section relative w-full min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-fixed"
  style="background-image: url('/front.jpg');"
>
  <!-- Gradient Overlay -->
  <div class="absolute inset-0 bg-black/60 from-black/70 via-black/50 to-black/80 backdrop-blur-[0px]"></div>

  <div class="relative text-center text-white px-4 sm:px-6 md:px-12 z-10 w-full max-w-7xl mx-auto">
    <div class="animate-fade-in flex flex-col items-center justify-center space-y-8 sm:space-y-10 md:space-y-12">

      <!-- Google Fonts -->
      <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Alex+Brush&family=Allura&family=Playfair+Display:ital,wght@1,500&family=Merriweather:ital,wght@1,400&display=swap" rel="stylesheet">

      <!-- Elegant Main Title -->
          <h1
        class="text-center align-centre font-normal italic tracking-wide text-transparent bg-clip-text bg-white from-white via-amber-100 to-yellow-50 drop-shadow-[0_5px_8px_rgba(0,0,0,0.4)] leading-tight whitespace-normal sm:whitespace-nowrap"
        style="
          font-family: 'Great Vibes', 'Alex Brush', 'Allura', cursive;
          font-size: clamp(3.9rem, 7vw, 7rem);
          line-height: 1.5;
          padding-top: 0.5rem;
        "
      >
        Puspa Kamal Wooden Furnitures
      </h1>
      <div class="w-24 sm:w-36 md:w-48 h-1 bg-white mx-auto rounded-full mt-2"></div>


      <!-- Tagline -->


      <!-- Supporting Line -->
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&display=swap" rel="stylesheet">

        <p 
          class="opacity-90 text-gray-100 mx-auto leading-relaxed italic"
          style="
            font-family: 'Playfair Display', serif;
            font-size: clamp(1rem, 2.5vw, 1.25rem);
            max-width: 45rem;
          "
        >
          Handcrafted to transform your living space into a sanctuary of warmth, style, and comfort.
        </p>
      <div class="w-24 sm:w-36 md:w-48 h-1 bg-white mx-auto rounded-full mt-2"></div>


      <!-- Buttons Section -->
      <div class="flex flex-col items-center justify-center gap-6 mt-8 sm:mt-10 w-full">
        <a 
          href="/contact"
          class="inline-flex items-center justify-center w-[80%] sm:w-auto bg-gray-700 from-amber-500 via-amber-400 to-amber-500 text-white font-playfair  text-xl sm:text-2xl px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-[0_8px_16px_rgba(0,0,0,0.3)] hover:scale-105 focus:outline-none focus:ring-4 focus:ring-amber-500/30"
          aria-label="Learn more about our custom furniture"
        >
          Place your Order Now!!!
        </a>

        <!-- Discover More Button -->
        <button 
            on:click={scrollToSections}
            class="flex flex-col items-center mx-auto text-gray-900 font-merriweather text-white text-base sm:text-lg transition-all duration-300 hover:text-amber-200 focus:outline-none group"
            role="button"
            aria-label="Scroll to discover more"
          >
            <span class="font-medium italic group-hover:tracking-wide transition-all duration-300">
              Discover Our Craftsmanship
            </span>

            <!-- Arrow -->
            <svg 
              class="arrow w-12 h-12 mt-3 text-black animate-bounce-slow group-hover:scale-110 transition-transform duration-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 9l7 7 7-7" />
            </svg>
          </button>
      </div>
    </div>
  </div>
</section>


<!-- Why Choose Us Section -->
<section class="py-16 sm:py-20 px-4 max-w-7xl mx-auto" id="why-choose-us">
    <div class="text-center lg:text-left space-y-6 animate-fade-in">

      <div>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">Why Choose Us?</h2>
        <div class="w-16 h-1 bg-[#8B4513] mx-auto lg:mx-0 rounded-full"></div> <!-- Subtle accent line -->
      </div>
      </div>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
    <!-- Image Side -->
    <div class="relative">
      <div class="section-border p-3 lg:p-6">
        <img 
          src="/dad.png" 
          alt="Skilled artisan handcrafting premium wooden furniture at Puspa Kamal workshop"
          class="w-100 h-auto object-contain rounded-xl hover:scale-105 transition-transform duration-500 max-h-[80vh]"
          loading="lazy" />
      </div>
    </div>

    <!-- Text Side -->
    <div class="text-center lg:text-left space-y-6 animate-fade-in">
      
      <p class="text-lg sm:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
        At Puspa Kamal Wooden Furnitures, every piece is meticulously crafted with precision, care, and a deep respect for traditional woodworking techniques. 
        We blend time-honored artistry with modern innovation to deliver furniture that is not only visually stunning but engineered for enduring strength and durability. 
        Suraj Rai, the owner, selects only the finest premium woods, employing advanced finishing and polishing methods to achieve a flawless, luxurious finish. 
        Each creation embodies the warmth of heritage while meeting contemporary standards—offering pieces that stand the test of time and elevate any space with refined elegance.
      </p>
    </div>
  </div>
</section>


<!-- Catalog Section -->
<section class="relative py-16 sm:py-20 px-4 max-w-7xl mx-auto bg-gray-50" id="catalog" 
         style="background-image: url('/Catalog.jpeg'); background-size: cover; background-position: center;">
  <div class="absolute inset-0 bg-gradient-to-r from-gray-900/20 via-gray-900/10 to-gray-900/20"></div> <!-- Subtle overlay for readability -->
  <div class="relative text-center z-10">
    <div class="catalog-overlay max-w-4xl mx-auto p-8 sm:p-12 rounded-2xl shadow-2xl animate-fade-in">
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">Custom Catalog Creations</h2>
      <p class="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed mb-8">
        Bring your vision to life—whatever catalog or design you provide, our expert artisans will craft it with unparalleled precision using premium woods and meticulous detailing. 
        Explore our sample collections below to inspire your next custom project.
      </p>
      <a href="/catalog" 
         class="bg-[#8B4513] hover:bg-[#A0522D] text-white font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#8B4513]/20 min-h-[48px] inline-flex items-center justify-center max-w-md mx-auto"
         role="button"
         aria-label="Explore our sample furniture catalog">
        Explore Sample Catalog
      </a>
    </div>
  </div>
</section>

<!-- Google Maps Location Section -->
<section class="py-16 sm:py-20 px-4 max-w-7xl mx-auto bg-white" id="location">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
    <!-- Text/Details Side -->
    <div class="space-y-6 animate-fade-in">
      <div>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">Visit Our Workshop</h2>
        <div class="w-16 h-1 bg-[#8B4513] rounded-full"></div>
      </div>
      <p class="text-lg sm:text-xl text-gray-600 max-w-lg leading-relaxed">
        Nestled in the serene heart of Mirik, Puspa Kamal Wooden Furnitures welcomes you to our state-of-the-art workshop and showroom. 
        Witness the artistry firsthand, consult with our designers, and explore sustainable materials. Directions and details below.
      </p>
      <div class="section-card p-6">
        <p class="text-base text-gray-700 flex items-center justify-center lg:justify-start">
          <span class="text-2xl mr-3">📍</span>
          9th Mile, Thurbo, Mirik, Darjeeling-734214, West Bengal, India.
        </p>
        <p class="text-sm text-gray-500 mt-2 flex items-center justify-center lg:justify-start">
          <span class="text-xl mr-2">🕒</span>
          Open: Monday - Saturday, 7:00 AM - 6:00 PM
        </p>
      </div>
    </div>

    <!-- Map Side -->
    <div class="relative animate-fade-in">
      <div class="section-card overflow-hidden rounded-2xl">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.942983627069!2d88.15883992623797!3d26.905941841812304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e5cd000b31eba3%3A0x3deeef06f2ec6bc7!2sPuspa%20Kamal%20Wooden%20Furnitures!5e0!3m2!1sen!2sin!4v1760003808207!5m2!1sen!2sin" 
          width="100%" 
          height="450" 
          style="border:0; border-radius: 0;" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
          title="Puspa Kamal Wooden Furnitures Location on Google Maps">
        </iframe>
      </div>
    </div>
  </div>
</section>

<!-- Back to Top Button -->
{#if showBackToTop}
  <button 
    on:click={scrollToTop} 
    class="fixed bottom-6 left-6 bg-[#8B4513] hover:bg-[#A0522D] text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50 hidden sm:block hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#8B4513]/20"
    role="button"
    aria-label="Scroll to top of page">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  </button>
{/if}
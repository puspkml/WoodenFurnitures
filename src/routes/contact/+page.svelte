<script>
  import { Phone, MessageCircle } from 'lucide-svelte';

  // Your phone number with country code (e.g., +919876543210)
  const phoneNumber = '+919091329255';

  // WhatsApp API URL to send message
  const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}`;
</script>

<section class="max-w-md mx-auto p-6 bg-white rounded shadow-md mt-10">
  <h2 class="text-2xl font-bold mb-4 text-center">Contact Us</h2>
  
  <p class="mb-4 text-center">
    You can reach us by calling or sending a WhatsApp message.
  </p>
  
  <div class="flex justify-around space-x-6">
    <a href={`tel:${phoneNumber}`} class="flex items-center space-x-2 text-green-700 hover:text-green-900 transition-colors" aria-label="Call us">
      <Phone size="24" />
      <span class="text-lg">Call Us</span>
    </a>

    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 text-green-500 hover:text-green-700 transition-colors" aria-label="Chat on WhatsApp">
      <MessageCircle size="24" />
      <span class="text-lg">WhatsApp</span>
    </a>
  </div>
</section>

<script>
    // No script needed for static about page
</script>

<svelte:head>
    <title>Puspa Kamal Wooden Furniture</title>
    <meta
        name="description"
        content="Learn about Puspa Kamal Wooden Furniture, established in 2009, dedicated to crafting high-quality, handcrafted wooden furniture made to order with exceptional craftsmanship and customer satisfaction."
    />
</svelte:head>

<style>
    .about-container {
        max-width: 900px;
        margin: 2rem auto;
        padding: 2.5rem;
        background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        border-radius: 16px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
        text-align: center;
        border: 1px solid rgba(52, 152, 219, 0.1);
        position: relative;
        overflow: hidden;
        transition: all 0.3s ease;
    }

    .about-container::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, #3498db, #2c3e50, #3498db);
    }

    .logo {
        width: 120px;
        height: auto;
        margin-bottom: 1.5rem;
        filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
        transition: transform 0.3s ease;
    }

    .logo:hover {
        transform: scale(1.05);
    }

    h1 {
        color: #2c3e50;
        margin-bottom: 1rem;
        font-size: clamp(1.8rem, 5vw, 3rem);
        font-weight: 700;
        letter-spacing: 0.5px;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        line-height: 1.2;
    }

    p {
        color: #34495e;
        line-height: 1.8;
        margin-bottom: 1.25rem;
        font-size: clamp(1rem, 2.5vw, 1.1rem);
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
        text-align: justify;
    }

    .highlight {
        color: #3498db;
        font-weight: 600;
    }

    @media (max-width: 768px) {
        .about-container {
            margin: 1rem;
            padding: 2rem;
        }
        .logo {
            width: 100px;
            margin-bottom: 1rem;
        }
    }

    @media (max-width: 480px) {
        .about-container {
            margin: 1rem;
            padding: 1.5rem;
            border-radius: 12px;
        }

        p {
            line-height: 1.7;
            font-size: 0.95rem;
        }
    }
</style>

<div class="about-container">
    <img src="/logo.png" alt="Puspa Kamal Wooden Furniture Logo" class="logo" />
    <h1>Puspa Kamal Wooden Furniture</h1>
    <p>
        Established in <span class="highlight">2009</span>, Puspa Kamal Wooden Furniture is dedicated to crafting high-quality, handcrafted wooden pieces that infuse warmth, elegance, and timeless style into your home or office. Our artisans blend traditional techniques with modern design to produce distinctive, enduring furniture.
    </p>
    <p>
        Every item is meticulously <span class="highlight">made to order</span>, allowing us to customize each creation to your exact specifications. We source only the finest sustainable materials, ensuring beauty, durability, and environmental responsibility. From bespoke tables to artisanal decor, we deliver exceptional craftsmanship and satisfaction.
    </p>
    <p>
        Experience the seamless fusion of artistry and functionality in our curated collection of wooden furniture, designed to elevate your space and reflect your unique vision.
    </p>
    <p class="highlight">
        Puspa Kamal Wooden Furniture  
                </p>
     
        <p> Owner & Founders : <strong> Suraj Rai, Sarada Puri Rai.</strong></p>
</div>

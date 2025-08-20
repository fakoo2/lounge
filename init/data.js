const convertedData = [
  {
    title: "Modern Flat — Guwahati, Assam",
    description:
      "Contemporary 1 BHK flat with open-plan living and kitchen space, high-speed Wi‑Fi, and small balcony.",
    image: {
      filename: "modern_flat",
      url: "https://unsplash.com/photos/modern-apartment-interior-with-kitchen-and-living-space-xrnNNnq6djg",
    },
    price: 2200,
    location: "Guwahati, Assam",
    country: "India",
  },
  {
    title: "Stylish Mumbai Apartment",
    description:
      "Bright living room with modern decor and city vibe—ideal for young professionals.",
    image: {
      filename: "mumbai_apartment",
      url: "https://unsplash.com/photos/6iEbq9Ne7b4",
    },
    price: 4500,
    location: "Mumbai, Maharashtra",
    country: "India",
  },
  {
    title: "Minimalist Bengaluru Loft",
    description:
      "Open-plan loft with minimalist furniture, perfect for remote workers or couples.",
    image: {
      filename: "bengaluru_loft",
      url: "https://unsplash.com/photos/O5vTm9U6IaA",
    },
    price: 3200,
    location: "Bengaluru, Karnataka",
    country: "India",
  },
  {
    title: "Hyderabad Contemporary Flat",
    description:
      "Clean-lined interior with workspace and cozy seating—designed for modern living.",
    image: {
      filename: "hyderabad_flat",
      url: "https://unsplash.com/photos/1-Ss58K4D28",
    },
    price: 2800,
    location: "Hyderabad, Telangana",
    country: "India",
  },
  {
    title: "Chennai Warm Apartment",
    description:
      "Naturally lit apartment with warm tones and comfortable furnishings.",
    image: {
      filename: "chennai_apartment",
      url: "https://unsplash.com/photos/7S2OLbdszeA",
    },
    price: 2500,
    location: "Chennai, Tamil Nadu",
    country: "India",
  },
  {
    title: "Elegant Bengaluru Home",
    description:
      "A neo‑traditional Bengaluru apartment with refined craftsmanship.",
    image: {
      filename: "bengaluru_neo_traditional",
      url: "https://unsplash.com/photos/a‑living‑room‑with‑a‑flat‑screen‑tv‑mounted‑on‑a‑wall‑mJk3xEjXnBU",
    },
    price: 3500,
    location: "Bengaluru, Karnataka",
    country: "India",
  },
  {
    title: "Kolkata Building Interior",
    description:
      "Charming apartment lobby/living space in Kolkata with colonial architecture.",
    image: {
      filename: "kolkata_interior",
      url: "https://unsplash.com/photos/wNu1n3w3ZuE",
    },
    price: 2000,
    location: "Kolkata, West Bengal",
    country: "India",
  },
  {
    title: "Cozy Flat — Pune",
    description:
      "Minimalist, wabi‑sabi inspired home with organic shapes and warm tones.",
    image: {
      filename: "pune_wabisabi",
      url: "https://unsplash.com/photos/modern-apartment-interior-with-kitchen-and-living-space-xrnNNnq6djg", // reuse as proxy
    },
    price: 3300,
    location: "Pune, Maharashtra",
    country: "India",
  },
  {
    title: "Gurugram Coastal-Themed Apartment",
    description:
      "Airy, beach-themed decor home reminiscent of Goa’s coastal charm.",
    image: {
      filename: "gurugram_coastal",
      url: "https://unsplash.com/photos/6iEbq9Ne7b4", // reuse as proxy
    },
    price: 5000,
    location: "Gurugram, Haryana",
    country: "India",
  },
  {
    title: "Japandi Bengaluru Home",
    description:
      "Mid-century meets Japandi style apartment—serene and low-maintenance.",
    image: {
      filename: "bengaluru_japandi",
      url: "https://unsplash.com/photos/1-Ss58K4D28", // reuse as proxy
    },
    price: 4800,
    location: "Bengaluru, Karnataka",
    country: "India",
  },
  // Entries 11–25: city-based, diverse interiors (reuse available images as placeholders)
  {
    title: "Lucknow Heritage Flat",
    description: "Blend of traditional and modern styles in Lucknow setting.",
    image: {
      filename: "lucknow_flat",
      url: "https://unsplash.com/photos/7S2OLbdszeA",
    },
    price: 2600,
    location: "Lucknow, Uttar Pradesh",
    country: "India",
  },
  {
    title: "Pune Urban Studio",
    description: "Compact, stylish studio apartment with efficient layout.",
    image: {
      filename: "pune_studio",
      url: "https://unsplash.com/photos/modern-apartment-interior-with-kitchen-and-living-space-xrnNNnq6djg",
    },
    price: 2400,
    location: "Pune, Maharashtra",
    country: "India",
  },
  {
    title: "Ahmedabad Vintage Flat",
    description: "Characterful flat with vintage accents in central Ahmedabad.",
    image: {
      filename: "ahmedabad_flat",
      url: "https://unsplash.com/photos/wNu1n3w3ZuE",
    },
    price: 2300,
    location: "Ahmedabad, Gujarat",
    country: "India",
  },
  {
    title: "Chandigarh Modern Home",
    description: "Sleek minimalist living room in bustling Chandigarh.",
    image: {
      filename: "chandigarh_flat",
      url: "https://unsplash.com/photos/6iEbq9Ne7b4",
    },
    price: 2700,
    location: "Chandigarh, India",
    country: "India",
  },
  {
    title: "Jaipur Artful Apartment",
    description: "Bright interior with local art details and warm tones.",
    image: {
      filename: "jaipur_flat",
      url: "https://unsplash.com/photos/7S2OLbdszeA",
    },
    price: 2200,
    location: "Jaipur, Rajasthan",
    country: "India",
  },
  {
    title: "Goa Urban Loft",
    description: "Minimal loft with abundant light, coastal vibes in Goa city.",
    image: {
      filename: "goa_loft",
      url: "https://unsplash.com/photos/O5vTm9U6IaA",
    },
    price: 3800,
    location: "Panaji, Goa",
    country: "India",
  },
  {
    title: "Kochi Contemporary Flat",
    description: "Contemporary interior with earthy textures and sunlight.",
    image: {
      filename: "kochi_flat",
      url: "https://unsplash.com/photos/modern-apartment-interior-with-kitchen-and-living-space-xrnNNnq6djg",
    },
    price: 2100,
    location: "Kochi, Kerala",
    country: "India",
  },
  {
    title: "Noida Smart Apartment",
    description: "Tech-friendly modern flat, ideal for business travelers.",
    image: {
      filename: "noida_flat",
      url: "https://unsplash.com/photos/1-Ss58K4D28",
    },
    price: 2900,
    location: "Noida, Uttar Pradesh",
    country: "India",
  },
  {
    title: "Guwahati Bright Studio",
    description: "Cozy studio with large windows and city views in Guwahati.",
    image: {
      filename: "guwahati_studio",
      url: "https://unsplash.com/photos/7S2OLbdszeA",
    },
    price: 2000,
    location: "Guwahati, Assam",
    country: "India",
  },
  {
    title: "Pune Urban Retreat",
    description: "Soft-toned interior with window seat and calming atmosphere.",
    image: {
      filename: "pune_retreat",
      url: "https://unsplash.com/photos/7S2OLbdszeA",
    },
    price: 3400,
    location: "Pune, Maharashtra",
    country: "India",
  },
  {
    title: "Chennai Compact Flat",
    description: "Small but functional flat with cozy interiors.",
    image: {
      filename: "chennai_compact",
      url: "https://unsplash.com/photos/O5vTm9U6IaA",
    },
    price: 2100,
    location: "Chennai, Tamil Nadu",
    country: "India",
  },
  {
    title: "Hyderabad Trendy Loft",
    description: "Loft-style flat with modern furnishings and smart amenities.",
    image: {
      filename: "hyderabad_loft",
      url: "https://unsplash.com/photos/1-Ss58K4D28",
    },
    price: 3000,
    location: "Hyderabad, Telangana",
    country: "India",
  },
  {
    title: "Mumbai Urban Nest",
    description: "Compact city flat with elegant decor and smart layout.",
    image: {
      filename: "mumbai_nest",
      url: "https://unsplash.com/photos/6iEbq9Ne7b4",
    },
    price: 4700,
    location: "Mumbai, Maharashtra",
    country: "India",
  },
];
module.exports = { data: convertedData };

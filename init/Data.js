const sampleListings = [
    {
        title: "Cozy Studio Apartment",
        description: "A cozy studio apartment located in the heart of downtown. Perfect for singles or couples.",
        image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 800,
        location: "Downtown",
        country: "USA"
    },
    {
        title: "Spacious Two-Bedroom Condo",
        description: "A spacious two-bedroom condo with modern amenities and a beautiful view.",
        image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D",
        price: 1500,
        location: "City Center",
        country: "USA"
    },
    {
        title: "Luxury Beachfront Villa",
        description: "A luxurious villa with a private beach and stunning ocean views. Ideal for vacations.",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 4500,
        location: "Beachside",
        country: "Australia"
    },
    {
        title: "Modern Loft in Trendy Area",
        description: "A modern loft with high ceilings, an open floor plan, and close to trendy shops and cafes.",
        image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 2000,
        location: "Downtown",
        country: "UK"
    },
    {
        title: "Charming Country Cottage",
        description: "A charming cottage in the countryside, perfect for a peaceful retreat.",
        image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 1200,
        location: "Countryside",
        country: "Canada"
    },
    {
        title: "Family-Friendly Suburban Home",
        description: "A spacious home in a family-friendly neighborhood with a large backyard.",
        image: "https://plus.unsplash.com/premium_photo-1676321688612-4451a8721435?q=80&w=2007&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 1800,
        location: "Suburbs",
        country: "USA"
    },
    {
        title: "Affordable Studio Near University",
        description: "An affordable studio apartment near the university, ideal for students.",
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 600,
        location: "Near University",
        country: "USA"
    },
    {
        title: "Penthouse with City View",
        description: "A luxurious penthouse with a panoramic view of the city skyline.",
        image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 5000,
        location: "City Center",
        country: "UK"
    },
    {
        title: "Rustic Cabin in the Mountains",
        description: "A rustic cabin located in the mountains, perfect for nature lovers.",
        image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 1000,
        location: "Mountains",
        country: "Canada"
    },
    {
        title: "Urban Apartment with Balcony",
        description: "An urban apartment with a spacious balcony and modern amenities.",
        image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 1300,
        location: "City Center",
        country: "Australia"
    }
];
module.exports = {data: sampleListings};
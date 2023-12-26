// Interface for MenuItem type
export interface MenuItem {
    name: string;
    price: number;
    veg: boolean;
    category: string;
    description?: string;
    image: string;
    quantity: number;
}

export const menuItems: MenuItem[] = [
    {
        name: "Paneer Tikka Masala",
        price: 240,
        veg: true,
        category: "Main Course",
        description: "Creamy tomato gravy with chunks of paneer.",
        image: "public/images/tikka.jpg",
        quantity: 0

    },
    {
        name: "Chicken Tikka Masala",
        price: 280,
        veg: false,
        category: "Main Course",
        description: "Marinated chicken cooked in a rich tomato and spice gravy.",
        image: "public/images/tikka.jpg",
        quantity: 0

    },
    {
        name: "Butter Naan",
        price: 60,
        veg: true,
        category: "Bread",
        description: "Soft bread baked in tandoor with butter.",
        image: "public/images/tikka.jpg",
        quantity: 0

    },
    {
        name: "Gobi Manchurian",
        price: 180,
        veg: true,
        category: "Starters",
        description: "Crispy cauliflower florets tossed in a sweet and spicy sauce.",
        image: "public/images/tikka.jpg",
        quantity: 0

    },
    {
        name: "Samosa Chat",
        price: 120,
        veg: true,
        category: "Starters",
        description: "Crispy fried samosas topped with chickpeas, yogurt, and chutneys.",
        image: "public/images/tikka.jpg",
        quantity: 0

    },
    {
        name: "Egg Biryani",
        price: 220,
        veg: false,
        category: "Main Course",
        description: "Layered rice dish with eggs, spices, and herbs.",
        image: "public/images/tikka.jpg",
        quantity: 0

    },
    {
        name: "Hyderabadi Biryani",
        price: 260,
        veg: false,
        category: "Main Course",
        description: "Fragrant rice dish with meat, spices, and saffron.",
        image: "public/images/tikka.jpg",
        quantity: 0

    },
    {
        name: "Masala Dosa",
        price: 160,
        veg: true,
        category: "Main Course",
        description: "Crispy crepe filled with potato masala and served with chutneys.",
        image: "public/images/tikka.jpg",
        quantity: 0

    },
    {
        name: "Chicken Tikka Salad",
        price: 200,
        veg: false,
        category: "Salads",
        description: "Grilled chicken tikka with fresh vegetables and a yogurt dressing.",
        image: "public/images/tikka.jpg",
        quantity: 0

    },
    {
        name: "Raita",
        price: 60,
        veg: true,
        category: "Sides",
        description: "Yogurt-based condiment with cucumber, radish, and herbs.",
        image: "public/images/tikka.jpg",
        quantity: 0

    },
    {
        name: "Palak Paneer",
        price: 220,
        veg: true,
        category: "Main Course",
        description: "Spinach gravy with paneer cubes and spices.",
        image: "public/images/tikka.jpg",
        quantity: 0

    },
    {
        name: "Gulab Jamun",
        price: 80,
        veg: true,
        category: "Desserts",
        description: "Soft, sweet dumplings soaked in rosewater syrup.",
        image: "public/images/tikka.jpg",
        quantity: 0

    },
    {
        name: "Rasmalai",
        price: 100,
        veg: true,
        category: "Desserts",
        description: "Sweet cheese dumplings in creamy, milky sauce.",
        image: "public/images/tikka.jpg",
        quantity: 0

    },
    {
        name: "Mango Lassi",
        price: 120,
        veg: true,
        category: "Drinks",
        description: "Yogurt-based drink with mango pulp and spices.",
        image: "public/images/tikka.jpg",
        quantity: 0

    },
    {
        name: "Masala Chai",
        price: 80,
        veg: true,
        category: "Drinks",
        description: "Spiced tea with milk and sugar.",
        image: "public/images/tikka.jpg",
        quantity: 0

    },
];



const db = require("./app/models"); 
const products = [
  // Beds
  {
    product_name: "Classic Bed",
    description: "A comfortable and stylish wooden bed for your home.",
    img: "../imgs/product_images/bed1_product.avif",
    quantity_available: 10,
    price: 200,
    quantity_cart: 0,
    category: "Beds",
    ratings: [5, 4, 5],
  },
  {
    product_name: "Modern Bed",
    description: "A sleek, modern design bed.",
    img: "../imgs/product_images/bed2_product.avif",
    quantity_available: 5,
    price: 300,
    quantity_cart: 0,
    category: "Beds",
    ratings: [4, 3],
  },

  // Furniture
  {
    product_name: "Modern Couch",
    description: "A stylish Couch for your home or workspace.",
    img: "../imgs/product_images/Furniture1_product.avif",
    quantity_available: 15,
    price: 50,
    quantity_cart: 0,
    category: "Furniture",
    ratings: [4, 1],
  },
  {
    product_name: "Wooden Chair",
    description: "A durable wooden chair for your home or office.",
    img: "../imgs/product_images/Furniture2_product.avif",
    quantity_available: 7,
    price: 150,
    quantity_cart: 0,
    category: "Furniture",
    ratings: [3, 4, 2],
  },

  // Decoration
  {
    product_name: "Modern Vase",
    description: "Beautiful Vase to enhance your home decor.",
    img: "../imgs/product_images/Decoration1_product.avif",
    quantity_available: 20,
    price: 100,
    quantity_cart: 0,
    category: "Decoration",
    ratings: [3, 4, 5],
  },
  {
    product_name: "Elegant Vase",
    description: "Elegant vase for flowers and home decoration.",
    img: "../imgs/product_images/Decoration2_product.avif",
    quantity_available: 12,
    price: 70,
    quantity_cart: 0,
    category: "Decoration",
    ratings: [2, 4, 1],
  },

  // Storage
  {
    product_name: "Shelf",
    description: "A multi-purpose shelf for storage and display.",
    img: "../imgs/product_images/Storage1_product.avif",
    quantity_available: 8,
    price: 40,
    quantity_cart: 0,
    category: "Storage",
    ratings: [5, 4, 5],
  },
  {
    product_name: "Storage Box",
    description: "A large storage box to organize your belongings.",
    img: "../imgs/product_images/Storage2_product.avif",
    quantity_available: 6,
    price: 120,
    quantity_cart: 0,
    category: "Storage",
    ratings: [3, 4, 3],
  },

  // Home
  {
    product_name: "Classic Bed",
    description: "A comfortable and stylish wooden bed for your home.",
    img: "../imgs/product_images/bed1_product.avif",
    quantity_available: 10,
    price: 200,
    quantity_cart: 0,
    category: "Home",
    ratings: [5, 4, 5],
  },
  {
    product_name: "Modern Couch",
    description: "A stylish Couch for your home or workspace.",
    img: "../imgs/product_images/Furniture1_product.avif",
    quantity_available: 15,
    price: 50,
    quantity_cart: 0,
    category: "Home",
    ratings: [5, 4, 4],
  },
  {
    product_name: "Modern Vase",
    description: "Beautiful Vase to enhance your home decor.",
    img: "../imgs/product_images/Decoration1_product.avif",
    quantity_available: 20,
    price: 100,
    quantity_cart: 0,
    category: "Home",
    ratings: [5, 4, 5],
  },
  {
    product_name: "Shelf",
    description: "A multi-purpose shelf for storage and display.",
    img: "../imgs/product_images/Storage1_product.avif",
    quantity_available: 8,
    price: 40,
    quantity_cart: 0,
    category: "Home",
    ratings: [5, 4, 4],
  },
];
const seedProducts = async () => {
  try {
    // Ensure database connection
    await db.sequelize.authenticate();
    console.log("Connection to the database has been established successfully.");

    // Clear existing products
    await db.products.destroy({ where: {}, truncate: true });
    console.log("Existing products cleared from the database.");

    // Seed new products
    await db.products.bulkCreate(products);
    console.log("New products have been added to the database!");

    process.exit(0); // Exit the process successfully
  } catch (error) {
    console.error("Error seeding products:", error);
    process.exit(1); // Exit the process with an error
  }
};

seedProducts();
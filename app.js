// Universal WhatsApp Formatting Constants (100% resilient across all devices & Windows WhatsApp Web)
const U_BULLET = "\u2022";          // • (Standard bullet, universally supported)
const U_RUPEE = "\u20B9";           // ₹ (Indian Rupee symbol)
const U_MULT = "\u00D7";            // × (Multiplication symbol)
const U_DIVIDER = "------------------------------------"; // Clean ASCII divider

// REPLACE THIS WITH THE BAKERY OWNER'S WHATSAPP NUMBER (Include country code, no '+' sign)
const WHATSAPP_NUMBER = "918903132261";

// Data Source URL:
const DATA_URL = "cakes.json";

// Fallback catalog with 50 cakes across 5 categories (10 per category)
// Guarantees immediate preview even if opened via file:// protocol
const DEFAULT_CAKES = [
  {
    "id": "WC01",
    "name": "2-Tier Floral Wedding Elegance",
    "category": "Wedding Cakes",
    "price": "₹2,400 / 2kg",
    "numericPrice": 2400,
    "description": "Exquisite 2-tier vanilla sponge adorned with fresh handcrafted pastel florals.",
    "image": "images/cakes/WC01.jpg",
    "fallbackImage": "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=600&q=80",
    "available": true
  },
  {
    "id": "WC02",
    "name": "Classic Red Velvet Cream Cheese Tier",
    "category": "Wedding Cakes",
    "price": "₹1,850 / 2kg",
    "numericPrice": 1850,
    "description": "Rich crimson sponge with velvety cream cheese frosting and edible pearls.",
    "image": "images/cakes/WC02.jpg",
    "fallbackImage": "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=600&q=80",
    "available": true
  },
  {
    "id": "WC03",
    "name": "Pearl White Royal 3-Tier Cake",
    "category": "Wedding Cakes",
    "price": "₹3,800 / 3kg",
    "numericPrice": 3800,
    "description": "Grand 3-tiered imperial masterpiece with smooth buttercream and satin finish.",
    "image": "images/cakes/WC03.jpg",
    "fallbackImage": "https://images.unsplash.com/photo-1529635958611-473523f87664?auto=format&fit=crop&w=600&q=80",
    "available": true
  },
  {
    "id": "WC04",
    "name": "Rose Petal Semi-Naked Wedding Tier",
    "category": "Wedding Cakes",
    "price": "₹2,200 / 2kg",
    "numericPrice": 2200,
    "description": "Chic rustic semi-naked sponge topped with organic rose petals and berry glaze.",
    "image": "images/cakes/WC04.jpg",
    "fallbackImage": "https://res.giftalove.com/resources/common/giftimages/productimage2/CAKE19045.jpg",
    "available": true
  },
  {
    "id": "WC05",
    "name": "White Forest Grand Tier Cake",
    "category": "Wedding Cakes",
    "price": "₹2,600 / 2kg",
    "numericPrice": 2600,
    "description": "Light white chocolate curls, maraschino cherries, and fluffy whipped cream.",
    "image": "images/cakes/WC05.jpg",
    "fallbackImage": "images/cakes/WC05.jpg",
    "available": true
  },
  {
    "id": "WC06",
    "name": "Rustic Botanical Eucalyptus Tier",
    "category": "Wedding Cakes",
    "price": "₹2,500 / 2kg",
    "numericPrice": 2500,
    "description": "Earthy textured buttercream with botanical accents and gold leaf trim.",
    "image": "images/cakes/WC06.jpg",
    "fallbackImage": "images/cakes/WC06.jpg",
    "available": true
  },
  {
    "id": "WC07",
    "name": "Golden Lace Luxury Wedding Cake",
    "category": "Wedding Cakes",
    "price": "₹3,200 / 3kg",
    "numericPrice": 3200,
    "description": "Shimmering 24k edible gold leaf accents and artisanal sugar lace detailing.",
    "image": "images/cakes/WC07.jpg",
    "fallbackImage": "images/cakes/WC07.jpg",
    "available": true
  },
  {
    "id": "WC08",
    "name": "Champagne Berry Celebration Tier",
    "category": "Wedding Cakes",
    "price": "₹2,900 / 2kg",
    "numericPrice": 2900,
    "description": "Infused with non-alcoholic sparkling grape essence and fresh orchard berries.",
    "image": "images/cakes/WC08.jpg",
    "fallbackImage": "images/cakes/WC08.jpg",
    "available": true
  },
  {
    "id": "WC09",
    "name": "Lavender & Vanilla Blossom Tier",
    "category": "Wedding Cakes",
    "price": "₹2,300 / 2kg",
    "numericPrice": 2300,
    "description": "Fragrant subtle lavender undertones with Madagascar bourbon vanilla cream.",
    "image": "images/cakes/WC09.jpg",
    "fallbackImage": "https://jessicainthekitchen.com/wp-content/uploads/2020/12/Vegan-Vanilla-Cake-12.jpg",
    "available": true
  },
  {
    "id": "WC10",
    "name": "Elegant Ivory Fondant Wedding Cake",
    "category": "Wedding Cakes",
    "price": "₹3,500 / 3kg",
    "numericPrice": 3500,
    "description": "Pristine rolled fondant with sculpted sugar ribbons and piped pearls.",
    "image": "images/cakes/WC10.jpg",
    "fallbackImage": "https://preppykitchen.com/wp-content/uploads/2019/02/RED-VELVET-CAKE-FEATURE-NEW.jpg",
    "available": false
  },
  {
    "id": "KB01",
    "name": "Belgian Chocolate Truffle Birthday Cake",
    "category": "Kids' Birthday",
    "price": "₹650 / kg",
    "numericPrice": 650,
    "description": "Decadent melted Belgian chocolate ganache on moist chocolate sponge.",
    "image": "images/cakes/KB01.jpg",
    "fallbackImage": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
    "available": true
  },
  {
    "id": "KB02",
    "name": "Unicorn Theme Rainbow Cake",
    "category": "Kids' Birthday",
    "price": "₹1,100 / kg",
    "numericPrice": 1100,
    "description": "Magical pastel layers with golden unicorn horn, ears, and buttercream mane.",
    "image": "images/cakes/KB02.jpg",
    "fallbackImage": "https://images.unsplash.com/photo-1562777717-dc6984f65a63?auto=format&fit=crop&w=600&q=80",
    "available": true
  },
  {
    "id": "KB03",
    "name": "Birthday Funfetti Sprinkles Cake",
    "category": "Kids' Birthday",
    "price": "₹700 / kg",
    "numericPrice": 700,
    "description": "Loaded inside and out with colorful rainbow sprinkles and sweet vanilla frosting.",
    "image": "images/cakes/KB03.jpg",
    "fallbackImage": "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?auto=format&fit=crop&w=600&q=80",
    "available": true
  },
  {
    "id": "KB04",
    "name": "Crazy Gems Candy Land Cake",
    "category": "Kids' Birthday",
    "price": "₹800 / kg",
    "numericPrice": 800,
    "description": "Bursting with Cadbury Gems, chocolate drops, and crunchy candy surprises.",
    "image": "images/cakes/KB04.jpg",
    "fallbackImage": "https://www.biggerbolderbaking.com/wp-content/uploads/2017/09/1C5A1025.jpg",
    "available": true
  },
  {
    "id": "KB05",
    "name": "Strawberry Surprise Birthday Cake",
    "category": "Kids' Birthday",
    "price": "₹750 / kg",
    "numericPrice": 750,
    "description": "Sweet strawberry compote filling layered between fluffy pink vanilla sponge.",
    "image": "images/cakes/KB05.jpg",
    "fallbackImage": "https://www.giverecipe.com/wp-content/uploads/2016/05/strawberry-chocolate-cake-1.jpg",
    "available": true
  },
  {
    "id": "KB06",
    "name": "Chocolate KitKat & M&M Birthday Cake",
    "category": "Kids' Birthday",
    "price": "₹950 / kg",
    "numericPrice": 950,
    "description": "Surrounded by crunchy KitKat bars and topped with an avalanche of M&Ms.",
    "image": "images/cakes/KB06.jpg",
    "fallbackImage": "https://cdn.shopify.com/s/files/1/1060/3816/products/fantasy-chocolate-truffle-cake_900x.jpg?v=1594974395",
    "available": true
  },
  {
    "id": "KB07",
    "name": "Rainbow Swirl Birthday Roll Cake",
    "category": "Kids' Birthday",
    "price": "₹600 / pc",
    "numericPrice": 600,
    "description": "Vibrant rainbow spiraled Swiss roll filled with whipped vanilla marshmallow cream.",
    "image": "images/cakes/KB07.jpg",
    "fallbackImage": "https://theflavorbender.com/wp-content/uploads/2020/10/Vanilla-Swiss-Roll-2929-2.jpg",
    "available": true
  },
  {
    "id": "KB08",
    "name": "Butterscotch Crunch Birthday Delight",
    "category": "Kids' Birthday",
    "price": "₹680 / kg",
    "numericPrice": 680,
    "description": "Caramelized praline crunch, butterscotch drizzle, and velvety golden cream.",
    "image": "images/cakes/KB08.jpg",
    "fallbackImage": "https://cdn.igp.com/f_auto,q_auto,t_prodm/products/p-classic-butterscotch-cake-half-kg--109215-m.jpg",
    "available": true
  },
  {
    "id": "KB09",
    "name": "Choco Berry Wonder Birthday Cake",
    "category": "Kids' Birthday",
    "price": "₹850 / kg",
    "numericPrice": 850,
    "description": "Rich dark cocoa base crowned with fresh strawberries and chocolate shards.",
    "image": "images/cakes/KB09.jpg",
    "fallbackImage": "https://data.thefeedfeed.com/static/2020/08/27/15930489305ef3ff62f0e25.jpg",
    "available": true
  },
  {
    "id": "KB10",
    "name": "Black Currant Magic Birthday Cake",
    "category": "Kids' Birthday",
    "price": "₹720 / kg",
    "numericPrice": 720,
    "description": "Sweet and tangy black currant compote with whipped purple vanilla frosting.",
    "image": "images/cakes/KB10.jpg",
    "fallbackImage": "https://assets.winni.in/c_limit,dpr_2,fl_progressive,q_80,w_400/33659_black-currant-cake.jpeg",
    "available": true
  },
  {
    "id": "EG01",
    "name": "Eggless Rasmalai Fusion Cake",
    "category": "Eggless",
    "price": "₹900 / kg",
    "numericPrice": 900,
    "description": "Royal Indian fusion: soaked in saffron cardamom milk, real rasmalai & pistachios.",
    "image": "images/cakes/EG01.jpg",
    "fallbackImage": "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=600&q=80",
    "available": true
  },
  {
    "id": "EG02",
    "name": "Eggless Fresh Alphonso Mango Cake",
    "category": "Eggless",
    "price": "₹700 / kg",
    "numericPrice": 700,
    "description": "Pure Alphonso mango pulp, fresh mango slices, and light whipped cream sponge.",
    "image": "images/cakes/EG02.jpg",
    "fallbackImage": "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80",
    "available": true
  },
  {
    "id": "EG03",
    "name": "100% Eggless Dark Chocolate Truffle",
    "category": "Eggless",
    "price": "₹750 / kg",
    "numericPrice": 750,
    "description": "Pure vegetarian moist chocolate sponge layered with 55% cocoa ganache.",
    "image": "images/cakes/EG03.jpg",
    "fallbackImage": "images/cakes/EG03.jpg",
    "available": true
  },
  {
    "id": "EG04",
    "name": "Eggless Fresh Pineapple Gateau",
    "category": "Eggless",
    "price": "₹650 / kg",
    "numericPrice": 650,
    "description": "Classic bakery favourite with juicy crushed pineapple chunks and cherries.",
    "image": "images/cakes/EG04.jpg",
    "fallbackImage": "https://5.imimg.com/data5/NS/SI/GLADMIN-40590604/pineapple-cake-with-cream-500x500.png",
    "available": true
  },
  {
    "id": "EG05",
    "name": "Eggless Blueberry Cheesecake Swirl",
    "category": "Eggless",
    "price": "₹850 / kg",
    "numericPrice": 850,
    "description": "Eggless baked cheesecake base topped with tangy wild blueberry reduction.",
    "image": "images/cakes/EG05.jpg",
    "fallbackImage": "https://i.pinimg.com/originals/07/8a/71/078a71ab3b4c62a908a8f211681aa932.jpg",
    "available": true
  },
  {
    "id": "EG06",
    "name": "Eggless Mango Passion Bliss Cake",
    "category": "Eggless",
    "price": "₹720 / kg",
    "numericPrice": 720,
    "description": "Silky mango mousse on a tender eggless sponge with passion fruit glaze.",
    "image": "images/cakes/EG06.jpg",
    "fallbackImage": "https://5.imimg.com/data5/PS/RX/GLADMIN-13485713/mango-cake-500x500.png",
    "available": true
  },
  {
    "id": "EG07",
    "name": "Eggless Classic Red Velvet",
    "category": "Eggless",
    "price": "₹800 / kg",
    "numericPrice": 800,
    "description": "Egg-free red velvet crumb with smooth vegetarian cream cheese frosting.",
    "image": "images/cakes/EG07.jpg",
    "fallbackImage": "https://www.munatycooking.com/wp-content/uploads/2018/08/Red-velvet-cake-recipe-8.jpg",
    "available": true
  },
  {
    "id": "EG08",
    "name": "Eggless Butterscotch Buttercream",
    "category": "Eggless",
    "price": "₹680 / kg",
    "numericPrice": 680,
    "description": "Crunchy caramel butterscotch bits inside creamy, eggless vanilla sponge.",
    "image": "images/cakes/EG08.jpg",
    "fallbackImage": "images/cakes/EG08.jpg",
    "available": true
  },
  {
    "id": "EG09",
    "name": "Eggless Dark Cocoa Swiss Roll",
    "category": "Eggless",
    "price": "₹550 / pc",
    "numericPrice": 550,
    "description": "Tender rolled eggless chocolate sponge filled with dairy-free vanilla cream.",
    "image": "images/cakes/EG09.jpg",
    "fallbackImage": "https://www.floraandvino.com/wp-content/uploads/2020/12/swiss-roll-3.jpg",
    "available": true
  },
  {
    "id": "EG10",
    "name": "Eggless Strawberry Vanilla Roll",
    "category": "Eggless",
    "price": "₹580 / pc",
    "numericPrice": 580,
    "description": "Delicate eggless pink swirl roll filled with fresh strawberry cream cheese.",
    "image": "images/cakes/EG10.jpg",
    "fallbackImage": "https://www.loveandoliveoil.com/wp-content/uploads/2019/05/strawberry-cake-roll-11-600x900.jpg",
    "available": true
  },
  {
    "id": "PC01",
    "name": "Custom Edible Photo Print Cake",
    "category": "Photo Cakes",
    "price": "₹750 / kg",
    "numericPrice": 750,
    "description": "High-definition edible icing sheet print with your favorite photo and custom frame.",
    "image": "images/cakes/PC01.jpg",
    "fallbackImage": "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=600&q=80",
    "available": true
  },
  {
    "id": "PC02",
    "name": "Anniversary Edible Portrait Cake",
    "category": "Photo Cakes",
    "price": "₹950 / kg",
    "numericPrice": 950,
    "description": "Heart-bordered custom couple photo print on luxurious white chocolate glaze.",
    "image": "images/cakes/PC02.jpg",
    "fallbackImage": "https://images.unsplash.com/photo-1626197031507-c17099753214?auto=format&fit=crop&w=600&q=80",
    "available": true
  },
  {
    "id": "PC03",
    "name": "Cartoon Character Edible Photo Cake",
    "category": "Photo Cakes",
    "price": "₹850 / kg",
    "numericPrice": 850,
    "description": "Print your kid's favorite animated superhero, princess, or cartoon on sweet icing.",
    "image": "images/cakes/PC03.jpg",
    "fallbackImage": "images/cakes/PC03.jpg",
    "available": true
  },
  {
    "id": "PC04",
    "name": "Romantic Silhouette Photo Cake",
    "category": "Photo Cakes",
    "price": "₹900 / kg",
    "numericPrice": 900,
    "description": "Custom monochrome or color couple portrait surrounded by piped red rosettes.",
    "image": "images/cakes/PC04.jpg",
    "fallbackImage": "https://images.unsplash.com/photo-1611599537845-1c7aca0091c0?auto=format&fit=crop&w=600&q=80",
    "available": true
  },
  {
    "id": "PC05",
    "name": "Superhero Poster Print Cake",
    "category": "Photo Cakes",
    "price": "₹880 / kg",
    "numericPrice": 880,
    "description": "High-contrast action poster printed on sugar sheet with chocolate drip borders.",
    "image": "images/cakes/PC05.jpg",
    "fallbackImage": "images/cakes/PC05.jpg",
    "available": true
  },
  {
    "id": "PC06",
    "name": "Graduation Milestone Photo Cake",
    "category": "Photo Cakes",
    "price": "₹920 / kg",
    "numericPrice": 920,
    "description": "Celebrate graduation with the degree portrait, cap icon, and congratulatory text.",
    "image": "images/cakes/PC06.jpg",
    "fallbackImage": "https://charlotteslivelykitchen.com/wp-content/uploads/2019/01/coffee-cake-4.jpg",
    "available": true
  },
  {
    "id": "PC07",
    "name": "Silver Jubilee Vintage Frame Photo Cake",
    "category": "Photo Cakes",
    "price": "₹1,050 / kg",
    "numericPrice": 1050,
    "description": "25th anniversary celebratory photo printed with ornate silver fondant frame.",
    "image": "images/cakes/PC07.jpg",
    "fallbackImage": "https://lordbyronskitchen.com/wp-content/uploads/2019/05/1-1.jpg",
    "available": true
  },
  {
    "id": "PC08",
    "name": "Corporate Brand Logo Print Cake",
    "category": "Photo Cakes",
    "price": "₹890 / kg",
    "numericPrice": 890,
    "description": "Crisp color-accurate company logo printed on edible sugar sheet for corporate events.",
    "image": "images/cakes/PC08.jpg",
    "fallbackImage": "https://sweetestmenu.com/wp-content/uploads/2018/08/oreocheesecake10.jpg",
    "available": true
  },
  {
    "id": "PC09",
    "name": "Baby Shower Memory Photo Cake",
    "category": "Photo Cakes",
    "price": "₹950 / kg",
    "numericPrice": 950,
    "description": "Ultrasound scan or maternity memory photo printed with pastel candy piping.",
    "image": "images/cakes/PC09.jpg",
    "fallbackImage": "https://theloopywhisk.com/wp-content/uploads/2019/01/Chocolate-Swiss-Roll_730px-6.jpg",
    "available": true
  },
  {
    "id": "PC10",
    "name": "Golden Border Family Portrait Cake",
    "category": "Photo Cakes",
    "price": "₹1,150 / kg",
    "numericPrice": 1150,
    "description": "Precious family reunion picture framed in edible gold luster with floral edges.",
    "image": "images/cakes/PC10.jpg",
    "fallbackImage": "https://abeautifulplate.com/wp-content/uploads/2016/05/raspberry-roll-cake-1-22-735x1103.jpg",
    "available": true
  },
  {
    "id": "BC01",
    "name": "Assorted Fudge Brownie Box (6 pcs)",
    "category": "Brownies/Cupcakes",
    "price": "₹450 / box",
    "numericPrice": 450,
    "description": "Gooey chocolate fudge brownies with walnut, almond, and choco chip toppings.",
    "image": "images/cakes/BC01.jpg",
    "fallbackImage": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
    "available": true
  },
  {
    "id": "BC02",
    "name": "Strawberry Swirl Cupcakes (6 pcs)",
    "category": "Brownies/Cupcakes",
    "price": "₹420 / box",
    "numericPrice": 420,
    "description": "Fluffy vanilla sponge crowned with two-tone strawberry buttercream swirl.",
    "image": "images/cakes/BC02.jpg",
    "fallbackImage": "https://images.unsplash.com/photo-1587022058028-c084ee8dc31f?auto=format&fit=crop&w=600&q=80",
    "available": true
  },
  {
    "id": "BC03",
    "name": "Salted Caramel Choco Cupcakes (4 pcs)",
    "category": "Brownies/Cupcakes",
    "price": "₹380 / box",
    "numericPrice": 380,
    "description": "Decadent dark chocolate cupcakes injected with molten gooey salted caramel.",
    "image": "images/cakes/BC03.jpg",
    "fallbackImage": "https://www.sugarsaltmagic.com/wp-content/uploads/2018/05/Salted-Caramel-Chocolate-Cupcakes-3b.jpg",
    "available": true
  },
  {
    "id": "BC04",
    "name": "Double Chocolate Walnut Brownies (4 pcs)",
    "category": "Brownies/Cupcakes",
    "price": "₹390 / box",
    "numericPrice": 390,
    "description": "Crispy cracked top with dense fudgy walnut center made with 70% dark cocoa.",
    "image": "images/cakes/BC04.jpg",
    "fallbackImage": "https://fifteenspatulas.com/wp-content/uploads/2020/08/Chocolate-Muffins-16.jpg",
    "available": true
  },
  {
    "id": "BC05",
    "name": "Classic Vanilla Buttercream Cupcakes (6 pcs)",
    "category": "Brownies/Cupcakes",
    "price": "₹399 / box",
    "numericPrice": 399,
    "description": "Tender Madagascar vanilla cupcakes with cloud-like buttercream rosettes.",
    "image": "images/cakes/BC05.jpg",
    "fallbackImage": "https://www.bostongirlbakes.com/wp-content/uploads/2018/04/MG_5052.jpg",
    "available": true
  },
  {
    "id": "BC06",
    "name": "Black Forest Cherry Cupcakes (6 pcs)",
    "category": "Brownies/Cupcakes",
    "price": "₹440 / box",
    "numericPrice": 440,
    "description": "Dark cocoa sponge stuffed with sour cherry reduction and whipped vanilla.",
    "image": "images/cakes/BC06.jpg",
    "fallbackImage": "https://i2.wp.com/lifemadesimplebakes.com/wp-content/uploads/2017/05/Black-Forest-Cupcakes-4.jpg",
    "available": true
  },
  {
    "id": "BC07",
    "name": "Double Chocolate Chip Muffins (6 pcs)",
    "category": "Brownies/Cupcakes",
    "price": "₹360 / box",
    "numericPrice": 360,
    "description": "Bakery-style jumbo chocolate muffins overflowing with melted semisweet chips.",
    "image": "images/cakes/BC07.jpg",
    "fallbackImage": "https://alsothecrumbsplease.com/wp-content/uploads/2018/01/Double-Chocolate-Muffins-11-500x500.jpg",
    "available": true
  },
  {
    "id": "BC08",
    "name": "Fresh Blueberry Crumble Muffins (6 pcs)",
    "category": "Brownies/Cupcakes",
    "price": "₹380 / box",
    "numericPrice": 380,
    "description": "Bursting with whole blueberries and dusted with crunchy cinnamon streusel.",
    "image": "images/cakes/BC08.jpg",
    "fallbackImage": "https://browneyedbaker.com/wp-content/uploads/2016/06/blueberry-muffins-31-600.jpg",
    "available": true
  },
  {
    "id": "BC09",
    "name": "Belgian Truffle Brownie Bites (12 pcs)",
    "category": "Brownies/Cupcakes",
    "price": "₹490 / box",
    "numericPrice": 490,
    "description": "Bite-sized cubes of intense Belgian chocolate fudge dusted with cocoa powder.",
    "image": "images/cakes/BC09.jpg",
    "fallbackImage": "https://i.pinimg.com/736x/12/e2/5e/12e25e2e80630eb791011f95e214c405.jpg",
    "available": true
  },
  {
    "id": "BC10",
    "name": "Rainbow Confetti Cupcakes (6 pcs)",
    "category": "Brownies/Cupcakes",
    "price": "₹420 / box",
    "numericPrice": 420,
    "description": "Colorful fun celebration cupcakes topped with rainbow sugar crystals and pearls.",
    "image": "images/cakes/BC10.jpg",
    "fallbackImage": "https://rainbownourishments.com/wp-content/uploads/2021/02/vegan-strawberry-cupcakes-1.-500x500.jpg",
    "available": false
  }
];

let allCakes = [];
let cart = [];

// DOM Elements
const cakeGrid = document.getElementById("cake-grid");
const filterButtons = document.querySelectorAll(".filter-btn");
const footerWaLink = document.getElementById("footer-wa-link");
const categoryHeading = document.getElementById("category-heading");
const categoryBadgeCount = document.getElementById("category-badge-count");

// Cart Elements
const openCartBtn = document.getElementById("open-cart-btn");
const closeCartBtn = document.getElementById("close-cart-btn");
const cartDrawerBackdrop = document.getElementById("cart-drawer-backdrop");
const cartDrawer = document.getElementById("cart-drawer");
const cartItemsContainer = document.getElementById("cart-items-container");
const cartCountBadge = document.getElementById("cart-count-badge");
const cartDrawerCount = document.getElementById("cart-drawer-count");
const cartTotalQty = document.getElementById("cart-total-qty");
const cartTotalPrice = document.getElementById("cart-total-price");
const cartWhatsappCheckout = document.getElementById("cart-whatsapp-checkout");
const clearCartBtn = document.getElementById("clear-cart-btn");
const continueShoppingBtn = document.getElementById("continue-shopping-btn");
const viewCartLink = document.getElementById("view-cart-link");

// Floating Mobile Cart
const floatingCartBtn = document.getElementById("floating-cart-btn");
const floatingCartBadge = document.getElementById("floating-cart-badge");
const floatingCartTotal = document.getElementById("floating-cart-total");

// Toast Elements
const cartToast = document.getElementById("cart-toast");
const toastMessage = document.getElementById("toast-message");
const toastViewCart = document.getElementById("toast-view-cart");
let toastTimeout;

// 0. Initialize Cart from LocalStorage
function initCart() {
  try {
    const saved = localStorage.getItem("esai_cakes_cart");
    if (saved) {
      cart = JSON.parse(saved);
    }
  } catch (e) {
    cart = [];
  }
  updateCartUI();
}

function saveCart() {
  try {
    localStorage.setItem("esai_cakes_cart", JSON.stringify(cart));
  } catch (e) {
    console.error("Failed to save cart to localStorage", e);
  }
  updateCartUI();
}

// 1. Fetch Cakes from cakes.json (with DEFAULT_CAKES fallback)
async function loadCakes() {
  try {
    const response = await fetch(DATA_URL);
    if (!response.ok) throw new Error("Network response was not ok");
    allCakes = await response.json();
  } catch (error) {
    console.warn("Using fallback local cake catalog (e.g. running from file://):", error);
    allCakes = DEFAULT_CAKES;
  }
  renderCakes(allCakes);
}

// Set footer quick-chat link
if (footerWaLink) {
  const footerMessage = [
    "*HELLO \u2022 ESAI CAKES*",
    U_DIVIDER,
    "Hello! I have a question about ordering cakes from ESAI CAKES, Palavoor."
  ].join("\n");
  footerWaLink.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(footerMessage)}`;
}

// 2. Render Cake Cards into Grid
function renderCakes(cakes) {
  if (!cakes || cakes.length === 0) {
    cakeGrid.innerHTML = `
      <div class="col-span-full text-center py-16 bg-white rounded-3xl border border-pink-100 p-8">
        <span class="text-4xl">🎂</span>
        <h4 class="text-lg font-bold text-cocoa mt-2">No cakes found in this category</h4>
        <p class="text-sm text-gray-500 mt-1">Please select another category tab above to explore our freshly baked collection.</p>
      </div>`;
    return;
  }

  cakeGrid.innerHTML = cakes
    .map((cake) => {
      const waSingleMessage = [
        "*CAKE INQUIRY \u2022 ESAI CAKES*",
        U_DIVIDER,
        "Hello! I would like to order this cake from your website:",
        "",
        `*${cake.name}*`,
        `   ${U_BULLET} *Code:* #${cake.id}`,
        `   ${U_BULLET} *Category:* ${cake.category}`,
        `   ${U_BULLET} *Price:* ${cake.price}`,
        "",
        U_DIVIDER,
        `${U_BULLET} *Bakery:* GDS COMPLEX, Palavoor`,
        "",
        "Please confirm availability and delivery slot! Thank you!"
      ].join("\n");
      const waSingleUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waSingleMessage)}`;

      return `
      <div class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-pink-100 flex flex-col hover:-translate-y-1">
        <!-- Cake Image with Fallback -->
        <div class="relative h-56 overflow-hidden bg-pink-50">
          <img 
            src="${cake.image}" 
            alt="${cake.name}" 
            loading="lazy" 
            onerror="this.onerror=null; this.src='${cake.fallbackImage}';" 
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          />
          <!-- ID Badge -->
          <span class="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-cocoa text-xs font-black px-2.5 py-1 rounded-full shadow-sm border border-pink-100">
            #${cake.id}
          </span>

          <!-- Category or Sold Out Badge -->
          ${
            !cake.available
              ? `<span class="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md animate-pulse">Sold Out</span>`
              : `<span class="absolute top-3 right-3 bg-pink-50/95 backdrop-blur-md text-rose text-xs font-bold px-2.5 py-1 rounded-full shadow-sm border border-pink-100">${cake.category}</span>`
          }
        </div>

        <!-- Card Details -->
        <div class="p-4 flex-1 flex flex-col justify-between">
          <div>
            <h3 class="font-bold text-base text-cocoa group-hover:text-rose transition leading-snug line-clamp-1" title="${cake.name}">
              ${cake.name}
            </h3>
            <p class="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
              ${cake.description || "Freshly baked on order using pure dairy butter and premium ingredients."}
            </p>
            
            <!-- Price Display -->
            <div class="mt-3 flex items-baseline justify-between border-t border-pink-50 pt-2">
              <span class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Price</span>
              <span class="text-rose font-black text-lg tracking-tight">${cake.price}</span>
            </div>
          </div>

          <!-- Actions -->
          <div class="mt-4 pt-1">
            ${
              cake.available
                ? `<div class="flex items-center gap-2">
                    <button 
                      onclick="addToCart('${cake.id}', this)" 
                      class="flex-1 bg-rose hover:bg-pink-700 text-white text-sm font-bold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition shadow-sm hover:shadow active:scale-95">
                      <span>🛒 Add to Cart</span>
                    </button>
                    <a 
                      href="${waSingleUrl}" 
                      target="_blank" 
                      title="Quick Order on WhatsApp" 
                      class="bg-green-600 hover:bg-green-700 text-white p-2.5 rounded-xl flex items-center justify-center transition shadow-sm hover:shadow hover:scale-105 active:scale-95" 
                      aria-label="Order on WhatsApp">
                      <span class="text-base leading-none">💬</span>
                    </a>
                  </div>`
                : `<button disabled class="w-full bg-gray-100 text-gray-400 text-sm font-semibold py-2.5 px-4 rounded-xl cursor-not-allowed border border-gray-200">
                    Currently Sold Out
                   </button>`
            }
          </div>
        </div>
      </div>
      `;
    })
    .join("");
}

// 3. Category Tab Filtering
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Active styling toggle
    filterButtons.forEach((b) => {
      b.classList.remove("active", "bg-rose", "text-white", "border-rose");
      b.classList.add("bg-white", "text-cocoa", "border-pink-200");
    });
    btn.classList.remove("bg-white", "text-cocoa", "border-pink-200");
    btn.classList.add("active", "bg-rose", "text-white", "border-rose");

    const selectedCategory = btn.getAttribute("data-category");
    if (selectedCategory === "All") {
      categoryHeading.textContent = "All Cakes";
      categoryBadgeCount.textContent = `${allCakes.length} items`;
      renderCakes(allCakes);
    } else {
      const filtered = allCakes.filter((cake) => cake.category === selectedCategory);
      categoryHeading.textContent = selectedCategory;
      categoryBadgeCount.textContent = `${filtered.length} items`;
      renderCakes(filtered);
    }
  });
});

// 4. Cart Operations
function addToCart(cakeId, buttonElement) {
  const cake = allCakes.find((c) => c.id === cakeId);
  if (!cake || !cake.available) return;

  const existingIndex = cart.findIndex((item) => item.id === cakeId);
  if (existingIndex > -1) {
    cart[existingIndex].qty += 1;
  } else {
    cart.push({
      id: cake.id,
      name: cake.name,
      category: cake.category,
      price: cake.price,
      numericPrice: cake.numericPrice || parseInt(cake.price.replace(/[^0-9]/g, "")) || 500,
      image: cake.image,
      fallbackImage: cake.fallbackImage,
      qty: 1
    });
  }

  saveCart();
  showToast(`Added "${cake.name}" to cart! 🍰`);

  // Visual button feedback
  if (buttonElement) {
    const originalText = buttonElement.innerHTML;
    buttonElement.innerHTML = `<span>✓ Added</span>`;
    buttonElement.classList.add("bg-green-600");
    buttonElement.classList.remove("bg-rose");
    setTimeout(() => {
      buttonElement.innerHTML = originalText;
      buttonElement.classList.remove("bg-green-600");
      buttonElement.classList.add("bg-rose");
    }, 800);
  }
}

function updateCartQty(cakeId, delta) {
  const index = cart.findIndex((item) => item.id === cakeId);
  if (index === -1) return;

  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
}

function removeCartItem(cakeId) {
  cart = cart.filter((item) => item.id !== cakeId);
  saveCart();
}

function clearCart() {
  if (cart.length === 0) return;
  if (confirm("Are you sure you want to clear all items from your cart?")) {
    cart = [];
    saveCart();
  }
}

// 5. Update Cart UI (Badges, Floating Button, Drawer Items, Totals)
function updateCartUI() {
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.numericPrice * item.qty, 0);
  const formattedPrice = `₹${totalPrice.toLocaleString("en-IN")}`;

  // Update navbar & drawer badges
  if (cartCountBadge) cartCountBadge.textContent = totalQty;
  if (cartDrawerCount) cartDrawerCount.textContent = totalQty;
  if (cartTotalQty) cartTotalQty.textContent = `${totalQty} item${totalQty === 1 ? "" : "s"}`;
  if (cartTotalPrice) cartTotalPrice.textContent = formattedPrice;

  // Floating Mobile Cart
  if (floatingCartBtn) {
    if (totalQty > 0) {
      floatingCartBtn.classList.remove("hidden");
      floatingCartBadge.textContent = totalQty;
      floatingCartTotal.textContent = formattedPrice;
    } else {
      floatingCartBtn.classList.add("hidden");
    }
  }

  // Render Cart Drawer Content
  if (!cartItemsContainer) return;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="text-center py-16 px-4 space-y-3">
        <span class="text-5xl block animate-bounce">🧁</span>
        <h4 class="text-lg font-serif font-bold text-cocoa">Your cart is empty!</h4>
        <p class="text-xs text-gray-500 max-w-xs mx-auto">
          Explore our 50 handcrafted cakes and add your favorite sweet treats to order on WhatsApp.
        </p>
        <button onclick="closeCart()" class="mt-3 bg-rose text-white text-xs font-bold py-2.5 px-6 rounded-full hover:bg-pink-700 transition shadow">
          Explore Cake Catalog
        </button>
      </div>`;
    if (cartWhatsappCheckout) {
      cartWhatsappCheckout.disabled = true;
      cartWhatsappCheckout.classList.add("opacity-50", "cursor-not-allowed");
    }
    return;
  }

  if (cartWhatsappCheckout) {
    cartWhatsappCheckout.disabled = false;
    cartWhatsappCheckout.classList.remove("opacity-50", "cursor-not-allowed");
  }

  cartItemsContainer.innerHTML = cart
    .map((item) => {
      const itemSubtotal = (item.numericPrice * item.qty).toLocaleString("en-IN");
      return `
      <div class="flex items-center gap-3.5 py-3">
        <!-- Thumbnail -->
        <img 
          src="${item.image}" 
          alt="${item.name}" 
          onerror="this.onerror=null; this.src='${item.fallbackImage}';" 
          class="w-16 h-16 rounded-xl object-cover border border-pink-100 flex-shrink-0 bg-pink-50"
        />

        <!-- Info -->
        <div class="flex-1 min-w-0">
          <div class="flex items-start justify-between gap-1">
            <h4 class="font-bold text-sm text-cocoa leading-tight truncate" title="${item.name}">
              ${item.name}
            </h4>
            <button onclick="removeCartItem('${item.id}')" class="text-gray-300 hover:text-red-500 text-sm p-0.5 transition" title="Remove item">
              ✕
            </button>
          </div>
          <p class="text-xs text-gray-400 mt-0.5">#${item.id} • ${item.price}</p>

          <!-- Quantity Control and Subtotal -->
          <div class="flex items-center justify-between mt-2">
            <div class="flex items-center border border-pink-200 rounded-lg overflow-hidden bg-white shadow-xs">
              <button onclick="updateCartQty('${item.id}', -1)" class="px-2.5 py-0.5 text-cocoa hover:bg-pink-100 text-sm font-bold transition">−</button>
              <span class="px-2.5 py-0.5 text-xs font-bold text-cocoa min-w-[24px] text-center">${item.qty}</span>
              <button onclick="updateCartQty('${item.id}', 1)" class="px-2.5 py-0.5 text-cocoa hover:bg-pink-100 text-sm font-bold transition">+</button>
            </div>
            <span class="text-sm font-black text-rose">₹${itemSubtotal}</span>
          </div>
        </div>
      </div>
      `;
    })
    .join("");
}

// 6. Open / Close Cart Drawer
function openCart() {
  cartDrawerBackdrop.classList.remove("pointer-events-none", "opacity-0");
  cartDrawerBackdrop.classList.add("opacity-100");
  cartDrawer.classList.remove("translate-x-full");
  document.body.classList.add("overflow-hidden");
}

function closeCart() {
  cartDrawerBackdrop.classList.add("pointer-events-none", "opacity-0");
  cartDrawerBackdrop.classList.remove("opacity-100");
  cartDrawer.classList.add("translate-x-full");
  document.body.classList.remove("overflow-hidden");
}

// Event Listeners for Cart
if (openCartBtn) openCartBtn.addEventListener("click", openCart);
if (closeCartBtn) closeCartBtn.addEventListener("click", closeCart);
if (floatingCartBtn) floatingCartBtn.addEventListener("click", openCart);
if (viewCartLink) viewCartLink.addEventListener("click", openCart);
if (continueShoppingBtn) continueShoppingBtn.addEventListener("click", closeCart);
if (clearCartBtn) clearCartBtn.addEventListener("click", clearCart);

// Close on Backdrop Click
if (cartDrawerBackdrop) {
  cartDrawerBackdrop.addEventListener("click", (e) => {
    if (e.target === cartDrawerBackdrop) {
      closeCart();
    }
  });
}

// Close on ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !cartDrawer.classList.contains("translate-x-full")) {
    closeCart();
  }
});

// 7. Toast Notification Handler
function showToast(message) {
  if (!cartToast || !toastMessage) return;
  toastMessage.textContent = message;
  cartToast.classList.remove("translate-y-24", "opacity-0", "pointer-events-none");
  cartToast.classList.add("translate-y-0", "opacity-100");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    cartToast.classList.add("translate-y-24", "opacity-0", "pointer-events-none");
    cartToast.classList.remove("translate-y-0", "opacity-100");
  }, 3000);
}

if (toastViewCart) {
  toastViewCart.addEventListener("click", () => {
    cartToast.classList.add("translate-y-24", "opacity-0", "pointer-events-none");
    openCart();
  });
}

// 8. Checkout Cart via WhatsApp
if (cartWhatsappCheckout) {
  cartWhatsappCheckout.addEventListener("click", () => {
    if (cart.length === 0) return;

    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.numericPrice * item.qty, 0);

    const now = new Date();
    const dateStr = now.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
    const timeStr = now.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    });

    const itemsSummary = cart
      .map((item, idx) => {
        const itemTotal = `${U_RUPEE}${(item.numericPrice * item.qty).toLocaleString("en-IN")}`;
        const unitPriceStr = item.price || `${U_RUPEE}${item.numericPrice.toLocaleString("en-IN")}`;
        return `${idx + 1}. *${item.name}* [${item.id}]\n   ${U_BULLET} Qty: ${item.qty} ${U_MULT} ${unitPriceStr} = *${itemTotal}*`;
      })
      .join("\n\n");

    const whatsappMessage = [
      "*NEW ORDER \u2022 ESAI CAKES*",
      U_DIVIDER,
      "Hello! I would like to place an order from my website cart:",
      "",
      "*ORDERED ITEMS:*",
      "",
      itemsSummary,
      "",
      U_DIVIDER,
      `${U_BULLET} *Total Items:* ${totalQty}`,
      `${U_BULLET} *TOTAL AMOUNT: ${U_RUPEE}${totalPrice.toLocaleString("en-IN")}*`,
      U_DIVIDER,
      "",
      `${U_BULLET} *Bakery:* GDS COMPLEX, Palavoor`,
      `${U_BULLET} *Date:* ${dateStr}, ${timeStr}`,
      "",
      "Please confirm availability, preparation time, and delivery/pickup details! Thank you!"
    ].join("\n");

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(waUrl, "_blank");
  });
}

// 9. Custom Cake Inquiry Form -> WhatsApp Handler
const customForm = document.getElementById("custom-cake-form");
if (customForm) {
  customForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const weight = document.getElementById("cake-weight").value;
    const preference = document.getElementById("cake-preference").value;
    const flavour = document.getElementById("cake-flavour").value;
    const date = document.getElementById("cake-date").value;
    const message = document.getElementById("cake-message").value || "None";
    const notes = document.getElementById("cake-notes").value || "None";

    const customOrderText = [
      "*CUSTOM CAKE INQUIRY \u2022 ESAI CAKES*",
      U_DIVIDER,
      "Hello! I would like to inquire about a custom cake order:",
      "",
      `*Flavour:* ${flavour}`,
      `   ${U_BULLET} *Weight:* ${weight}`,
      `   ${U_BULLET} *Preference:* ${preference}`,
      `   ${U_BULLET} *Date Needed:* ${date}`,
      `   ${U_BULLET} *Message on Cake:* "${message}"`,
      `   ${U_BULLET} *Special Instructions:* ${notes}`,
      "",
      U_DIVIDER,
      `${U_BULLET} *Bakery:* GDS COMPLEX, Palavoor`,
      "",
      "Please provide price quotation and availability! Thank you!"
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(customOrderText)}`;
    window.open(whatsappUrl, "_blank");
  });
}

// Initialize
initCart();
loadCakes();

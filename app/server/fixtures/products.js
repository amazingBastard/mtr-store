Fixtures = typeof Fixtures !== 'undefined' ? Fixtures : {};

var now = new Date();

Fixtures.products = [
    {
        title: 'Mild Milk Chocolate',
        description: 'Milk chocolate milder and sweeter because it is made with milk and a higher sugar content than the darker varieties. It also has a smaller quantity of chocolate liquor and, therefore, fewer flavors and aromas.',
        image: '/images/products/milk.png',
        type: 'milk',
        price: 1.50,
        created: now
    },
    {
        title: 'Rich Dark Chocolate',
        description: 'Dark chocolate has the most chocolate liquor and the most intense chocolate flavor. Look for bitter, roasted, fruit, earthy, woodsy and/or nutty notes.',
        image: '/images/products/dark.png',
        type: 'dark',
        price: 2.50,
        created: now
    },
    {
        title: 'Vanilla White Chocolate',
        description: 'White chocolate lacks chocolate liquor, and includes the milk and vanilla used in milk chocolate. These ingredients give it a variety of sweet flavor notes, including cream, milk, honey, vanilla, caramel and/or fruit.',
        image: '/images/products/white.png',
        type: 'white',
        price: 0.50,
        created: now
    },
    {
        title: 'Sugar Free Chocolate',
        description: 'Treat Grandma to this fine bar of sugar free chocolate',
        image: '/images/products/sugar_free.png',
        type: 'sugar free',
        price: 1,
        created: now
    }
];
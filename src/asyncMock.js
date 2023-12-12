const products = [
    {
        id: '1',
        name: 'Nike Air Force - White',
        price: 199,
        category: 'shoes',
        img: 'https://f.fcdn.app/imgs/b090df/www.zooko.com.uy/zoo/bf56/webp/catalogo/NKFN7439-133-1/460x460/championes-nike-air-force-1-07-white.jpg',
        stock: 7,
        description: 'Nike Air Force Shoes - White',
    },
    {
        id: '2',
        name: 'Nike Air Force - Grey',
        price: 179,
        category: 'shoes',
        img: 'https://f.fcdn.app/imgs/5d604c/www.zooko.com.uy/zoo/eafd/webp/catalogo/NKDZ2522-001-1/460x460/champion-nike-air-force-107-lv8-black.jpg',
        stock: 10,
        description: 'Nike Air Force Shoes - Grey',
    },
    {
        id: '3',
        name: 'Nike Air Force - Red/Black',
        price: 159,
        category: 'shoes',
        img: 'https://f.fcdn.app/imgs/7ca987/www.zooko.com.uy/zoo/5ce2/webp/catalogo/NKDZ2554-001-1/460x460/nike-air-force-1-07-mid-black.jpg',
        stock: 3,
        description: 'Nike Air Force Shoes - Red/Black',
    },
    {
        id: '4',
        name: 'Nike NSW Club Crew Hoodie - Yellow',
        price: 149,
        category: 'hoodies',
        img: 'https://f.fcdn.app/imgs/cd71d4/www.zooko.com.uy/zoo/65c8/webp/catalogo/NKBV2666-717-1/460x460/buzo-nike-nsw-club-crew-717.jpg',
        stock: 13,
        description: 'Nike NSW Club Crew Hoodie - Yellow',
    },
    {
        id: '5',
        name: 'Nike Revival FLC Crew Hoodie - Black ',
        price: 139,
        category: 'hoodies',
        img: 'https://f.fcdn.app/imgs/0129ae/www.zooko.com.uy/zoo/ecbe/webp/catalogo/NKDM5630-010-1/460x460/buzo-nike-revival-flc-crew-black.jpg',
        stock: 15,
        description: 'Nike Revival FLC Crew Hoodie - Black',
    },
    {
        id: '6',
        name: 'Nike Sportswear Hoodie - Water Green',
        price: 149,
        category: 'hoodies',
        img: 'https://f.fcdn.app/imgs/57d11a/www.zooko.com.uy/zoo/36d8/webp/catalogo/NKFD1489-309-1/460x460/buzo-nike-sportswear-blue.jpg',
        stock: 4,
        description: 'Nike Sportswear Hoodie - Water Green',
    },
    {
        id: '7',
        name: 'Cap Futura Washed - Black',
        price: 39,
        category: 'caps',
        img: 'https://f.fcdn.app/imgs/3ecf93/www.zooko.com.uy/zoo/709a/webp/catalogo/NK913011-011-1/460x460/u-nsw-h86-cap-futura-washed-black.jpg',
        stock: 8,
        description: 'Cap Futura Washed - Black',
    },
    {
        id: '8',
        name: 'Rise Structured Trucker Cap - Pink',
        price: 69,
        category: 'caps',
        img: 'https://f.fcdn.app/imgs/a8d22e/www.zooko.com.uy/zoo/0e2e/webp/catalogo/NKFB5379-690-1/460x460/gorra-nike-dri-fit-rise-structured-trucker-cap-red.jpg',
        stock: 12,
        description: 'Rise Structured Trucker Cap - Pink',
    },
    {
        id: '9',
        name: 'Cap Futura Washed - White',
        price: 59,
        category: 'caps',
        img: 'https://f.fcdn.app/imgs/c4e310/www.zooko.com.uy/zoo/ebde/webp/catalogo/NK913011-100-1/460x460/u-nsw-h86-cap-futura-washed-white.jpg',
        stock: 5,
        description: 'Cap Futura Washed - White',
    },
]


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500);
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500);
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500);
    })
}
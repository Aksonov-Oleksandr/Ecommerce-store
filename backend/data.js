import bcrypt from "bcryptjs";
const data = {
    users: [
        {
            name: 'Alex',
            email: 'admin@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },
        {
            name: 'John',
            email: 'user@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,
        },
    ],
    products: [
        {
            name: 'fire alarm',
            slug: 'fire-security-systems1',
            category: 'fire alarms',
            image:'/imgs/fire-alarm.jpg',
            price: 120,
            countInStock: 13,
            brand: 'S',
            rating: 4.9,
            numReviews: 10,
            description: "Fastest fire alarm to save your life"
        },
        {
            name: 'fire alarm2',
            slug: 'fire-security-systems2',
            category: 'fire alarms',
            image:'/imgs/fire-alarm.jpg',
            price: 228,
            countInStock: 13,
            brand: 'S',
            rating: 3.9,
            numReviews: 12,
            description: "Fastest fire alarm to save your life"
        },
        {
            name: 'fire alarm3',
            slug: 'fire-security-systems3',
            category: 'fire alarms',
            image:'/imgs/fire-alarm.jpg',
            price: 228,
            countInStock: 13,
            brand: 'S',
            rating: 3.9,
            numReviews: 12,
            description: "Fastest fire alarm to save your life"
        },

        {
            name: 'quick car alarm',
            slug: 'car-alarms',
            category: 'car alarms',
            image:'/imgs/caralarm.jpg',
            price: 120,
            countInStock: 13,
            brand: 'CarSAVER',
            rating: 4.9,
            numReviews: 10,
            description: "The best way to save your car"
        },
        {
            name: 'quick car alarm',
            slug: 'car-alarms',
            category: 'car alarms',
            image:'/imgs/caralarm.jpg',
            price: 120,
            countInStock: 13,
            brand: 'CarSAVER',
            rating: 4.9,
            numReviews: 10,
            description: "The best way to save your car"
        },
        {
            name: 'quick car alarm',
            slug: 'car-alarms',
            category: 'car alarms',
            image:'/imgs/caralarm.jpg',
            price: 120,
            countInStock: 13,
            brand: 'CarSAVER',
            rating: 4.9,
            numReviews: 10,
            description: "The best way to save your car"
        },
        {
            name: 'intercom',
            slug: 'house-intercoms',
            category: 'intercoms',
            image:'/imgs/domofon.jpg',
            price: 120,
            countInStock: 1,
            brand: 'cyfral',
            rating: 4.9,
            numReviews: 10,
            description: "Protecting your house from uninvited guests"
        },
        {
            name: 'intercom',
            slug: 'house-intercoms',
            category: 'intercoms',
            image:'/imgs/domofon.jpg',
            price: 120,
            countInStock: 1,
            brand: 'cyfral',
            rating: 4.9,
            numReviews: 10,
            description: "Protecting your house from uninvited guests"
        },
        {
            name: 'intercom',
            slug: 'house-intercoms',
            category: 'intercoms',
            image:'/imgs/domofon.jpg',
            price: 120,
            countInStock: 1,
            brand: 'cyfral',
            rating: 4.9,
            numReviews: 10,
            description: "Protecting your house from uninvited guests"
        },
        {
            name: 'Camera',
            slug: 'CCTV-Cameras',
            category: 'CCTV Cameras',
            image:'/imgs/nocamera.jpg',
            price: 120,
            countInStock: 13,
            brand: 'SashyaNocamera',
            rating: 4.9,
            numReviews: 10,
            description: "Spectate what is going on your private property anytime, anywhere you want"
        },
        {
            name: 'Camera',
            slug: 'CCTV-Cameras',
            category: 'CCTV Cameras',
            image:'/imgs/nocamera.jpg',
            price: 120,
            countInStock: 13,
            brand: 'SashyaNocamera',
            rating: 4.9,
            numReviews: 10,
            description: "Spectate what is going on your private property anytime, anywhere you want"
        },
        {
            name: 'Camera',
            slug: 'CCTV-Cameras',
            category: 'CCTV Cameras',
            image:'/imgs/nocamera.jpg',
            price: 120,
            countInStock: 13,
            brand: 'SashyaNocamera',
            rating: 4.9,
            numReviews: 10,
            description: "Spectate what is going on your private property anytime, anywhere you want"
        }
    ]
}
export default data;

export default class ParfumstoreService {

    data = [
        {
            id: 1,
            brand: 'Creed',
            title: 'Aventus',
            img: 'https://splash.com.ua/images/36283-product_card/creed-aventus-%D0%BF%D0%B0%D1%80%D1%84%D1%8E%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F-%D0%B2%D0%BE%D0%B4%D0%B0-%D1%84%D0%BE%D1%82%D0%BE-1.jpg',
            concentration: 'Eau de Parfum',
            vol: '100 ml',
            price: 5500,
            rating: 5,
            numReview: 11
        },
        {
            id: 2,
            brand: 'Maison Francis Kurkdjian',
            title: 'Baccarat Rouge 540',
            img: 'https://splash.com.ua/images/28060-product_card/maison-francis-kurkdjian-baccarat-rouge-540-%D0%BF%D0%B0%D1%80%D1%84%D1%8E%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F-%D0%B2%D0%BE%D0%B4%D0%B0-%D1%84%D0%BE%D1%82%D0%BE-1.jpg',
            concentration: 'Parfum',
            vol: '70 ml',
            price: 8500,
            rating: 5,
            numReview: 19
        },
        {
            id: 3,
            brand: 'Creed',
            title: 'Aventus',
            img: 'https://splash.com.ua/images/36283-product_card/creed-aventus-%D0%BF%D0%B0%D1%80%D1%84%D1%8E%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F-%D0%B2%D0%BE%D0%B4%D0%B0-%D1%84%D0%BE%D1%82%D0%BE-1.jpg',
            price: 3600,
            concentration: 'Eau de Parfum',
            vol: '50 ml',
            rating: 5,
            numReview: 13
        },
        {
            id: 4,
            brand: 'Maison Francis Kurkdjian',
            title: 'Baccarat Rouge 540',
            img: 'https://splash.com.ua/images/28060-product_card/maison-francis-kurkdjian-baccarat-rouge-540-%D0%BF%D0%B0%D1%80%D1%84%D1%8E%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F-%D0%B2%D0%BE%D0%B4%D0%B0-%D1%84%D0%BE%D1%82%D0%BE-1.jpg',
            concentration: 'Eau de Parfum',
            vol: '70 ml',
            price: 6500,
            rating: 5,
            numReview: 25
        },
        {
            id: 5,
            brand: 'Creed',
            title: 'Aventus',
            img: 'https://splash.com.ua/images/36283-product_card/creed-aventus-%D0%BF%D0%B0%D1%80%D1%84%D1%8E%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F-%D0%B2%D0%BE%D0%B4%D0%B0-%D1%84%D0%BE%D1%82%D0%BE-1.jpg',
            concentration: 'Eau de Parfum - Tester',
            vol: '100 ml',
            price: 4700,
            rating: 5,
            numReview: 10
        }
    ];

    getParfums() {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              resolve(this.data);
            // reject (new Error('Fuckkk'));
          }, 500);
      });
    }
}
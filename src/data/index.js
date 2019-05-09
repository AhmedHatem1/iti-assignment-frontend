const faker = require("faker");
export const products = [
  {
    id: 1,
    ProductImage: faker.image.fashion(),
    ProductName: faker.commerce.productName(),
    Price: faker.commerce.price(),
    ProducerCompanyName: faker.company.companyName()
  },
  {
    id: 2,
    ProductImage: faker.image.fashion(),
    ProductName: faker.commerce.productName(),
    Price: faker.commerce.price(),
    ProducerCompanyName: faker.company.companyName()
  },
  {
    id: 3,
    ProductImage: faker.image.fashion(),
    ProductName: faker.commerce.productName(),
    Price: faker.commerce.price(),
    ProducerCompanyName: faker.company.companyName()
  },
  {
    id: 4,
    ProductImage: faker.image.fashion(),
    ProductName: faker.commerce.productName(),
    Price: faker.commerce.price(),
    ProducerCompanyName: faker.company.companyName()
  },
  {
    id: 5,
    ProductImage: faker.image.fashion(),
    ProductName: faker.commerce.productName(),
    Price: faker.commerce.price(),
    ProducerCompanyName: faker.company.companyName()
  }
];

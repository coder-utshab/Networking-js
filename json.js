const shop = {
    owner: 'Piyash halder',
    address: {
        street: 'Bunagati bagar shalikha magura',
        city: 'Magura',
        country: 'Bangladesh'
    },
    products: ['laptop', 'mobaile', 'monitor', 'headphone','keyboard'],
    revinue: 45000,
    isOpen: true,
    isNew: false
};
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
//jodi object a dakta chay
const shopOBJ = JSON.parse(shopJSON);
console.log(shopOBJ)

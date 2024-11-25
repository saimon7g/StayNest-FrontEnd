const checkInDate = new Date('2024-03-01');
const checkOutDate = new Date('2024-03-10');

const days = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));

console.log(days); // Output: 10
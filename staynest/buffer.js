const checkInDate = new Date('2024-03-01');
const checkOutDate = new Date('2024-03-03');

const days =Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24))+1;

console.log(days); // Output: 10
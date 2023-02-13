const rumus = require("./module.js");

const { Persegi, PersegiPanjang } = rumus;

const persegi = Persegi(5);

console.log("Luas persegi:", persegi.luas);
console.log("Keliling persegi:", persegi.keliling);

const persegiPanjang = PersegiPanjang(10, 6);

console.log("Luas persegi panjang:", persegiPanjang.luas);
console.log("Keliling persegi panjang:", persegiPanjang.keliling);

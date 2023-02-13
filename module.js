/* rumus persegi */
const Persegi = (sisi) => {
  return {
    luas: sisi * sisi,
    keliling: 4 * sisi,
  };
};

/* rumus persegi panjang */
const PersegiPanjang = (panjang, lebar) => {
  return {
    luas: panjang * lebar,
    keliling: 2 * (panjang + lebar),
  };
};

module.exports = { Persegi, PersegiPanjang };

//membuat function untuk menghitung luas (area) dari persegi dan persegi panjang
exports.area = (num1, num2 = num1) => num1 * num2;

//membuat function untuk menghitung keliling (circumference) dari persegi dan persegi panjang
exports.circum = (num1, num2 = num1, num3 = num1, num4 = num2) => num1 + num2 + num3 + num4;

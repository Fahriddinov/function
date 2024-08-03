const num = +prompt(`Birinchi sonni kiriting`);
const num2 = +prompt(`Ikkinchi sonni kiriting`);

function name(params) {
    if (num > num2) {
    alert(`${num} katta ${num2}dan`)
    } else if (num2 > num) {
        alert(`${num2} katta ${num}dan`);
    }
   
}
name()
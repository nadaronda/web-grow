export const firstLetterToUpper = (a) => {
    let minusculas = a.toLowerCase();
    return minusculas.charAt(0).toUpperCase() + minusculas.slice(1);
};

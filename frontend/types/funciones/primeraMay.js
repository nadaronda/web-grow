export const may = (a) => {
    let minusculas = a.toLowerCase();
    let mayP = minusculas.charAt(0).toUpperCase() + minusculas.slice(1);
    return mayP;
};
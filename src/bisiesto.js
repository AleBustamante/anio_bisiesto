function esBisiesto(anio) {
    if (anio % 400 === 0) {
        return true;
    }
    else if (anio % 100 && anio % 400 != 0) {
        return false;
    }
    return false;
}

export default esBisiesto;

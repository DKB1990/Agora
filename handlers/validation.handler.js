'use strict';
const validateQuantity = (number) => {
    if (isNaN(number)) {
        alert(errors.invalidNumberError);
        return false;
    }
    else if (number < constants.minimumQuantity) {
        alert(errors.minimumQuantityError);
        return false;
    }

    return true;
}
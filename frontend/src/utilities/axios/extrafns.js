function checkIfAllValuesAreEmpty(errors) {
    for (const key in errors) {
      if (errors.hasOwnProperty(key) && errors[key] !== '') {
        return false; // Found a non-empty value
      }
    }
    return true; // All values are empty
  }

  export {checkIfAllValuesAreEmpty}
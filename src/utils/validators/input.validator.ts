const validateInput = (input: string): boolean => {

    let regex = /^[a-zA-Z_][a-zA-Z_\-]*$/;

    if(regex.test(input)) return true;

    return false;
};

export default validateInput;
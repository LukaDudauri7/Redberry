export function handleChange(event, error, setError) {

    event.preventDefault();
    const { name, value } = event.target;
    let errors = error;
    let check = /^[ა-ჰ]+$/.test(value);
    switch (name) {
        case 'firstName':
            errors.firstName = (value.length < 2 || (value.length >= 2 && !check)) ? 'error' : errors.firstName.length > 0 ? 'valid' : '';
            break;
        case 'surname':
            errors.surname = (value.length < 2 || (value.length >= 2 && !check)) ? 'error' : errors.surname.length > 0 ? 'valid' : '';
            break;
        case 'email':
            errors.email = (!value.endsWith('@redberry.ge')) ? 'wide-error' : errors.email.length > 0 ? 'wide-valid' : '';
            break;
        case 'number':
            errors.number = (!value.startsWith('+995')) ? 'wide-error' : errors.number.length > 0 ? 'wide-valid' : '';
        case 'position':
            errors.position = value.length < 2 ? 'wide-error' : errors.position.length > 0 ? 'wide-valid' : '';
            break;
        case 'employer':
            errors.employer = value.length < 2 ? 'wide-error' : errors.employer.length > 0 ? 'wide-valid' : '';
            break;
        case 'school':
            errors.school = value.length < 2 ? 'wide-error' : errors.school.length > 0 ? 'wide-valid' : '';
            break;
        case 'degree':
            errors.degree = value.length < 2 ? 'error' : errors.degree.length > 0 ? 'valid' : '';
            break;

    }
    setError(errors);
}
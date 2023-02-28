export const contactValidation = {
  name: {
    required: 'Name is required',
    maxLength: 50,
    pattern: {
      value: /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я0-9 ])?[a-zA-Zа-яА-Я0-9]*)*$/,
      message: 'Invalid name format',
    },
  },
  number: {
    required: 'Number is required',
    pattern: {
      value: /^(\+\d\s*)?(\d{3,4}|\(\d{3,4}\))[-\s]?\d{3}[-\s]?\d{4}$/,
      message: 'This is not a valid mobile phone',
    },
    minLength: {
      value: 10,
      message: 'This number is too short',
    },
    maxLength: {
      value: 18,
      message: 'This number is too long',
    },
  },
};

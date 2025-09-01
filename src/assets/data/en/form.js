export const form = {
  inputs: {
    visible: {
      name: {
        name: "name",
        placeholder: "Name",
      },
      phone: {
        name: "phone",
        placeholder: "Phone Number",
      },
      service: {
        name: "service",
        placeholder: "Service",
      },
    },
  },
  buttonText: "Book your free consultation",
  validationMessages: {
    name: {
      required: "Name is required",
      invalid: "Numbers and special characters are not allowed",
      min: "Name must be at least 3 characters long",
      repeated: "Name cannot consist of the same repeated character",
    },
    phone: {
      required: "Phone number is required",
      min: "Phone number must be at least 9 digits long",
    },
    service: {
      required: "Please select a service",
    },
  },
  failMessage: "Your information may have been previously recorded",
  successMessage: "We have received you info and will contact you soon",
};

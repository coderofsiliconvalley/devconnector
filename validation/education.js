const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateExperienceInput(data) {
  let errors = {};
  console.log(data.title);
  data.school = !isEmpty(data.school) ? data.school : "";
  data.degree = !isEmpty(data.degree) ? data.degree : "";
  data.from = !isEmpty(data.from) ? data.from : "";
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : "";

  if (Validator.isEmpty(data.school)) {
    errors.school = "School field is required";
  }
  if (Validator.isEmpty(data.degree)) {
    errors.degree = "Company field is required";
  }
  if (Validator.isEmpty(data.from)) {
    errors.from = "from field is required";
  }
  if (Validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = "fieldofstudy  field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

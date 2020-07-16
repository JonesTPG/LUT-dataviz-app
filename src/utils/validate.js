export const validateDemoGraphics = (
  age,
  gender,
  education,
  otherEducation,
  englishFirst,
  englishFluency,
  country,
  livedInFinland
) => {
  if (
    age === '' ||
    gender === '' ||
    education === '' ||
    englishFirst === '' ||
    country === '' ||
    livedInFinland === ''
  ) {
    return false;
  } else if (education === 'Other' && otherEducation === '') {
    return false;
  } else if (englishFirst === 'no' && englishFluency === '') {
    return false;
  } else {
    return true;
  }
};

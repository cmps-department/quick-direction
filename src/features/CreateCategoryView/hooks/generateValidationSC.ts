import * as Yup from 'yup';

const generateValidationSC = (index: number) => {
  return Yup.object().shape({
    [`nameSD_${index}`]: Yup.string()
      .required("Поле обов'язкове до заповнення!")
      .min(2, 'Мінімум 2 символи!')
      .max(50, 'Максимум 50 символів!'),

    [`descriptionSD_${index}`]: Yup.string()
      .required("Поле обов'язкове до заповнення!")
      .min(2, 'Мінімум 2 символи!')
      .max(50, 'Максимум 50 символів!'),

    [`examplelinkSD_${index}`]: Yup.string().notRequired(),
    [`additionalInfoSD_${index}`]: Yup.string().notRequired(),
    [`downloadFileSD_${index}`]: Yup.boolean().notRequired(),
    [`textFieldSD_${index}`]: Yup.boolean().notRequired(),
  });
};

export default generateValidationSC;

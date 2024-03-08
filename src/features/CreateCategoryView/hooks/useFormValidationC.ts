import * as Yup from 'yup';

const useFormValidationC = () => {
  const validationSchema = Yup.object().shape({
    nameD: Yup.string()
      .required("Поле обов'язкове до заповнення!")
      .min(2, 'Мінімум 2 символи!')
      .max(50, 'Максимум 50 символів!'),
    descriptionD: Yup.string()
      .required("Поле обов'язкове до заповнення!")
      .min(2, 'Мінімум 2 символи!')
      .max(50, 'Максимум 50 символів!'),
    professorMail: Yup.string()
      .required("Поле обов'язкове до заповнення!")
      .min(2, 'Мінімум 2 символи!')
      .max(50, 'Максимум 50 символів!')
      .email('Поле не відповідає формату email!'),
  });

  return validationSchema;
};

export default useFormValidationC;

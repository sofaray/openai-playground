import useLocale from '@/hooks/use-locale'

const useValidation = () => {
  const { t } = useLocale()

  const validateRequired = { required: t.error.requiredField }

  const validateRequiredFile = {
    value: (v: File[]) => {
      return v.length ? undefined : t.error.requiredField
    },
  }

  const validateEmail = {
    pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: t.error.invalidEmail },
  }

  const validateMinLength = (min: number) => ({
    minLength: { value: min, message: `${min}${t.error.invalidMinLength}` },
  })

  const validateMaxLength = (max: number) => ({
    maxLength: { value: max, message: `${max}${t.error.invalidMaxLength}` },
  })

  return { validateRequired, validateRequiredFile, validateEmail, validateMinLength, validateMaxLength }
}

export default useValidation

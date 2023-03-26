import { FC, InputHTMLAttributes, ReactNode } from 'react'
import Box from '@/components/elements/box'
import useLocale from '@/hooks/use-locale'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode
  required?: boolean
  label?: string
  hintLabel?: string
  errorLabel?: string
}

const InputGroup: FC<Props> = ({ children, required, label, hintLabel, errorLabel, ...props }: Props) => {
  const { t } = useLocale()

  return (
    <label className='flex flex-col'>
      <Box className={`flex items-center text-sm font-semibold mb-1 ${errorLabel ? 'text-danger' : ''}`}>
        {label}
        {required && <span className='text-danger text-xs font-normal ml-2 '>{t.common.required}</span>}
      </Box>

      {children}
      {errorLabel && <span className='text-danger text-xs mt-2'>{errorLabel}</span>}
      {hintLabel && <span className='text-black-light text-xs mt-2'>{hintLabel}</span>}
    </label>
  )
}
export default InputGroup

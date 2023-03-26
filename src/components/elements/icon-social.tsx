import Image from 'next/image'
import { FC } from 'react'

interface Props {
  src: string
  size?: number
}

const IconSocial: FC<Props> = ({ src, size = 24, ...props }: Props) => (
  <Image src={src} width={size} height={size} {...props} alt='' />
)

export default IconSocial

import Link from 'next/link'
import { memo } from 'react'

const DashboardFooter = memo(() => {
  return (
    <footer>
      <ul className='flex gap-6 m-auto justify-center text-sm mt-12'>
        <li>
          <Link className={'text-black-light'} href={'#'}>
            利用規約
          </Link>
        </li>
        <li>
          <Link className={'text-black-light'} href={'#'}>
            プライバシーポリシー
          </Link>
        </li>
        <li>
          <Link className={'text-black-light'} href={'#'}>
            ヘルプセンター
          </Link>
        </li>
        <li>
          <Link className={'text-black-light'} href={'#'}>
            お問い合わせ
          </Link>
        </li>
        <li>
          <Link className={'text-black-light'} href={'#'}>
            フィードバック
          </Link>
        </li>
      </ul>
    </footer>
  )
})

export default DashboardFooter

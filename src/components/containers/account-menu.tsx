import Menu from '@/components/containers/headlessui/menu'
import Avatar from '@/components/elements/avatar'
import sessionStore from '@/stores/session-store'

const AccountMenu = () => {
  const { session } = sessionStore()
  if (!session) return <></>

  return (
    <Menu>
      <Menu.Button>
        <Avatar
          src={session.photoURL || ''}
          className={'transition-all duration-150 hover:ring-4 hover:ring-grey-transparent'}
        />
      </Menu.Button>
      <Menu.Items className={'right-0'}>
        <Menu.Item>アカウント設定</Menu.Item>
        {/* <Menu.Item disabled>お問い合わせ</Menu.Item> */}
        <Menu.Divider />
        <Menu.Item as='a' href={'/signout'}>
          ログアウト
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}
export default AccountMenu

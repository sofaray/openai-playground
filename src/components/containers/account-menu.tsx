import Menu from '@/components/containers/headlessui/menu'

const AccountMenu = () => {
  return (
    <Menu>
      <Menu.Items className={'right-0'}>
        <Menu.Item>マイページを見る</Menu.Item>
        <Menu.Item>アカウント設定</Menu.Item>
        <Menu.Item>ヘルプセンター</Menu.Item>
        <Menu.Item disabled>お問い合わせ</Menu.Item>
        <Menu.Divider />
        <Menu.Item as='a' href={'/signout'}>
          ログアウト
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}
export default AccountMenu

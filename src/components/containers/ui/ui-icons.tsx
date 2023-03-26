import Box from '@/components/elements/box'
import Card from '@/components/elements/card'

import Icon from '@/components/elements/icon'
import IconSocial from '@/components/elements/icon-social'

const UIIcons = () => {
  return (
    <>
      <Card size={'lg'} className='w-full'>
        <h1 className='mb-8'>Icons</h1>
        Social Icon
        <Box className='flex flex-wrap items-center gap-8 mt-4 mb-8'>
          <IconSocial src='/icons/social/google.svg' />
          <IconSocial src='/icons/social/facebook.svg' />
          <IconSocial src='/icons/social/twitter.svg' />
          <IconSocial src='/icons/social/apple.svg' />
        </Box>{' '}
        Material Icon, Rounded, FillOff, W300
        <Box className='flex flex-wrap items-center gap-8 mt-4 mb-8'>
          <Icon name='settings' />
          <Icon name='account_circle' />
          <Icon name='savings' />
          <Icon name='leaderboard' />
          <Icon name='home' />
          <Icon name='menu_book' />
          <Icon name='arrow_back' />
          <Icon name='arrow_back_ios' />
          <Icon name='arrow_back_ios_new' />
          <Icon name='search' />
          <Icon name='refresh' />
          <Icon name='account_balance' />
          <Icon name='menu' />
          <Icon name='expand_less' />
          <Icon name='expand_more' />
          <Icon name='credit_card' />
          <Icon name='chevron_right' />
          <Icon name='chevron_left' />
          <Icon name='language' />
          <Icon name='ios_share' />
          <Icon name='photo' />
          <Icon name='photo_camera' />
          <Icon name='add_a_photo' />
          <Icon name='arrow_drop_up' />
          <Icon name='arrow_drop_down' />
          <Icon name='add_photo_alternate' />
          <Icon name='close' />
          <Icon name='redeem' />
          <Icon name='volunteer_activism' />
          <Icon name='more_horiz' />
          <Icon name='person' />
          <Icon name='lunch_dining' />
          <Icon name='filter' />
          <Icon name='pageview' />
          <Icon name='notifications' />
          <Icon name='groups' />
          <Icon name='handshake' />
          <Icon name='quiz' />
          <Icon name='web' />
          <Icon name='open_in_new' />
          <Icon name='help' />
          <Icon name='attractions' />
        </Box>
        Material Icon, Rounded, FillOff, W300
        <Box className='flex flex-wrap items-center gap-8 mt-4 mb-8'>
          <Icon name='cancel' fill />
          <Icon name='check_circle' fill />
          <Icon name='info' fill />
          <Icon name='error' fill />
        </Box>
      </Card>
    </>
  )
}

export default UIIcons

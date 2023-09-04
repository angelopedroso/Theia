import { HardDrives, Receipt, UsersThree } from '@phosphor-icons/react'

export const routes = {
  pages: [{ title: 'Groups', url: '/groups', Component: UsersThree }],
  utils: [
    { title: 'Activity Log', url: '/activity-log', Component: HardDrives },
    { title: 'Ban Log', url: '/ban-log', Component: Receipt },
  ],
}

import { HardDrives, UsersThree } from 'phosphor-react'

export const routes = {
  pages: [{ title: 'Groups', url: '/groups', Component: UsersThree }],
  utils: [
    { title: 'Activity Log', url: '/activity-log', Component: HardDrives },
  ],
}

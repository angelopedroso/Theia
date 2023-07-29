import React from 'react'
import { CardGroup } from './cardGroup'

export interface CardGroupsPageProps {
  data: GroupsProps
}

export function CardGroupsPage({ data }: CardGroupsPageProps) {
  return <CardGroup data={data} />
}

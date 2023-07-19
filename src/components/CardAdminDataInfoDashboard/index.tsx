import React from 'react'
import { AdminCard } from './components/AdminCard'

export interface CardInfoContainerProps {}

export function CardInfoContainer(props: CardInfoContainerProps) {
  return (
    <section className="flex items-start gap-5">
      <div>
        <h3>fdasopjf</h3>
      </div>
      <AdminCard />
    </section>
  )
}

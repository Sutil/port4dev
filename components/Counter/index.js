import React from 'react'
import { Section } from './styles'

export default function Counter() {
  return (
    <Section>
      <div className="border-frame">
        <div className="content">
          <span className="value" >67</span>
          <span className="description" >repositórios</span>
        </div>
      </div>
    </Section>
  )
}

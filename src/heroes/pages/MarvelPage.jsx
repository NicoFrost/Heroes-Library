import React from 'react'
import { HeroList } from '../components/heroList'

export const MarvelPage = () => {
  return (
    <>
      <h1>Marvel Page</h1>
      <hr />
      <HeroList publisher={'Marvel Comics'}/>
    </>
  )
}

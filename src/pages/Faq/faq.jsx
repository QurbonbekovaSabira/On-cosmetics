import React from 'react'
import style from './faq.module.scss'
import { Hero } from '../../components/hero'

export const Faq = () => {
  return (
    <section className={style.faq}>
      <Hero 
      title="Frequently asked questions" 
      text="Here you can find answers on the most frequently asked questions." />
    </section>
  )
}

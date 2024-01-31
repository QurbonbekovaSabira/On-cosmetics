import React from 'react'
import { Hero } from '../../components/hero';
import styles from "./brand.module.scss";
export const Brand = () => {
  return (
    <section >
      <div className={styles.brand}>
        <Hero
          title="About hero ONmacabim"
          text="Place where our crazy-talented master stylists will not only do a haircut or makeup." />
      </div>

      <div className='container'>
        <div className={styles.brand_section2}>
          <h1 className={styles.brand_section2_title}>
            ONmacabim. Made in Israel with LOVE
          </h1>
          <p>
            ONmacabim ist ein führender Hersteller von kosmezeutischen Hautpflegeprodukten in Israel. <br /> <br />

            Seit dem Jahr 2000 verwaltet das Unternehmen den gesamten Zyklus der Produktentwicklung: Kontrolle des Anbaus von Pflanzen aus der Judäischen Wüste, deren Sammlung und Verarbeitung, Rezepturentwicklung, Tests, Lizenzierung und Produktion mit modernsten Anlagen. <br /> <br />

            Eine der Stärken von ONmacabim ist seine vielfältige Produktpalette, die nahtlos zusammenarbeitet und von Spezialisten kombiniert werden kann, um klinische Ergebnisse zu erzielen. <br /> <br />

            Die Wirkstoffe sind Pflanzenextrakte, die durch geschützte Extraktionsverfahren in hoher Konzentration gewonnen werden. <br /> <br />

            Die Formulierungen der kosmetischen Mittel enthalten keine Mineralöle, künstlichen Farb- und Duftstoffe oder Bestandteile tierischen Ursprungs. Exklusive professionelle und häusliche Pflege, ausgewählt von einem Spezialisten, garantiert die gewünschten Ergebnisse in kürzester Zeit. <br /> <br />
          </p>
        </div>
      </div>

      <div className=''>

      </div>
    </section>
  )
}

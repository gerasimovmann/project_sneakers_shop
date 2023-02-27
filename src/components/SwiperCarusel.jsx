import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper'
import 'swiper/css'
import Button from './Button'
import style from '../App.module.scss'

const SwiperCarusel = () => {
  return (
    <section className={style.sectionCarusel}>
      <Swiper
        className={style.swiper}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation={true}
      >
        <SwiperSlide className={style.swiperSlide}>
          <img
            className={style.caruselSlideImgmini}
            src='img/carusel.png'
            alt=''
          />
          <div className={style.caruselTitle}>
            <h3>
              <span>Stan Smith</span>,
            </h3>
            <h3>Forever!</h3>
            <Button>КУПИТЬ</Button>
          </div>
          <img src='img/carusel_adidasSmith.png' alt='' />
        </SwiperSlide>
        <SwiperSlide className={style.swiperSlide}>
          <img
            className={style.caruselSlideImgmini}
            src='img/carusel.png'
            alt=''
          />
          <div className={style.caruselTitle}>
            <h3>
              <span>Stan Smith</span>,
            </h3>
            <h3>Forever!</h3>
            <Button>Купить</Button>
          </div>
          <img src='img/carusel_adidasSmith.png' alt='' />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default SwiperCarusel

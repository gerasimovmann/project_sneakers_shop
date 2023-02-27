import style from '../App.module.scss'
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineUser,
} from 'react-icons/ai'

const Header = ({ setIsDrawer, dataBasket, setDrawerIs }) => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.leftSide}>
          <img width={40} height={40} src='img/logo.png' alt='' />
          <div className={style.leftSideLogo}>
            <h2>GOOD SNEAKERS</h2>
            <h4>Удобство в выборе</h4>
          </div>
        </div>
        <div className={style.rightSide}>
          <div className={style.iconBasket}>
            <AiOutlineShoppingCart
              onClick={() => {
                setDrawerIs('basket')
                setIsDrawer(true)
                document.body.style.overflow = 'hidden'
              }}
              className='buttonSvg'
            />
            <span>
              {dataBasket.length === 0
                ? 0
                : dataBasket
                    .map((el) => el.price)
                    .reduce((acc, el) => acc + el, 0)}{' '}
              руб.
            </span>
          </div>
          <AiOutlineHeart
            className='buttonSvg'
            onClick={() => {
              setDrawerIs('favorite')
              setIsDrawer(true)
              document.body.style.overflow = 'hidden'
            }}
          />
          <AiOutlineUser className='buttonSvg' />
        </div>
      </div>
    </header>
  )
}

export default Header

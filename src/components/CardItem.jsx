import style from '../App.module.scss'
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlinePlus,
  AiFillHeart,
  AiOutlineCheck,
} from 'react-icons/ai'
import { useState } from 'react'
import { useEffect } from 'react'

const CardItem = ({
  dataCard,
  addBasket,
  dataBasket,
  updateDataFromBasket,
  updateDataFromFavorite,
  setDataBasket,
  setDataFavorite,
  dataFavorite,
}) => {
  const [statusBuy, setStatusBuy] = useState(dataCard.isBuy)
  const [statusFav, setStatusFav] = useState(dataCard.isFav)

  console.log(dataFavorite)
  console.log(statusFav)

  useEffect(() => {
    setStatusBuy(dataCard.isBuy)
  }, [dataCard])

  useEffect(() => {
    setStatusFav(dataCard.isFav)
  }, [dataCard])

  return (
    <div className={style.card}>
      <button
        className={
          !statusFav
            ? style.favoriteButton
            : `${style.favoriteButton} ${style.favoriteButtonActive}`
        }
        onClick={() => {
          setStatusFav((prev) => !prev) // состояние меняем
          setDataFavorite((prev) => [...prev, dataCard]) // добавляем в массив избранных
          statusFav === true && // сортируем если false
            setDataFavorite((prev) =>
              prev.filter((el) => el.id !== dataCard.id)
            )
          updateDataFromFavorite(dataCard, !statusFav) // Отправляем на сервер
        }}
      >
        {!statusFav ? <AiOutlineHeart /> : <AiFillHeart />}
      </button>
      <img src={dataCard.image} alt={dataCard.title} />
      <div className={style.cardTitle}>{dataCard.title}</div>
      <div className={style.priceAndButton}>
        <div className={style.price}>
          <span>ЦЕНА:</span>
          {dataCard.price} руб.
        </div>
        <div>
          <button
            disabled={statusBuy === true ? true : false}
            className={statusBuy ? style.buttonBuyActive : ''}
            onClick={() => {
              setStatusBuy(true)
              setDataBasket((prev) => [...prev, dataCard])
              updateDataFromBasket(dataCard, true)
            }}
          >
            {!statusBuy ? <AiOutlinePlus /> : <AiOutlineCheck />}
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardItem

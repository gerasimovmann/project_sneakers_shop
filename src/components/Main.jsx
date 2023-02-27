import style from '../App.module.scss'
import CardItem from '../components/CardItem'

import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlineSearch,
} from 'react-icons/ai'
import { useState } from 'react'

const Main = ({
  dataItems,
  addBasket,
  dataBasket,
  updateDataFromBasket,
  updateDataFromFavorite,
  setDataBasket,
  dataFavorite,
  setDataFavorite,
}) => {
  const [searchText, setSearchText] = useState('')

  const searchItems = (e) => {
    setSearchText(e.target.value)
  }

  return (
    <section className={style.sectionMain}>
      <div className={style.mainTitle}>
        <div>
          {searchText ? (
            <h1>{`Поиск по запросу: ${searchText}`}</h1>
          ) : (
            <h1>Все кроссовки</h1>
          )}
        </div>
        <div className={style.search}>
          <input
            onChange={(e) => searchItems(e)}
            placeholder='Поиск...'
            type='text'
            maxLength='20'
          />
          <AiOutlineSearch />
        </div>
      </div>
      <div className={style.cards}>
        {dataItems
          .filter((w) =>
            w.title.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((el, id) => (
            <CardItem
              dataCard={el}
              key={id}
              dataBasket={dataBasket}
              addBasket={addBasket}
              updateDataFromBasket={updateDataFromBasket}
              updateDataFromFavorite={updateDataFromFavorite}
              setDataBasket={setDataBasket}
              dataFavorite={dataFavorite}
              setDataFavorite={setDataFavorite}
            />
          ))}
      </div>
    </section>
  )
}

export default Main

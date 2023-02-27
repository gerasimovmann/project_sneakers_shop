import './App.scss'
import style from './App.module.scss'
import SwiperCarusel from './components/SwiperCarusel'
import Header from './components/Header'
import Main from './components/Main'
import Drawer from './components/Drawer'
import axios from 'axios'

import { useEffect, useState } from 'react'

function App() {
  const [dataItems, setDataItems] = useState([])
  const [dataBasket, setDataBasket] = useState([])
  const [dataFavorite, setDataFavorite] = useState([])
  const [isDrawer, setIsDrawer] = useState(false)
  const [drawerIs, setDrawerIs] = useState('')

  useEffect(() => {
    axios
      .get('https://63ea2c93e0ac9368d64bfa74.mockapi.io/dataItems')
      .then((res) => setDataItems(res.data))
    console.log('set is done')
  }, [])

  useEffect(() => {
    axios
      .get('https://63ea2c93e0ac9368d64bfa74.mockapi.io/dataItems')
      .then((res) => setDataBasket(res.data.filter((el) => el.isBuy === true)))
  }, [])

  useEffect(() => {
    axios
      .get('https://63ea2c93e0ac9368d64bfa74.mockapi.io/dataItems')
      .then((res) =>
        setDataFavorite(res.data.filter((el) => el.isFav === true))
      )
  }, [])

  const updateDataFromBasket = (obj, stateBuy) => {
    axios.put(
      `https://63ea2c93e0ac9368d64bfa74.mockapi.io/dataItems/${obj.id}`,
      {
        isBuy: stateBuy,
      }
    )
  }

  const updateDataFromFav = (obj, stateFav) => {
    axios.put(
      `https://63ea2c93e0ac9368d64bfa74.mockapi.io/dataItems/${obj.id}`,
      {
        isFav: stateFav,
      }
    )
  }

  const deleteFromDrawer = (obj) => {
    setDataItems((prev) =>
      prev.map((el) => (el.id === obj.id ? { ...el, isBuy: false } : el))
    )
  }

  const deleteFromDrawerFav = (obj) => {
    setDataItems((prev) =>
      prev.map((el) => (el.id === obj.id ? { ...el, isFav: false } : el))
    )
  }

  const updateDataFromFavorite = (obj, stateFav) => {
    axios.put(
      `https://63ea2c93e0ac9368d64bfa74.mockapi.io/dataItems/${obj.id}`,
      {
        isFav: stateFav,
      }
    )
  }

  useEffect(() => {
    console.log(drawerIs)
  }, [drawerIs])

  return (
    <div
      className={
        isDrawer ? `${style.wrapper} ${style.overflowH}` : style.wrapper
      }
    >
      <Header
        setDrawerIs={setDrawerIs}
        setIsDrawer={setIsDrawer}
        dataBasket={dataBasket}
      />
      <Drawer
        drawerIs={drawerIs}
        setDrawerIs={setDrawerIs}
        setIsDrawer={setIsDrawer}
        isDrawer={isDrawer}
        dataBasket={dataBasket}
        dataItems={dataItems}
        setDataBasket={setDataBasket}
        updateDataFromBasket={updateDataFromBasket}
        updateDataFromFav={updateDataFromFav}
        deleteFromDrawer={deleteFromDrawer}
        deleteFromDrawerFav={deleteFromDrawerFav}
        dataFavorite={dataFavorite}
        setDataFavorite={setDataFavorite}
      />
      <SwiperCarusel />
      <Main
        dataItems={dataItems}
        dataBasket={dataBasket}
        dataFavorite={dataFavorite}
        setDataItems={setDataItems}
        setDataFavorite={setDataFavorite}
        updateDataFromFav={updateDataFromFav}
        updateDataFromBasket={updateDataFromBasket}
        updateDataFromFavorite={updateDataFromFavorite}
        setDataBasket={setDataBasket}
      />
    </div>
  )
}

export default App

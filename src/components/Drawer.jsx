import React from 'react'
import { useState } from 'react'
import {
  AiOutlineClose,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
} from 'react-icons/ai'
import Button from './Button'
import style from '../App.module.scss'

const Drawer = ({
  dataBasket,
  isDrawer,
  setIsDrawer,
  dataItems,
  setDataBasket,
  updateDataFromBasket,
  deleteFromDrawer,
  setDrawerIs,
  drawerIs,
  deleteFromDrawerFav,
  updateDataFromFav,
  dataFavorite,
  setDataFavorite,
}) => {
  // 'basket', favorite
  // console.log(dataItems)
  console.log(drawerIs)
  return (
    <div
      className={
        !isDrawer
          ? style.drawerOverlay
          : `${style.drawerOverlayActive} ${style.drawerOverlay}`
      }
      onClick={(e) => {
        if (e.currentTarget === e.target) {
          setIsDrawer(false)
          document.body.style.overflow = 'auto'
        }
      }}
    >
      <div
        className={
          !isDrawer
            ? style.drawerBlock
            : `${style.drawerBlockActive} ${style.drawerBlock}`
        }
      >
        <div className={style.drawerTitleAndButton}>
          <div className={style.drawerTitle}>
            {/* logic of title */}

            {drawerIs === 'basket'
              ? dataBasket.length === 0
                ? ''
                : 'Корзина'
              : ''}
            {drawerIs === 'favorite'
              ? dataFavorite.length === 0
                ? ''
                : 'Избранное'
              : ''}
          </div>

          <button
            onClick={() => {
              setIsDrawer(false)
              setDrawerIs('')
              document.body.style.overflow = 'auto'
            }}
            className={style.removeButton}
          >
            <AiOutlineClose />
          </button>
        </div>
        <div className={style.drawerBodyAndFooter}>
          {/* logic of types drawer */}

          {drawerIs === 'basket' ? (
            <>
              {dataBasket.length === 0 ? (
                <div className={style.emptyBasket}>
                  <img src='img/emptyBasket.png' alt='' />
                  <div className={style.emptyBasketTitle}>
                    <h4>Корзина пустая</h4>
                    <p>
                      Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
                    </p>
                  </div>
                  <Button
                    onClick={() => {
                      setIsDrawer(false)
                      setDrawerIs('')
                      document.body.style.overflow = 'auto'
                    }}
                  >
                    <AiOutlineArrowLeft />
                    Вернуться назад
                  </Button>
                </div>
              ) : (
                <>
                  <div className={style.drawerBody}>
                    {dataBasket.map((el) => {
                      return (
                        <div key={el.id} className={style.drawerCard}>
                          <img src={el.image} alt='' />
                          <div className={style.drawerCardPrice}>
                            <div className={style.title}>{el.title}</div>
                            <div className={style.price}>{el.price} руб.</div>
                          </div>
                          <button
                            onClick={() => {
                              setDataBasket((prev) =>
                                prev.filter((elFilt) => elFilt.id !== el.id)
                              )
                              updateDataFromBasket(el, false)
                              deleteFromDrawer(el, false)
                            }}
                            className={style.removeButton}
                          >
                            <AiOutlineClose />
                          </button>
                        </div>
                      )
                    })}
                  </div>
                  <div className={style.drawerFooter}>
                    <div className={style.drawerFooterItems}>
                      Итого: <div className={style.dash}></div>{' '}
                      <span>
                        {dataBasket
                          .map((el) => el.price)
                          .reduce((acc, el) => acc + el, 0)}{' '}
                        руб.
                      </span>
                    </div>
                    <div className={style.drawerFooterItems}>
                      Налог 5%: <div className={style.dash}></div>
                      <span>
                        {Math.trunc(
                          (dataBasket
                            .map((el) => el.price)
                            .reduce((acc, el) => acc + el, 0) *
                            5) /
                            100
                        )}{' '}
                        руб.
                      </span>
                    </div>

                    <Button>
                      Оформить заказ <AiOutlineArrowRight />
                    </Button>
                  </div>
                </>
              )}
            </>
          ) : dataFavorite.length === 0 ? (
            <>
              <div className={style.emptyBasket}>
                <img src='img/favimg.png' alt='' />
                <div className={style.emptyBasketTitle}>
                  <h4>{`Закладок нет :(`}</h4>
                  <p>Вы ничего не добавляли в закладки.</p>
                </div>
                <Button
                  onClick={() => {
                    setIsDrawer(false)
                    setDrawerIs('')
                    document.body.style.overflow = 'auto'
                  }}
                >
                  <AiOutlineArrowLeft />
                  Вернуться назад
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className={style.drawerBody}>
                {dataFavorite.map((el) => {
                  return (
                    <div key={el.id} className={style.drawerCard}>
                      <img src={el.image} alt='' />
                      <div className={style.drawerCardPrice}>
                        <div className={style.title}>{el.title}</div>
                        <div className={style.price}>{el.price} руб.</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Drawer

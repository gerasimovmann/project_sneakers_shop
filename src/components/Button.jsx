import style from './Button.module.scss'
const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={style.buttonGreen}>
      {children}
    </button>
  )
}

export default Button

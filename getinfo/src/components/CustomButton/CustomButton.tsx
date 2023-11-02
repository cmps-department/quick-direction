import React, { FC, PropsWithChildren } from "react"
import styles from './button.module.scss'

interface IButton {
  onClick: React.MouseEventHandler,
  className?: string
}

const CustomButton: FC<PropsWithChildren<IButton>> = ({ children, onClick, className = '' }) => {
  return (
    <button className={`${styles.customBtn} ${className}`} onClick={onClick}>{children}</button>
  )
}

export default CustomButton

import React, { FC, PropsWithChildren } from "react"
import styles from './button.module.scss'
import { Button } from "@mantine/core"

interface IButton {
  onClick: React.MouseEventHandler,
  className?: string,
  style?: React.CSSProperties
}

const CustomButton: FC<PropsWithChildren<IButton>> = ({ children, onClick, className = '', style }) => {
  return (
    <Button className={`${styles.customBtn} ${className}`} style={style} onClick={onClick}>{children}</Button>
  )
}

export default CustomButton

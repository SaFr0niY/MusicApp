import Image from "next/image"
import styles from "../ui/ui.module.css"

export const Cover = ({src}) =>{
    return(
        <image src={src} alt="обложка"/>
    )
}

export const Title = ({children}) =>{
    return(
        <span classname={styles.title}>{children}</span>
    )
}

export const Artist = ({nickName}) =>{
    return(
        <p>{nickName}</p>
    )
}

export const Duration = ({duration}) =>{
    return(
        <span>{duration}</span>
    )
}
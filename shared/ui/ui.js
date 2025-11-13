import Image from "next/image"

export const Cover = ({src}) =>{
    return(
        <image src={src} alt="обложка"/>
    )
}

export const Title = ({children}) =>{
    return(
        <span>{Children}</span>
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
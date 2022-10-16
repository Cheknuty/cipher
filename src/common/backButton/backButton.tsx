import { BackButtonWrapper } from "./backButton.style";
import { useNavigate } from "react-router-dom"
interface IBackButton {
    width?: string;
    height?: string;
    color: string
}
export function BackButton({width, height, color}: IBackButton) {
    const nav = useNavigate() 
    return (
        <BackButtonWrapper onClick={() => nav(-1)}>
            <svg stroke={color} fill={color} strokeWidth="0" viewBox="0 0 512 512" height={height} width={width} xmlns="http://www.w3.org/2000/svg">
                <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M244 400L100 256l144-144M120 256h292"></path>
            </svg>
        </BackButtonWrapper>
    )
}
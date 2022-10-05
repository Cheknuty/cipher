import React from "react";
import { ContainerWrapper } from "./container.style";

interface IContainer {
    children: React.ReactNode | React.ReactNode[]
}
export function Container({children}: IContainer) {
    return (
        <ContainerWrapper id="container">{children}</ContainerWrapper>
    )
}
import { JSX, ReactElement } from "react";

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface Props {
    product: Product
    children?: ReactElement | ReactElement[]
}

export interface ProductCardContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
}

export interface ProductCardHOCProps {
    ({ children, product }: Props): JSX.Element;
    Title: ({ title }: { title: string; }) => JSX.Element;
    Image: ({ img }: { img?: string | undefined; }) => JSX.Element;
    Buttons: () => JSX.Element
}
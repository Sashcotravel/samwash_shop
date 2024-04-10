import React from "react";
import Head from "./head";

export default function ShopLayout({children}){
    return (
        <React.Fragment>
            <Head />
            { children }
        </React.Fragment>
    )
}
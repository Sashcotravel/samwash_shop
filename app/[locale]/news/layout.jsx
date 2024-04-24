"use client"

import React, {useState} from "react";
import {useLocale} from "next-intl";
import {useParams} from "next/navigation";
import axios from "axios";

export default function ContactsLayout({children}){

    const locale = useLocale();
    const {id} = useParams();
    const [article, setArticleOne] = useState([])

    if(article.length === 0){
        axios
            .get(`https://cb.samwash.ua/api/v1/blog/${locale === "en" ? "en" : locale === "ru" ? "ru" : "ua"}/${id}`)
            .then(res => {
                const data = res.data.data
                setArticleOne(data)
            })
    }

    return (
        <React.Fragment>
            <title>{article.length !== 0 ? article?.content[0]?.title?.slice(0, 60) : ''}</title>
            <meta name="description" content={article.length !== 0 ?
                article?.content[0]?.description?.slice(0, 160) : ''} />
            <meta property="og:title" content={article.length !== 0 ? article?.content[0]?.title?.slice(0, 60) : ''} />
            <meta property="og:description" content={article.length !== 0 ?
                article?.content[0]?.description?.slice(0, 160) : ''} />
            <link hrefLang="en-UA" href={`https://samwash.ua/en/blog/${article?.type}/${article?.slug}`} rel="alternate"/>
            <link hrefLang="ru-UA" href={`https://samwash.ua/ru/blog/${article?.type}/${article?.slug}`} rel="alternate"/>
            <link hrefLang="uk-UA" href={`https://samwash.ua/blog/${article?.type}/${article?.slug}`} rel="alternate"/>
            <link rel="apple-touch-icon" href={article.length !== 0 ? 'https://cb.samwash.ua/storage/image/'
                + article.id + '/' + article.images[0].path : ''} />
            <meta property="og:image" content={article.length !== 0 ? 'https://cb.samwash.ua/storage/image/'
                + article.id + '/' + article.images[0].path : ''} />
            {children}
        </React.Fragment>
    )
}
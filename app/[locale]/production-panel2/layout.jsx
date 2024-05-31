import React from "react";

export default async function ContactsLayout({ children }){

    // const t = useTranslations("contact");
    // const { t, resources } = await initTranslations(locale);

    return (
        <React.Fragment>
            <title>3 сторінка</title>
            <meta name="description" content='3 сторінка' />
            <meta property="og:title" content='3 сторінка' />
            <meta property="og:description" content='3 сторінка' />
            <link rel="apple-touch-icon" href='/logo144.png'/>
            <meta property="og:image" content='/logo144.png'/>
            <link hrefLang="en-UA" href="https://samwash.ua/en/production-panel" rel="alternate"/>
            <link hrefLang="ru-UA" href="https://samwash.ua/ru/production-panel" rel="alternate"/>
            <link hrefLang="uk-UA" href="https://samwash.ua/production-panel" rel="alternate"/>
            {children}
        </React.Fragment>
    )
}
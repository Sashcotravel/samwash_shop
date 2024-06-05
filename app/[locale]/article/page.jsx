"use client"

import s from './newsOnePage.module.css'
import {useLocale, useTranslations} from "next-intl";
import {useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import axios from "axios";
import Link from "next-intl/link";
import Image from "next/image";
import {Fancybox} from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import TopButton from "@/app/component/topButton/topButton";


const getData = ((id, locale, article, setArticleOne, setTreeBlock) => {
    if (article?.length === 0) {
        if (id !== undefined) {
            axios
                // .get(`https://cb.samwash.ua/api/v1/blog/ua/${id}`)
                .get(`${process.env.NEXT_PUBLIC_URL_API}blog/${locale === "en" ? "en" : locale === "ru" ? "ru" : "ua"}/${id}`)
                .then(res => {
                    const data = res.data.data
                    setArticleOne(data)
                    window.scrollTo(0, 0)
                })
            axios
                // .get(`https://cb.samwash.ua/api/v1/blog/ua?perPage=3`)
                .get(`${process.env.NEXT_PUBLIC_URL_API}blog/${locale === "en" ? "en" : locale === "ru" ? "ru" : "ua"}?perPage=3`)
                .then(res => {
                    const data = res.data.data.data
                    setTreeBlock(data)
                })
        }
    } else {
        return article
    }
})

function NewsOnePage() {

    const t = useTranslations("blog");
    const locale = useLocale();
    const searchParams = useSearchParams()
    let id = searchParams.get('article')
    const [article, setArticleOne] = useState([])
    const [threeBlock, setTreeBlock] = useState([])


    Fancybox.bind('[data-fancybox="gallery"]', {
        Thumbs: {Carousel: {fill: false, center: true,},},
    });

    useEffect(() => {
        getData(id, locale, article, setArticleOne, setTreeBlock)
    }, [article]);


    return (
        <div style={{overflow: 'hidden'}}>

            <TopButton index={4} />

            {article.length !== 0 ? <>

                <section className={s.sectionBread}>
                    <div className='main-container'>
                        <ul className={`bread-crumbs ${s.crambs}`}>
                            <li style={{marginLeft: '0'}}>
                                <Link href='/'>{t("blog1")}</Link>
                            </li>
                            <li>
                                <Link href='/blog'>{t("blog2")}</Link>
                            </li>
                            <li>
                                {article?.content[0]?.title}
                            </li>
                        </ul>
                    </div>
                </section>

                <section className={s.blog_post}>
                    <div className={s.container_blog}>
                        <div className={s.row}>
                            <div className={s.date_column}>
                                <div className={s.date_box}>
                                    <span className={s.date_day}>{article?.start_date_time.slice(8, 10)}</span>
                                    <span className={s.data_month_n_year}>{article?.start_date_time.slice(5, 7)}
                                        {` ${article?.start_date_time.slice(0, 4)}`}</span>
                                </div>
                            </div>
                            <div className={s.entry_column}
                                 dangerouslySetInnerHTML={{__html: article?.content[0]?.description}}>
                            </div>
                            <div className={s.sidebar_posts}>
                                <div className={s.sidebar_start}>
                                    <div className={s.type_wrapper}>
                                        <p>НЕЩОДАВНО ДОДАНІ ЗАПИСИ</p>
                                    </div>
                                    {
                                        threeBlock?.map(item => {

                                            return (
                                                <div className={s.post} key={item.id}>
                                                    <Image src={'https://cb.samwash.ua/storage/image/'
                                                        + item.id + '/' + item.images[0]?.path}
                                                           alt={item?.content[0]?.title}
                                                           width={400} height={400} />
                                                    <p className={s.date}>{item?.start_date_time.replace(/-/g, ".").slice(0, 10)}</p>
                                                    {
                                                        item.type === "news"
                                                            ? <span style={{backgroundColor: "#b217aa"}}>Новина</span>
                                                            : <span style={{backgroundColor: "#e2001a"}}>Стаття</span>
                                                    }
                                                    <p className={s.title}>
                                                        {
                                                            item?.content[0]?.title.length > 40
                                                                ? item?.content[0]?.title.slice(0, 30) + '...'
                                                                : item?.content[0]?.title
                                                        }
                                                    </p>
                                                    {/*<WhiteWithoutHover text={'readMore'} clas={'addBut'}*/}
                                                    {/*                   link={`/blog/${item.type}/${item.slug}`} />*/}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={s.section_margin_bottom_small}>
                    <div className='main-container'>

                        <div className={s.gallery_reel_wrapper}>
                            {
                                article.images.map((item) => {

                                    return (
                                        <div className={`${s.gallery_reel_item}`} key={item.id}>
                                            <a data-fancybox="gallery" href={'https://cb.samwash.ua/storage/image/'
                                                + article.id + '/' + item.path}>
                                                <Image src={'https://cb.samwash.ua/storage/image/'
                                                    + article.id + '/' + item.path} alt='' width={500} height={500} />
                                            </a>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>

            </> : <p>Loading...</p>}
        </div>
    );
}

export default NewsOnePage;
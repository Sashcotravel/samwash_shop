"use client"

import s from './contact.module.css';
import {BiMapAlt} from "react-icons/bi";
import {useEffect, useState} from "react";
import axios from "axios";
import {useLocale, useTranslations} from "next-intl";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import Link from "next-intl/link";


const getData = ((locale, articleAll, setArticleAll, setResTrue) => {
    if (articleAll?.length === 0) {
        axios
            .get(`https://cb.samwash.ua/api/v1/blog/ua?perPage=10000`)
            // .get(`https://cb.samwash.ua/api/v1/blog/${locale === 'en' ? 'en' : locale === 'ru' ? 'ru' : 'ua'}?perPage=10000`)
            .then(res => {
                const data = res.data.data.data
                let news = []
                data.forEach(item => {
                    if(item.type === 'news'){
                        news.push(item)
                    }
                })
                setArticleAll(news)
                setResTrue(true)
            })
    }
    else {
        return articleAll
    }
})


function Contact() {

    const t = useTranslations("blog");

    const locale = useLocale();
    const [resTrue, setResTrue] = useState(false)
    const [click1, setClick1] = useState(false)
    const [click2, setClick2] = useState(false)
    const [click3, setClick3] = useState(false)
    const [cat, setCat] = useState('Новини')
    const [cat2, setCat2] = useState('')
    const [cat3, setCat3] = useState('')
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    let paginatedData = []
    const [articleAll, setArticleAll] = useState([])
    let pageUrl = searchParams.get('page') || 1


    const main = () => {
        // if(articleAll?.length !== 0) return
        const postsData = articleAll
        let currentPage = Number(pageUrl)
        let rows = 12;

        function displayList(arrData, rowPerPage, page) {
            const postsEl = document.getElementById('posts');
            postsEl.innerHTML = "";
            page--;

            const start = rowPerPage * page;
            const end = start + rowPerPage;
            paginatedData = arrData?.slice(start, end);
            if (paginatedData?.length === 0) {
                paginatedData = arrData?.slice(0, 6);
            }
            setArticleAll(paginatedData)
        }

        function displayPagination(arrData, rowPerPage) {
            const paginationEl = document.getElementById('pagination');
            const pagesCount = Math.ceil(arrData.length / rowPerPage);
            if (pagesCount < Number(pageUrl)) {
                router.push(pathname + '?page=' + 1)
                currentPage = 1
            }
            const ulEl = document.createElement("ul");
            ulEl.classList.add(s['pagination__list']);

            for (let i = 0; i < pagesCount; i++) {
                const liEl = displayPaginationBtn(i + 1);
                ulEl.appendChild(liEl)
            }
            paginationEl.appendChild(ulEl)
        }

        function displayPaginationBtn(page) {
            const liEl = document.createElement("li");
            liEl.classList.add(s['pagination__item'])
            liEl.innerText = page
            const pagesCount = Math.ceil(postsData.length / rows);

            if (currentPage === page) {
                if(Number(currentPage) === 1){
                    liEl.classList.add(s['pagination__item__active_first']);
                }
                else if (Number(pagesCount) === Number(currentPage)){
                    liEl.classList.add(s['pagination__item__active_end']);
                }

                liEl.classList.add(s['pagination__item__active']);
                liEl.id = 'pagination__item__active'
            }

            liEl.addEventListener('click', () => {
                window.scrollTo(0, 0);
                currentPage = page
                displayList(postsData, rows, currentPage)

                let currentItemLi = document.getElementById('pagination__item__active');

                router.push(pathname + '?page=' + page)

                currentItemLi.classList.remove(s['pagination__item__active']);
                if(Number(currentItemLi?.textContent) === 1){
                    currentItemLi.classList.remove(s['pagination__item__active_first']);
                }
                currentItemLi.id = ''

                if(Number(currentPage) === 1){
                    liEl.classList.add(s['pagination__item__active_first']);
                } else if (Number(pagesCount) === Number(currentPage)){
                    liEl.classList.add(s['pagination__item__active_end']);
                }
                liEl.classList.add(s['pagination__item__active']);
                liEl.id = 'pagination__item__active'
            })

            return liEl;
        }

        displayList(postsData, rows, currentPage);
        displayPagination(postsData, rows);
    }

    useEffect(() => {
        getData(locale, articleAll, setArticleAll, setResTrue)
        if(resTrue){
            window.scrollTo(0, 0)
            main()
        }
    }, [resTrue]);


    return (
        <div className={s.mainDiv}>

            <h1>
                <BiMapAlt/>
                Новини
            </h1>

            <div className={s.divBlocks}>
                {
                    articleAll?.map(item => {
                        // console.log(item)

                        return (
                            <div className={s.item} key={item.id}>
                                <img src={'https://cb.samwash.ua/storage/image/' + item.id +'/'+ item.images[0]?.path}
                                       alt={item?.content[0]?.title} />
                                <h2>{item?.content[0]?.title}</h2>
                                <time>{item?.start_date_time.replace(/-/g, ".").slice(0, 10)}</time>
                                <p dangerouslySetInnerHTML={{__html: item?.content[0]?.description.slice(0, 160)}} />
                                <Link href={`/news?news=${item.slug}`}>читати далі {' >>'}</Link>
                            </div>
                        )
                    })
                }
            </div>

            <div className={s.search_navigation}>
                <div id="posts" className={s.articleBlog}></div>
                <div id="pagination" className={s.pagination}></div>
            </div>

        </div>
    );
}

export default Contact;
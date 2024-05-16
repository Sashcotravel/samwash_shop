"use client"

import Link from "next-intl/link";
import {useEffect, useState} from "react";
import s from '../chemical-means/catalog.module.css';
import {AiOutlineHome} from "react-icons/ai";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useTranslations} from "next-intl";
import {useStore} from "@/store/store";
import Image from "next/image";
import {AiOutlineClose} from "react-icons/ai";
import {AiOutlineCheck} from "react-icons/ai";
import {FaBasketShopping} from "react-icons/fa6";
import NavProduct2 from "@/app/component/navProduct2/navProduct2";
import TopButton from "@/app/component/topButton/topButton";

const arrGoods = [
    {
        id: '391',
        title: 'Насадка 1/4" GZ 40 05 (62150)',
        code: 'DYS-RM-40-05',
        price: '31.43',
        newPrice: '',
        size: 1,
        slug: 'goods18-1',
        img: '/weapons/1.jpg',
        imageShow: ['/weapons/1.jpg', ],
        description: '',
        descriptionPrise: '',
        bread1: {
            title: 'Зброя та аксесуари',
            slug: '/weapons-and-accessories',
        },
        bread2: {
            title: '',
            slug: '/weapons-and-accessories/',
        },
        bread3: '',
        descriptionMin: '',
        weight: '',
        codeEAN: '',
        descriptionFull: `
         <p>Розігрівач</p><br/>
        `
    },
]

const arrChildCatalog = [
    {
        slug: '/weapons-and-accessories/equipment',
        title: 'Обладнання',
    },
    {
        slug: '/weapons-and-accessories/equipment/accessories-for-brushes',
        title: 'Аксесуари для щіток',
    },
    {
        slug: '/weapons-and-accessories/equipment/nozzles-and-covers',
        title: 'Насадки і кришки',
    },
    {
        slug: '/weapons-and-accessories/equipment/spears',
        title: 'Списи',
    },
    {
        slug: '/weapons-and-accessories/equipment/repair-kits',
        title: 'Ремонтні комплекти',
    },
    {
        slug: '/weapons-and-accessories/guns-and-brushes',
        title: 'Рушниці та щітки'
    },
    {
        slug: '/weapons-and-accessories/lance-scabbards',
        title: 'Лансові піхви'
    },
]


function ChemicalMeans() {

    const t = useTranslations();

    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [goods, setGoods] = useState([])

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    let paginatedData = []

    let pageUrl = searchParams.get('page') || 1

    const addOrderStore = useStore(store => store.addOrder)

    const main = () => {
        const postsData = arrGoods
        let currentPage = Number(pageUrl)
        let rows = 20;

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
            setGoods(paginatedData)
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
                if (Number(currentPage) === 1) {
                    liEl.classList.add(s['pagination__item__active_first']);
                } else if (Number(pagesCount) === Number(currentPage)) {
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
                if (Number(currentItemLi?.textContent) === 1) {
                    currentItemLi.classList.remove(s['pagination__item__active_first']);
                }
                currentItemLi.id = ''

                if (Number(currentPage) === 1) {
                    liEl.classList.add(s['pagination__item__active_first']);
                } else if (Number(pagesCount) === Number(currentPage)) {
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
        main()
    }, []);

    const style = {
        cursor: 'default',
        color: '#DDDDDD',
        background: '#f4f4f4'
    }

    const addCol = (item) => {
        goods.map((goods) => {
            if (goods.id === item.id) {
                setGoods(prev => {
                    return prev.map(good => {
                        if (good.id === item.id) {
                            return {...good, size: good.size + 1};
                        } else {
                            return good;
                        }
                    });
                });
            }
        })
    }

    const minesCol = (item) => {
        goods.map((goods) => {
            if (goods.id === item.id) {
                setGoods(prev => {
                    return prev.map(good => {
                        if (good.id === item.id) {
                            return {...good, size: good.size !== 1 ? good.size - 1 : good.size};
                        } else {
                            return good;
                        }
                    });
                });
            }
        })
    }

    const addOrder = (item) => {
        addOrderStore(item)
        goods.map((goods) => {
            if (goods.id === item.id) {
                setGoods(prev => {
                    return prev.map(good => {
                        if (good.id === item.id) {
                            return {...good, size: 1};
                        } else {
                            return good;
                        }
                    });
                });
            }
        })
        setOpen(true)
    }


    return (
        <div className={s.mainDiv}>

            <TopButton index={4}/>

            <NavProduct2 child={arrChildCatalog} back={'/product'}/>

            {/*    <h2 className='loadingMainDiv'>Товарів не знайдено</h2>*/}

            <div className={s.divProduct}>
                <div className={s.wrapper}>

                    <div className={s.breadcrumbs}>
                        <div className={s.crumbs}>
                            <ul>
                                <li>
                                    <Link href='/'>
                                        <AiOutlineHome/>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/product'> Продукти</Link>
                                </li>
                                <li>
                                    <span> Зброя та аксесуари</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h1>Зброя та аксесуари</h1>
                    <div>
                        Кожна автомийка використовує пістолети під тиском. Вони прості у використанні, що позитивно
                        сприймається водіями. Однак для того, щоб такий пістолет працював довго, а власник мийки не
                        втрачав гроші на постійне обслуговування обладнання, необхідно використовувати комплектуючі для
                        мийок високого тиску, які (завдяки змінним частинам). ) може подовжити термін служби машин.
                    </div>

                    <ul className={s.ulCategory}>
                        {
                            goods?.map((item, index) => {
                                return <div className={s.goods_wrapper} key={item.id}>
                                    <Link href={`/goods?goods=${item.slug}`}></Link>
                                    <div>
                                        <div className={s.imageGoods}>
                                            {
                                                item.img.length === 0 ?
                                                    <img src='/other/noImage.jpg' alt='no image'/>
                                                    : <img src={item.img} alt={item.title}/>
                                            }
                                        </div>
                                        <p className={s.goodsTitle}>{item.title}</p>
                                        <p className={s.client_code}>Код виробника: <b>{item?.code}</b></p>
                                        <p className={s.description}>{item?.description}</p>
                                    </div>
                                    <div className={s.div_price}>
                                        {item.newPrice && <span className={s.oldPrise}><del>{item.price} доларів</del></span>}
                                        {!item.newPrice && <span>{item.price} доларів</span>}
                                        {item.newPrice && <span>{item.newPrice} доларів</span>}
                                        <div className={s.divPrice}>
                                            <span className={s.client_code}>{item?.descriptionPrise}</span>
                                        </div>
                                    </div>
                                    <div className={s.add}>
                                        <div className={s.div_col + ' ' + s.div_col2}>
                                            <div className={s.div_col}>
                                                <button onClick={() => minesCol(item)}
                                                        disabled={item.size === 1}
                                                        style={item.size === 1 ? style : undefined}
                                                >-
                                                </button>
                                                <p>{item.size}</p>
                                                <button onClick={() => addCol(item)}>+</button>
                                                <span>шт.</span>
                                            </div>
                                        </div>
                                        <button className={s.add_but} onClick={() => addOrder(item)}>
                                            <Image src='/header/basket-gray.png' alt='search' width={30}
                                                   height={30}/>
                                            Додати до<br/> Кошика
                                        </button>
                                    </div>
                                </div>
                            })
                        }
                    </ul>

                    <div className={s.search_navigation}>
                        <div id="posts" className={s.articleBlog}></div>
                        <div id="pagination" className={s.pagination}></div>
                    </div>

                    <div className={s.descDiv}>
                        <Image src='/weapons/main.jpg' alt='Хімічні засоби' width={500} height={500}/>
                        <div className={s.descDesc}>
                            <p>
                                Безконтактні, або високонапірні, автомийки складаються з безлічі менших елементів,
                                які можна замінити, що запобігає повному пошкодженню обладнання.
                            </p> <br/>
                            <p>
                                Варто пам'ятати, що несправний омивач блокує роботу всієї станції. При пошкодженій
                                техніці власник втрачає вдвічі більше — він не тільки не може заробити гроші в реальному
                                часі, але ще й ремонтує техніку, що тягне за собою витрати. Щоб запобігти подібним
                                ситуаціям, необхідно періодично перевіряти всі частини омивачів і замінювати ті, які
                                пошкоджені або втратили свої функціональні властивості.
                            </p> <br/>
                            <p onClick={() => setOpen2(prev => !prev)}
                               style={{cursor: 'pointer'}}>
                                читати далі
                                <Image alt="arrow up" loading="lazy" width={16} height={16}
                                       className={s.imgArrowManu}
                                       style={open2 ? {transform: 'rotate(180deg)'} : undefined}
                                       src="/header/flug/arrow-down.svg"/>
                            </p>
                            <div className={s.readMore} style={open2 ? {display: 'block'} : undefined}>
                                <p>Нижче наведено деякі з найважливіших частин мийки високого тиску:</p> <br/>
                                <p>
                                    Насадки - вони необхідні для очищення поверхонь від різного роду забруднень і
                                    плям.<br/>
                                    Шланги - з'єднують двигун з іншими частинами машини (форсунка, корпус насоса), також
                                    служать каналом подачі води в процесі прання.<br/>
                                    Списи як продовження рушниці. Завдяки їм зручність користування обладнанням набагато
                                    більше.<br/>
                                </p> <br/>
                                <p>
                                    Однак до найпоширеніших поломок, викликаних пошкодженням одного з компонентів
                                    пральної машини, відносяться: протікання через неякісні ущільнення і пов'язані з
                                    ними пошкодження, а також пошкодження, викликані тривалою роботою в забрудненому
                                    середовищі. На жаль, неправильно обслуговуване обладнання швидко псується, вимагаючи
                                    ремонту або (зрештою) заміни.
                                </p> <br/>
                                <h2>Плоска насадка для пінопласту</h2> <br/>
                                <p>
                                    Одним з найцікавіших предметів цієї категорії є насадка для плоского пінопласту.
                                    Хоча це не обов'язковий елемент, який впливає на роботу обладнання, це те, що
                                    ефективно полегшує використання зброї.
                                </p> <br/>
                                <p>
                                    Пінна насадка забезпечує легке нанесення без зміни правильного положення ствола
                                    пістолета. Його можна використовувати з будь-яким типом приготування піни, включаючи
                                    ті, які були попередньо змішані з водою. Це особливо корисно при нанесенні піни на
                                    боковини або стелю автомобіля, а також при роботі на великих поверхнях (наприклад,
                                    вантажівки, причепи). Додатково, при необхідності, його можна використовувати як
                                    стандартну насадку.
                                </p> <br/>
                                <p>
                                    У нашій пропозиції є безліч пінопластових насадок, які зроблять роботу на вашій
                                    автомийці більш ефективною. Однією з них є насадка для піни 200075401 - 1,05 мм, яку
                                    можна використовувати для пістолета для піни та турбощітки. Ціни на такі насадки
                                    починаються від 30 злотих брутто. Порівняно з реальними витратами на ремонт всього
                                    обладнання, економити на аксесуарах для мийки високого тиску не варто. Постійне
                                    технічне обслуговування та регулярна заміна деталей, безумовно, більш вигідні в
                                    довгостроковій перспективі.
                                </p> <br/>
                                <h2>Аксесуари для омивачів від автомийки SamWash</h2> <br/>
                                <p>
                                    У цій категорії ви знайдете запчастини для мийок високого тиску від кращих
                                    виробників. Ви можете довіряти нам у виборі аксесуарів, адже ми вже багато років
                                    підтримуємо власників автомийок. Завдяки досвіду, який ми здобули протягом багатьох
                                    років, ми можемо пристосувати нашу пропозицію до всіх вимог клієнтів.
                                </p> <br/>
                                <p>
                                    Ми чудово знаємо, наскільки специфікою є автомийний бізнес. Багато водіїв не
                                    розуміють, що власникам доводиться нести багато «невидимих» витрат. Один із них –
                                    фінансування обладнання. Водії вимагають від власників низьких цін при збереженні
                                    високої якості наданих послуг. Ми знаємо, що домовитися між власниками автомийки та
                                    водіями можливо лише за умови використання першими надійного обладнання. Його
                                    постійну роботу забезпечують запчастини до мийок високого тиску.
                                </p> <br/>
                                <p>
                                    Запрошуємо вас ознайомитися з повним асортиментом цієї категорії. Аксесуари для
                                    мийки високого тиску включають: згадані вище форсунки, пінні форсунки, форсунки
                                    високого тиску з меншим потоком або сталеві губки для пістолетів. Це також місце, де
                                    ви можете вибрати найкращі фурми (наприклад, з нержавіючої сталі та теплозахисний
                                    екран), кришки сопел і цілі набори для ремонту пістолетів.
                                </p> <br/>
                                <p>
                                    Такий широкий асортимент аксесуарів для пральних машин означає, що кожен знайде саме
                                    те, що шукає. Якщо ви є власником автомийки або плануєте відкрити власну справу в
                                    цій галузі, звертайтеся до нас. Автомийка BKF успішно працює в цій сфері вже кілька
                                    років і надає всім нашим клієнтам найкращий сервіс. Ми представляємо якісне
                                    обладнання для мийки, особливу увагу приділяємо підбору аксесуарів. Той факт, що ми
                                    є одним із провідних гравців на цьому ринку, дозволяє нам надати вам широкий каталог
                                    за низькими цінами. Запрошуємо вас!
                                </p> <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {open && <div className={s.divPopUp}>
                <div className={s.popUpBlock}>
                    <button onClick={() => setOpen(false)} className={s.butClose}>
                        <AiOutlineClose/>
                    </button>
                    <div className={s.firstDiv}>
                        <AiOutlineCheck/>
                        <span>Додано в кошик</span>
                    </div>
                    <div className={s.secondDiv}>
                        <Link href='/basket' className={s.firstLink}>
                            <FaBasketShopping/>
                            Перейти до кошика
                        </Link>
                        <button onClick={() => setOpen(false)} className={s.secondLink}>
                            Залишайтеся на сайті
                        </button>
                        <label className={s.labelDiv}>
                            <input type="checkbox" id="checkbox"/>
                            <span className={s.spanDiv}>Запам'ятай мій вибір</span>
                        </label>
                    </div>
                </div>
            </div>}

        </div>
    );
}

export default ChemicalMeans;
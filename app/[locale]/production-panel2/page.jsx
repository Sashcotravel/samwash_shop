"use client"

import s from './production.module.css';
import Image from "next/image";
import {Fancybox} from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Link from "next/link";
import { FaSolarPanel } from "react-icons/fa6";

function ProductionPanel() {

    Fancybox.bind('[data-fancybox="gallery"]', {
        Thumbs: {Carousel: {fill: false, center: true,},},
    });

    return (
        <div>

            <h1 className={s.mainDivH1}>
                <FaSolarPanel />
                3 сторінка
            </h1>

            <section>
                <div className="main-container">
                    <div className={s.text_box}>
                       <div className={s.wrapper}>
                           <a data-fancybox="gallery" href={'/gallery/image1.jpg'} className={s.item}>
                               <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                           </a>
                           <a data-fancybox="gallery" href={'/gallery/image25.jpg'} className={s.item}>
                               <Image src='/gallery/image25.jpg' alt='' width={1200} height={900}/>
                           </a>
                           <a data-fancybox="gallery" href={'/gallery/image3.JPG'} className={s.item}>
                               <Image src='/gallery/image3.JPG' alt='' width={1200} height={900}/>
                           </a>
                           <a data-fancybox="gallery" href={'/gallery/image4.jpg'} className={s.item}>
                               <Image src='/gallery/image4.jpg' alt='' width={1200} height={900}/>
                           </a>
                           <a data-fancybox="gallery" href={'/gallery/image5.jpg'} className={s.item}>
                               <Image src='/gallery/image5.jpg' alt='' width={1200} height={900}/>
                           </a>
                           <a data-fancybox="gallery" href={'/gallery/image6.JPG'} className={s.item}>
                               <Image src='/gallery/image6.JPG' alt='' width={1200} height={900}/>
                           </a>
                           <a data-fancybox="gallery" href={'/gallery/image7.jpeg'} className={s.item}>
                               <Image src='/gallery/image7.jpeg' alt='' width={1200} height={900}/>
                           </a>
                           <a data-fancybox="gallery" href={'/gallery/image8.JPG'} className={s.item}>
                               <Image src='/gallery/image8.JPG' alt='' width={1200} height={900}/>
                           </a>
                           <a data-fancybox="gallery" href={'/gallery/image9.jpg'} className={s.item}>
                               <Image src='/gallery/image9.jpg' alt='' width={1200} height={900}/>
                           </a>
                           <a data-fancybox="gallery" href={'/gallery/image10.jpg'} className={s.item}>
                               <Image src='/gallery/image10.jpg' alt='' width={1200} height={900}/>
                           </a>
                           <a data-fancybox="gallery" href={'/gallery/image11.jpg'} className={s.item}>
                               <Image src='/gallery/image11.jpg' alt='' width={1200} height={900}/>
                           </a>
                           <a data-fancybox="gallery" href={'/gallery/image12.jpg'} className={s.item}>
                               <Image src='/gallery/image12.jpg' alt='' width={1200} height={900}/>
                           </a>
                           <a data-fancybox="gallery" href={'/gallery/image13.jpg'} className={s.item}>
                               <Image src='/gallery/image13.jpg' alt='' width={1200} height={900}/>
                           </a>
                           <a data-fancybox="gallery" href={'/gallery/image14.jpg'} className={s.item}>
                               <Image src='/gallery/image14.jpg' alt='' width={1200} height={900}/>
                           </a>
                           <a data-fancybox="gallery" href={'/gallery/image15.jpg'} className={s.item}>
                               <Image src='/gallery/image15.jpg' alt='' width={1200} height={900}/>
                           </a>
                           <a data-fancybox="gallery" href={'/gallery/image16.jpg'} className={s.item}>
                               <Image src='/gallery/image16.jpg' alt='' width={1200} height={900}/>
                           </a>
                           <a data-fancybox="gallery" href={'/gallery/image17.jpg'} className={s.item}>
                               <Image src='/gallery/image17.jpg' alt='' width={1200} height={900}/>
                           </a>
                           <a data-fancybox="gallery" href={'/gallery/image18.jpg'} className={s.item}>
                               <Image src='/gallery/image18.jpg' alt='' width={1200} height={900}/>
                           </a>
                           <a data-fancybox="gallery" href={'/gallery/image19.jpg'} className={s.item}>
                               <Image src='/gallery/image19.jpg' alt='' width={1200} height={900}/>
                           </a>
                           <a data-fancybox="gallery" href={'/gallery/image20.jpeg'} className={s.item}>
                               <Image src='/gallery/image20.jpeg' alt='' width={1200} height={900}/>
                           </a>
                           <a data-fancybox="gallery" href={'/gallery/image21.jpeg'} className={s.item}>
                               <Image src='/gallery/image21.jpeg' alt='' width={1200} height={900}/>
                           </a>
                           <a data-fancybox="gallery" href={'/gallery/image22.jpg'} className={s.item}>
                               <Image src='/gallery/image22.jpg' alt='' width={1200} height={900}/>
                           </a>
                           <a data-fancybox="gallery" href={'/gallery/image23.jpg'} className={s.item}>
                               <Image src='/gallery/image23.jpg' alt='' width={1200} height={900}/>
                           </a>
                           <a data-fancybox="gallery" href={'/gallery/image24.jpg'} className={s.item}>
                               <Image src='/gallery/image24.jpg' alt='' width={1200} height={900}/>
                           </a>
                       </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default ProductionPanel;
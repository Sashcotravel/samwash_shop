import {create} from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";


const arr = [
    {
        id: 1,
        name: 'Powder ProX (25 кг) високоефективний, концентрований порошок для миття автомобіля',
        number: 1,
        prise: 345,
        col: 2,
        link: '/',
        img: '/main/image3.jpg'
    },
    {
        id: 2,
        name: 'Powder ProX ',
        number: 1,
        prise: 3455.67,
        col: 1,
        link: '/',
        img: '/main/image3.jpg'
    },
]

const store = (
    persist(
        (set, get) => ({
            goods: arr,
            order: arr,
            sum: 4145.67,
            addTask: (tasks) => set((store) =>
                ({tasks: [...store.tasks, tasks]}), false, "addTask"),
            addCount: (id) => { set((store) => ({
                order: store.order.map((goods) => {
                    if (goods.id === id) {
                      goods.col += 1
                    }
                    return goods;
                }),
            }))},
            minesCount: (id) => { set((store) => ({
                order: store.order.map((goods) => {
                    if (goods.id === id) {
                        if(goods.col > 1){
                            goods.col -= 1
                        }
                    }
                    return goods;
                }),
            }))},
            deleteGoods: (id, summary) => { set((store) => ({
                order: store.order.filter((goods) => goods.id !== id),
                sum: (store.sum - summary).toFixed(2)
            }))},
            allClean: () => { set(store => ({
                order: [],
                sum: 0
            }))},


            setFilter: (filterNew) => set((store) => ({filter: filterNew}), false, "setFilter"),
        }),
        {
            name: 'store-zustand',
            storage: createJSONStorage(() => sessionStorage),
        },
    )
)

export const useStore = create(devtools(store))
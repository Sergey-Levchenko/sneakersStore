export const state = () => ({
    products: [
        {
            mark: "Under Armour1",
            model: "UA HOVR SLK UA HOVR SLKUA HOVR SLK",
            price: 9700,
            oldPrice: 99000,
            sale: true,
            new: true,
            imgUrl: require(`@/assets/images/product/mini.jpg`)
        },
        {
            mark: "Under Armour2",
            model: "UA HOVR SLK UA HOVR SLKUA HOVR SLK",
            price: 2700,
            oldPrice: 79000,
            sale: false,
            new: true,
            imgUrl: require(`@/assets/images/product/mini.jpg`)
        },
        {
            mark: "Under Armour3",
            model: "UA HOVR SLK UA HOVR SLKUA HOVR SLK",
            price: 97454,
            oldPrice: 99453,
            sale: false,
            new: false,
            imgUrl: require(`@/assets/images/product/mini.jpg`)
        },
        {
            mark: "Under Armour4",
            model: "UA HOVR SLK UA HOVR SLKUA HOVR SLK",
            price: 9700,
            oldPrice: 99000,
            sale: true,
            new: true,
            imgUrl: require(`@/assets/images/product/mini.jpg`)
        },
        {
            mark: "Under Armour5",
            model: "UA HOVR SLK UA HOVR SLKUA HOVR SLK",
            price: 9700,
            oldPrice: 99000,
            sale: false,
            new: true,
            imgUrl: require(`@/assets/images/product/mini.jpg`)
        },
        {
            mark: "Under Armour6",
            model: "UA HOVR SLK UA HOVR SLKUA HOVR SLK",
            price: 9700,
            oldPrice: 99000,
            sale: false,
            new: false,
            imgUrl: require(`@/assets/images/product/mini.jpg`)
        },
        {
            mark: "Under Armour7",
            model: "UA HOVR SLK UA HOVR SLKUA HOVR SLK",
            price: 9700,
            oldPrice: 99000,
            sale: true,
            new: true,
            imgUrl: require(`@/assets/images/product/mini.jpg`)
        },
        {
            mark: "Under Armour8",
            model: "UA HOVR SLK UA HOVR SLKUA HOVR SLK",
            price: 9700,
            oldPrice: 99000,
            sale: false,
            new: true,
            imgUrl: require(`@/assets/images/product/mini.jpg`)
        },
        {
            mark: "Under Armour9",
            model: "UA HOVR SLK UA HOVR SLKUA HOVR SLK",
            price: 9700,
            oldPrice: 99000,
            sale: false,
            new: false,
            imgUrl: require(`@/assets/images/product/mini.jpg`)
        }
    ]
})

export const mutations = {

}
export const actions = {

}
export const getters = {
    products: state => state.products,
    // sortProducts: (state) =>{

    // }
}
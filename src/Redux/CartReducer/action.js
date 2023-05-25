export const addToCart = () => {
    // const data = JSON.parse(localStorage.getItem('cartdata'))
    // if(data) {
    //     [...data , {id:1,image, title: 'Women Kurti', mrp: 1000, price: 999, gender: 'Female', quantity: state.numberOfProducts, }]
    // } else {
    //     localStorage.setItem('cartdata', JSON.stringify([{id:1,image, title: 'Women Kurti', mrp: 1000, price: 999, gender: 'Female', quantity: state.numberOfProducts, }]))
    // }
    return {type : 'addToCart'}
}
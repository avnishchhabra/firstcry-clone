import React, { useState } from 'react'
import styles from "./product.module.css"
import one from "../../assets/product-details/one.jpeg"
import two from "../../assets/product-details/two.jpeg"
import three from "../../assets/product-details/three.jpeg"
import four from "../../assets/product-details/four.jpeg"
import five from "../../assets/product-details/five.jpeg"
import six from "../../assets/product-details/six.jpeg"
import { useDispatch } from 'react-redux'
import { addToCart } from '../../Redux/CartReducer/action'

const images = [
    {
        id: 1,
        img: one
    },
    {
        id: 2,
        img: two
    },
    {
        id: 3,
        img: three
    },
    {
        id: 4,
        img: four
    },
    {
        id: 5,
        img: five
    },
    {
        id: 6,
        img: six
    },
]

const Product = () => {
    const [selectedImg, setSelectedImg] = useState(images[0].img)
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(addToCart())
    }
  return (
    <div className={styles.productContainer}>
        {/* left */}
        <div className={styles.imagesContainer}>
            <div className={styles.imagesCols}>
                {images.map(({id,img}) => <div onMouseEnter={() => setSelectedImg(img)} className={`${styles.imageCol} ${img === selectedImg && styles.hoverEffect}`} key={id}>
                    <img src={img} />
                </div>)}
            </div>
            <div>
            <img src={selectedImg} className={styles.image} alt="img" />
            <button onClick={handleAddToCart} className={styles.addToCartBtn}>Add To Cart</button>
            </div>
        </div>
        {/* right */}
        <div className={styles.descriptionContainer}>
            Product Details to be added here...
        </div>
    </div>
  )
}

export default Product
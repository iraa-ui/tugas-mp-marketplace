import { createSlice } from "@reduxjs/toolkit";
import product1 from "../assets/jam.png"
import product2 from "../assets/mangkok.png"
import product3 from "../assets/tas.png"

export const productSlice = createSlice({
    name: "product",
    initialState: [
         {
                    id: 1,
                    product_name: "jam",
                    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta dolorum libero fugit eveniet officiis repudiandae at perferendis accusantium velit vero.",
                    stock: 20,
                    price: 2000000,
                    product_type: "jam",
                    product_image: product1
                },
                {
                    id: 2,
                    product_name: "mangkok",
                    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta dolorum libero fugit eveniet officiis repudiandae at perferendis accusantium velit vero.",
                    stock: 20,
                    price: 1000000,
                    product_type: "mangkok",
                    product_image: product2
                },
                {
                    id: 3,
                    product_name: "tas",
                    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta dolorum libero fugit eveniet officiis repudiandae at perferendis accusantium velit vero.",
                    stock: 20,
                    price: 10000000,
                    product_type: "tas",
                    product_image: product3
                },
    ],
    reducers: {
        addToCartProduct: (state, payload) => {
            const findProduct = state.find(p => p.id === payload.payload.id)
            if(findProduct.stock === 0){
                alert("this product is empty!")
                return
            }
            state?.map(s => {
                if(s.id === findProduct.id){
                    s.stock -=1
                }
            })
        }
    }
})

export const {addToCartProduct} = productSlice.actions
export default productSlice.reducer
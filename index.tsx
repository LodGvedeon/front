import axios from 'axios'
import type { NextPage } from 'next'
import { useState, useEffect, useRef, useContext } from 'react'


export interface Product {
    title: String
    images: Array<0>
  }

const ProductCard = (
    {product}: {product: Product}
) => {
    const title = product.title
    const imgSrc = product.images
    return(
        <div className='max-w-xs bg-gray-100 py-3 px-5 rounded-lg'>
            <img  
                src={imgSrc} 
                className='w-full h-20 object-contain'
            />
            <div className='mt-4'>{title}</div>
        </div>
    )
}

const ImagePage: NextPage = () => {
let canvas: HTMLCanvasElement | null = null
let ctx: CanvasRenderingContext2D | null  = null
const cv = useRef<HTMLCanvasElement | null>(null)


const [yOffset, setYOffset] = useState(0)
const [products, setProducts] = useState<Array<any>>([])

const yOffsetStep = 55

async function loadProducts() {
    const response = await axios.get('https://dummyjson.com/products')
    const p = response.data['products'] as Array<any> || []
    setProducts(p)
}

function drawElements() {
    console.log(canvas, ctx)
    if (!canvas) {return}
    if (ctx == null) {return}
    console.log('function must run') 
    ctx.fillStyle = 'red'   
    ctx.fillRect(100, yOffset, 100, 50)
    setYOffset(yOffset+yOffsetStep)
    console.log(yOffset+yOffsetStep)
}

useEffect(() => {
    console.log(cv.current)
    canvas = cv.current
    if (canvas) { 
        ctx = canvas.getContext('2d')  
    } 
})

useEffect(() => {
    console.log(cv.current)
    canvas = cv.current
    if (canvas) { 
        console.log(canvas)
        canvas.width = 10
        canvas.height = 10
        ctx = canvas.getContext('2d')  
    } 
    loadProducts()
}, [])



return ( 
    <div className="h-screen  static px-5 py-3">
        <div>
            <button onClick={() => drawElements()}>Жми</button>
            <canvas ref={cv}/>
            <div className='grid grid-cols-4 gap-5 mt-7'>
            {products.map( function(item, index) {
                return <ProductCard 
                    key={index}
                    product={item}
                 />
            })}
            </div>
        </div>
    </div> 
) 
}



export default ImagePage
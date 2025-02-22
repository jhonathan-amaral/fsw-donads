
import { notFound } from "next/navigation"

import { db } from "@/lib/prisma"

import ProductHeader from "./components/product-header"



interface ProductsPageProps {
    params : Promise<{ slug: string, productId: string }>
}

const ProductsPage = async ({params}: ProductsPageProps) => {
    const {slug, productId} = await params
    const product = await db.product.findUnique({where :{ id: productId}})

    if (!product) {
        return notFound()
    }

    return (
        <>
        <div className="relative w-full h-[300px]">
           
            <ProductHeader product={product}/>
            {slug}
        </div>
        </>
    )
}
 
export default ProductsPage;
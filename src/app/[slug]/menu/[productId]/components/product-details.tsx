'use client'
import { Prisma } from "@prisma/client";
import { ChefHatIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { useContext, useState } from "react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { formatCurrency } from "@/helpers/format-currency";

import CartSheet from "../../components/cart-sheet";
import { CartContext } from "../../contexts/cart";

interface ProductDetailsProps {

    product: Prisma.ProductGetPayload<{
        include: {
            restaurant: {
                select: {
                    name: true,
                    avatarImageUrl: true
                }
            }
        }
    }>
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
    const [quantity, setQuantity] = useState(1)

    const {toggleCart, addProduct} = useContext(CartContext)
    
    const handleDecreaseQuantity = () => {
        setQuantity(prev => {
            if (prev === 1) {
                return 1
            }
            return prev - 1
        })
    }

     const handleIncreaseQuantity = () => {
        setQuantity(prev => prev + 1)
    }

    const handleAddToCart = () => {
        toggleCart(
        )
        addProduct( {
            ...product,
            quantity
        })
    }

   
    
    return (
     <>
        <div className="relative z-50 rounded-t-3xl py-5 mt-[-1.5rem] p-5 overflow-hidden flex-auto flex flex-col">

<div className="flex-auto overflow-hidden">

    <div className="flex items-center gap-1.5 ">
        <Image
            src={product.restaurant.avatarImageUrl}
            alt={product.restaurant.name}
            width={16}
            height={16}
            className="rounded-full "
        />
        <p className="text-xs text-muted-foreground space-x-1">
            {product.restaurant.name}
        </p>

    </div>

    <h2 className="mt-1 text-xl font-semibold">
        {product.name}
    </h2>

    <div className="flex justify-between items-center mt-3 ">

        <h3 className="text-xl font-semibold">{formatCurrency(product.price)}</h3>

        <div className="flex items-center gap-3 text-center">
            <Button variant="outline" className="h-8 w-8 rounded-xl" size="icon" onClick={handleDecreaseQuantity}>
                <ChevronLeftIcon />
            </Button>
            <p className="w-4">{quantity}</p>
            <Button
                variant="destructive"
                className="h-8 w-8 rounded-xl"
                size="icon"
                onClick={handleIncreaseQuantity}
            >
                <ChevronRightIcon />
            </Button>
        </div>
    </div>

 <ScrollArea className="h-full">
 <div className="mt-6 space-y-3 ">
        <h4 className="font-semibold">Sobre</h4>
        <p className="text-sm text-muted-foreground">{product.description}</p>
    </div>

    <div className="mt-6 space-y-3 ">
        <div className="flex items-center gap-1">
            <ChefHatIcon size={18} />
            <h4 className="font-semibold">Ingredientes</h4>
        </div>
        <ul className="list-disc px-5 text-sm text-muted-foreground">
            {
                product.ingredients.map(ingredient => (
                    <li key={ingredient}>
                        {ingredient}
                    </li>
                ))
            }
        </ul>
    </div>
        
 </ScrollArea>
</div>

<Button className="rounded-full w-full  mt-2" onClick={handleAddToCart}>
    Adicionar à sacola
</Button>


</div>

<CartSheet/>

     </>
    );
}

export default ProductDetails;
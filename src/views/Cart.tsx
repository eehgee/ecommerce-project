import CartView from "../components/carts/CartView";

const Cart = ():JSX.Element =>{
  
    return(
        <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
            <article className="pt-2 lg:pt-4 pb-4 lg:pb-8 px-4 xl:px-2 mb-6 xl:container mx-auto">
                <h2 className="text-center text-3xl font-bold mb-12">장바구니</h2>
                <CartView />
            </article>
        </section>
    )
}

export default Cart;
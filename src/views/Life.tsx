import ItemList from "../components/common/ItemList";

const Life = ():JSX.Element =>{
    return(
        <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
            <article className="pt-2 lg:pt-4 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto">
            <h2 className="text-center text-3xl font-bold mb-12">라이프</h2>
            <ItemList limit={7} category="Miscellaneous" />
            </article>
        </section>
    )
}

export default Life;
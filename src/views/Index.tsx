import ItemList from "../components/common/ItemList";


const Index = (): JSX.Element => {
 
  return (
    <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
      <h2 className="text-center text-4xl font-bold mb-20">Best Item</h2>
      <ItemList limit={12}/>
    </section>
      
  );
};

export default Index;

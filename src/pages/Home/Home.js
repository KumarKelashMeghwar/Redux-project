import { useEffect, useState } from "react";
import Card from "../../shared/Card";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div
      className="flex justify-center items-center flex-wrap gap-12 py-12
     bg-lime-200"
    >
      {products.length > 0 ? (
        products.map((product) => {
          return <Card key={product.id} product={product} />;
        })
      ) : (
        <>Loading ...</>
        // <img
        //   src="https://i.gifer.com/ZZ5H.gif"
        //   alt="loading"
        //   height="50px"
        //   width="50px"
        // />
      )}
    </div>
  );
}

export default Home;

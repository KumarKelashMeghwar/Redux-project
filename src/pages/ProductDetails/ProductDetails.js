import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";
import { ADD_TO_CART } from "../../redux/actions/action.js";

const ProductDetails = () => {
  const product = useSelector((state) => state.selectReducer.products[0]);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartReducer.cart);

  function addToCart(e) {
    let alreadyAddedProduct = cartItems.filter(
      (item) => item.id === product.id
    );
    if (alreadyAddedProduct.length > 0) {
      alert(
        "This product has already been added to cart, hence you can't add it again"
      );
    } else {
      dispatch(ADD_TO_CART(e));
      alert("Added to cart successfully");
    }
  }
  return (
    <div className="flex flex-col justify-center items-center mt-16 pb-7">
      <div className="product-details flex">
        <section className="leftSection">
          <div className="leftSection-image pr-12 cursor-pointer">
            <img
              src={product.image}
              alt={product.title}
              width="300px"
              height="300px"
            />
          </div>
        </section>
        <section className="rightSection flex flex-col gap-3 w-[400px]">
          <div className="product_title font-medium">{product.title}</div>
          <div className="product_price p-1 text-white flex justify-center text-center w-16 rounded-md bg-lime-700">
            ${product.price}
          </div>
          <div className="product_category flex justify-start pl-2 items-center w-full h-10 rounded-sm bg-gray-200 text-orange-400 border-solid border border-gray-300">
            {product.category}
          </div>
          <div className="product_description w-[448px]">
            {product.description}
          </div>
          <div
            onClick={() => addToCart(product)}
            className="product_btn bg-lime-600 text-white w-32 p-3 flex justify-center items-center rounded-sm cursor-pointer"
          >
            Add to Cart
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetails;

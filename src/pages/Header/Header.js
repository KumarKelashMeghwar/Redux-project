import { NavLink } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { REMOVE_PRODUCT } from "../../redux/actions/action";

function Header() {
  const cartItems = useSelector((state) => state.cartReducer.cart);
  const [showCart, setShowCart] = useState(false);

  function getTotal() {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price;
    });
    return total;
  }

  const dispatch = useDispatch();

  function removeProduct(product) {
    let reply = window.confirm("Are you sure you want to remove this product?");

    if (reply) {
      dispatch(REMOVE_PRODUCT(product));
    } else {
      //do nothing
    }
  }

  return (
    <header className="flex justify-around items-center h-16 w-full bg-gradient-to-r from-lime-600 to-lime-400">
      <section className="leftSection font-bold hover:cursor-pointer">
        <NavLink to="/">AmarchandShop</NavLink>
      </section>
      <section className="rightSection flex items-center gap-10">
        <ul className="flex gap-10">
          <NavLink to={"/"} className="font-medium hover:cursor-pointer">
            Home
          </NavLink>

          <div className="cart relative cursor-pointer">
            <HiShoppingCart
              className="text-2xl"
              onClick={() => setShowCart(!showCart)}
            />
            <div className="badge absolute -top-2 -right-2 bg-lime-200">
              {cartItems?.length > 0 ? cartItems?.length : 0}
            </div>
            {showCart && (
              <div className="cart_items  border-solid border-lime-400 border-4 p-3  w-[24rem] min-h-min max-h-[400px] overflow-x-hidden overflow-y-scroll z-100 absolute top-7 right-0 bg-white rounded-sm">
                <table>
                  <thead>
                    <div className="flex w-full justify-start items-center">
                      <th className="mr-[5.5rem]">Product</th>
                      <th>Details</th>
                    </div>
                    <div className="w-[22rem] h-[1px] bg-black"></div>
                  </thead>
                </table>
                {cartItems.length > 0 ? (
                  cartItems.map((item) => {
                    return (
                      <table key={item.id}>
                        <tbody>
                          <tr className="flex justify-around items-center py-4">
                            <td>
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-[100px] h-[100px] my-3"
                              />
                            </td>
                            <td className="ml-[2rem] flex flex-col gap-2">
                              <td className="product_name w-48">
                                {item.title}
                              </td>
                              <td className="product_price">
                                <span className="font-bold">Price:</span> $
                                {item.price}
                              </td>

                              <td
                                onClick={() => removeProduct(item)}
                                className="delete_btn w-24  text-white flex justify-center items-center h-8 bg-orange-600 rounded-md p-3"
                              >
                                Remove
                              </td>
                            </td>
                          </tr>
                          <div className="w-[22rem] h-1 border-solid border-b-[2px] border-gray"></div>
                        </tbody>
                      </table>
                    );
                  })
                ) : (
                  <div className="text-center">
                    <img src="Images/empty_cart.png" alt="empty cart" />
                  </div>
                )}
                <div className="total_price">
                  <span className="font-bold">Total:</span> ${getTotal()}
                </div>
              </div>
            )}
          </div>
        </ul>
        <div className="profile avatar hover:cursor-pointer">
          <img
            src="Images/k.jpg"
            alt="Kelash_Profile"
            className=" w-11 h-11 rounded-full"
          />
        </div>
      </section>
    </header>
  );
}

export default Header;

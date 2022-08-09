import { useDispatch } from "react-redux";
import { SELECT } from "../redux/actions/action";
import { useNavigate } from "react-router-dom";

const Card = ({ product }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function submitProduct(product) {
    dispatch(SELECT(product));
    navigate("/product-details");
  }
  
  return (
    <div
      onClick={() => submitProduct(product)}
      className="card flex flex-col justify-center gap-6 items-center shadow-lg bg-white p-3 w-72 h-[420px] rounded-xl hover:cursor-pointer"
    >
      <div className="card-header flex w-full  items-center justify-center pb-3 border-b">
        <img src={product.image} alt="imagee" className=" w-40 h-[170px]" />
      </div>

      <div className="card-body w-full flex flex-col h-[120px] gap-2">
        <p className="w-full font-medium">{product.title}</p>
        <p className="price font-bold">${product.price}</p>
        <p className="font-light">{product.category}</p>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import product, { addProduct, deleteProduct } from "../../redux/slices/product";

const DemoRedux = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.product); // hook useSelector dùng để lấy dữ liệu từ redux lên
  const handleAddProduct = () => {
    const product = {
      id: new Date().getTime(),
      name: "Iphone XS Max",
      price: 450,
    };
    dispatch(addProduct(product));
  };
  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id))
  };

  return (
    <div>
      <div className="mb-5">
        <button
          onClick={handleAddProduct}
          className="px-5 py-3 rounded bg-green-500"
        >
          Add product
        </button>
      </div>
      <h2 className="text-3xl font-medium">List Product</h2>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {list.map((item) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.id}
                  </th>
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4">{item.price}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleDeleteProduct(item.id)}
                      className="py-4 px-3 rounded bg-red-600 text-white"
                    >
                      Delete
                    </button>
                  </td> 
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DemoRedux;

const Cart = () => {
  return (
    <div className="container my-20">
      {/* page route */}
      <div className="text-base">
        <span className="text-gray-500">Home / </span>
        <span className="font-medium">Cart</span>
      </div>

      {/* cart info */}
      <div>
        {/* header */}
        <div
          style={{
            boxShadow:
              "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
          }}
          className="mt-10 flex items-center justify-between text-sm shadow-md py-5 px-10"
        >
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Subtotal</span>
        </div>

        {/* body */}
        <div></div>
      </div>
    </div>
  );
};

export default Cart;

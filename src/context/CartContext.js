import { useState, useEffect, createContext } from "react";

export const CartContext = createContext();

const itemObject = [
  {
    quantity: 3,
    item: {
      id: 1,
      title: "T-shirt",
      category: "tshirts",
      description: "Its a tshirt",
      stock: 10,
      price: "$299.00 MXN",
      pictureUrl:
      "https://shop.codiziapp.com/wp-content/uploads/2021/07/machine_learning_tshirt_2.jpg",
    }
  },
];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [quantityItems, setQuantityItems] = useState(0);

  useEffect(() => {
    const items = cart.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
    setQuantityItems(items);
  }, [cart]);

  //Añade un producto al carrito
  const addToCart = (item, quantity) => {
    console.log(quantity);
    const itemExists = cart.find(
      (cartItem) => cartItem.item.id === item.id
    );
    //Si el producto ya existe en el carrito, solo se actualiza la cantidad
    if (itemExists) {
      console.log("item already in cart");
      const updateItems = cart.map(product => product === itemExists ? {quantity: product.quantity += quantity, item: product.item} : product);
      if((itemExists.quantity += quantity) > itemExists.item.stock){
        console.log(`${(itemExists.quantity += quantity)} > ${itemExists.item.stock}`)
        console.log(cart)
        // setCart(cart)
      }
      else {
        console.log("yes")
        setCart(updateItems);
        console.log(cart)
      }
      // setCart(updateItems);
    }else {
      console.log("no item already in cart");
      const newItem = {quantity: quantity, item: item};
      setCart([...cart, newItem]);
    }

  };

  const removeFromCart = (item) => {
    setCart(cart.filter((cartItem) => cartItem.item.id !== item.id));
  };

  //Actualiza la cantidad de un producto en el carrito
  const updateQuantityItem = (item, quantity) => {
    const cartItemExists = cart.find(
      (cartItem) => cartItem.item.id === item.id
    );
    //Validar si la cantidad está en el rango del stock del producto
    if(quantity > cartItemExists.item.stock || quantity < 0){
      setCart(cart)
    }
    else {
      const updateItems = cart.map(product => product.item === item ? {quantity: quantity, item: product.item} : product);
      setCart(updateItems);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantityItem,
        removeFromCart,
        quantityItems
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

import React, { createContext, useState, useContext, useEffect} from 'react';

export const GlobalContext = createContext()

const description= [
  {
    key: '1',
    img: require('../assets/1.png'),
    detalhe: 'Detail1',
    name: 'Moleton Nicoboco Jack',
    price: 280.90

  },
  {
    key: '2',
    img: require('../assets/2.png'),
    detalhe: 'Detail2',
    name: 'Moletom Suffix Masculino',
    price: 300.90
  },
  {
    key: '3',
    img: require('../assets/3.png'),
    detalhe: 'Detail3',
    name: 'Moletons Liso Flanelado',
    price: 450.99
  },
  {
    key: '4',
    img: require('../assets/4.png'),
    detalhe: 'Detail4',
    name: 'Moletom Fechado Trivalle',
    price: 250.00
  },
  {
    key: '5',
    img: require('../assets/5.png'),
    detalhe: 'Detail5',
    name: 'Moleton Fech Peanuts',
    price: 900.00
  },
  {
    key: '6',
    img: require('../assets/6.png'),
    detalhe: 'Detail6',
    name: 'Moletom Hocks Chumbo Jack',
    price: 700.00
  },
  

]; 

export default function GlobalProvider({children}) {
  
  let value = 0
  const [cart, setCart] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
    
  // useEffect(() => {
  //      let value = 0
  //      cart.map((item) =>{
  //        value = value + item.price
  //      })

  //      setTotalValue(value)
    
  //    }, [cart])
    
  
    
   function addCart(item) {
      const newCart = cart
      newCart.push(item)      
      setCart(newCart)
      cart.map((item) =>{
        value = value + item.price
      })

      setTotalValue(value)
      
    }

    function remove (index) {
      let newCart = cart.filter((item, i) => i !== index);
      setCart(newCart)
      cart.map((item) =>{
      value = totalValue - item.price
      })
      setTotalValue(value)
    }

 
    const store = {
        addCart, 
        cart,
        totalValue,
        remove
    }
 
 
 
  return (
   <GlobalContext.Provider value={{store, description,cart, totalValue,remove}}>
       {children}
   </GlobalContext.Provider>
  );
}

  export function useCart() {
  //return useContext(GlobalContext);
    const context = useContext(GlobalContext)
  //  console.log(context);
    const {
        cart,
        addCart,
        totalValue,
        remove
        
    } = context.store

    return {
       cart,
       addCart,
       totalValue,
       remove,
       description: context.description
    }

}
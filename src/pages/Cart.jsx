import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function Cart() {
    const [totalCart, setTotalCart] = useState(0);

    const { cart } = useSelector((state) => state);

    useEffect(() => {
        setTotalCart(cart.reduce((total, item) => total + item.price, 0));
    }, [cart]);

    console.log(cart, totalCart);

    return <div>Cart</div>;
}

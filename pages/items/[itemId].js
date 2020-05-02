import Link from "next/link";
import fetch from "isomorphic-unfetch";
import uuid from 'uudi';
import {getCustomersCart} from "../services/cart-item-services";

const addItemToCart = async (itemId) => {

	const customerResponse = await fetch('http://localhost:5555/customers');
	const [customer] = await customerResponse.json();

	const cartResponse = await fetch('http://localhost:5555/customers/${customer.customerId}/carts');
	const [cart] = await cartResponse.json();

	await fetch('http://localhost:5555/cart-items', {
		method: 'POST',
		body: JSON.stringify({
			cartItemId: uuid.v4(),
			cartId: cart.cartId,
			itemId: '',
			quantity: 1
		}),
		headers: {
			'Content-Type': 'application/json'
		}
	})
}

const Index = props => (
		<section>
			<h1>Item Details</h1>
			<img src={props.item.image} />
			<p>Description: {props.item.description}</p>
			<p>Price: {props.item.price}</p>
			<button type="button" onClick={() => addItemToCart(props.item.itemId)}>
				Add To Cart
			</button>
			<p>Number of times this item is in the cart: {props.cartItems.filter((cartItem) => cartItem.itemId === props.item.itemId).length}</p>
			<Link href="/cart">																										
				<a>View Cart!</a>
			</Link>
		</section>
	);

Index.getInitialProps = async function(context) {
	const {itemId} = context.query;
	const res = await fetch('http://localhost:5555/items/${itemId}');
	const item = await res.json();
	const {cartItems} = await getCustomersCart();

	return {
			item,
			cartItems
	};
};

export default Index;
import Link from "next/link";

export default function Index() {
	return (
		<div> 
			<p>Drake University Apparel</p>
			<ul>
				<li>
					<Link href="/items">																										
						<a>View Apparel!</a>
					</Link>
				</li>
				<li>
					<Link href="/cart">																										
						<a>View Cart!</a>
					</Link>
				</li>
			</ul>
		</div>
	);
}
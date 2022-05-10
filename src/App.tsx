import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout';
import { NavItem, NAV_ITEMS, ProductType } from './constants';
import Page from './components/Page';
import Loader from './components/shared/Loader';
import { fetchProducts } from './api';

function App() {
	const [activeNavItem, setActiveNavItem] = useState<NavItem>('electronics');
	const [products, setProducts] = useState<ProductType[]>([]);
	const [loading, setLoading] = useState<boolean>(false);

	const getProducts = async () => {
		const category = NAV_ITEMS.find((item) => item.key === activeNavItem)?.name;
		setLoading(true);
		const res = await fetchProducts(category || '');
		setProducts(res);
		setLoading(false);
	};

	useEffect(() => {
		getProducts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeNavItem]);

	return (
		<Layout activeNavItem={activeNavItem} setActiveNavItem={setActiveNavItem}>
			{!!loading && <Loader />}
			{!loading && <Page products={products} />}
		</Layout>
	);
}

export default App;

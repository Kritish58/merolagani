import cx from 'classnames';
import { ProductType } from '../../constants';
import ProductCard from '../shared/ProductCard';
import styles from './Page.module.scss';

type PageProps = {
	products: ProductType[];
};

const Page = ({ products }: PageProps) => {
	return (
		<div className={cx('my-4', styles.products)}>
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
};

export default Page;

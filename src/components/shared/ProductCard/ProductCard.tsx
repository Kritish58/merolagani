import { Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useState } from 'react';
import cx from 'classnames';
import styles from './ProductCard.module.scss';
import ProductModal from '../ProductModal';
import { ProductType } from '../../../constants';

export const Ratings = ({ product }: { product: ProductType }) => {
	const getRatingStar = (rate: number, i: number) => {
		if (rate > i && rate - i < 1) return <i className="fa fa-star-half-full" />;
		if (rate > i) return <i className="fa fa-star" />;

		return <i className="fa fa-star-o" />;
	};

	return (
		<div className={cx(styles['card-rating'], 'text-warning my-2')}>
			{[1, 2, 3, 4, 5].map((i) => (
				<div key={i}>{getRatingStar(product.rating.rate, i)}</div>
			))}

			<span className={cx(styles.text, 'text-muted')}>({product.rating.count})</span>
		</div>
	);
};

const ProductCard = ({ product }: { product: ProductType }) => {
	const [showModal, setShowModal] = useState<boolean>(false);

	const renderTooltip = (props: any) => (
		<Tooltip id="button-tooltip" {...props}>
			{product.title}
		</Tooltip>
	);

	return (
		<>
			<ProductModal product={product} show={showModal} handleClose={() => setShowModal(false)} />

			<Card className={cx(styles.card, 'shadow-sm')} onClick={() => setShowModal(true)}>
				<div className={styles['card-image-container']}>
					<Card.Img className={styles['card-image']} variant="top" src={product.image} />
				</div>
				<Card.Body>
					<OverlayTrigger placement="bottom" overlay={renderTooltip}>
						<Card.Title className={styles['card-title']}>{product.title}</Card.Title>
					</OverlayTrigger>
					<Ratings product={product} />
					<Card.Text className={styles['card-description']}>{product.description}</Card.Text>
				</Card.Body>
			</Card>
		</>
	);
};

export default ProductCard;

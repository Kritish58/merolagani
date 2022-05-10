import { Modal, Button } from 'react-bootstrap';
import { ProductType } from '../../../constants';
import { Ratings } from '../ProductCard/ProductCard';
import styles from './ProductModal.module.scss';

type ProductModalProps = {
	show: boolean;
	handleClose: () => void;
	product: ProductType;
};

const ProductModal = ({ show, handleClose, product }: ProductModalProps) => {
	return (
		<Modal size="lg" show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>{product.title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div>
					<div className="d-flex gap-3">
						<div className={styles.image}>
							<img src={product.image} alt="Product" />
						</div>

						{/* ⚠ Temporary substitute for additional images*/}
						<div className={styles['image-placeholder']} />
					</div>
					<p className="mt-3">
						<em className="text-muted">category: </em>
						{product.category}
					</p>
					<p>
						<em className="text-muted">price:</em> Nrs. {product.price}
					</p>
				</div>
				<Ratings product={product} />
				<div>{product.description}</div>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="light" onClick={handleClose}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ProductModal;

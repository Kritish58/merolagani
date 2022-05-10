import { useState } from 'react';
import { Modal, Button, Form, Spinner } from 'react-bootstrap';
import Select from 'react-select';
import { addProduct } from '../../../api/products';
import { NAV_ITEMS } from '../../../constants';

type CreateProductProps = {
	show: boolean;
	handleClose: () => void;
};

const viewToast = () => {};

const CreateProduct = ({ show, handleClose }: CreateProductProps) => {
	const [selectedCategory, setSelectedCategory] = useState<string>('');
	const [inputs, setInputs] = useState<{ title: string; price: string; description: string; [x: string]: string }>({
		title: '',
		price: '',
		description: '',
	});
	const [imageFile, setImageFile] = useState(undefined);
	const [loading, setLoading] = useState<boolean>(false);

	const handleSubmit = async () => {
		const formData = new FormData();
		formData.append('category', selectedCategory);
		formData.append('image', imageFile || '');

		Object.keys(inputs).forEach((key) => {
			formData.append(key, inputs[key]);
		});

		setLoading(true);
		await addProduct(formData);
		setLoading(false);
		viewToast();
		handleClose();
	};

	return (
		<Modal size="lg" show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Create Product</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group className="mb-3">
						<Form.Label>Product Title</Form.Label>
						<Form.Control
							onChange={(e) => setInputs((prev) => ({ ...prev, title: e.target.value }))}
							type="text"
							placeholder="Title"
						/>
						<Form.Text className="text-muted d-none">Validation Message</Form.Text>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label>Select Category</Form.Label>
						<Select
							onChange={(item) => setSelectedCategory(item?.value || '')}
							options={NAV_ITEMS.map(({ name }) => ({ value: name, label: name }))}
						/>
						<Form.Text className="text-muted d-none">Validation Message</Form.Text>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label>Product Price</Form.Label>
						<Form.Control
							onChange={(e) => setInputs((prev) => ({ ...prev, price: e.target.value }))}
							type="text"
							placeholder="Price"
						/>
						<Form.Text className="text-muted d-none">Validation Message</Form.Text>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label>Product Description</Form.Label>
						<Form.Control
							onChange={(e) => setInputs((prev) => ({ ...prev, description: e.target.value }))}
							as="textarea"
							placeholder="Description"
						/>
						<Form.Text className="text-muted d-none">Validation Message</Form.Text>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label>Product Image</Form.Label>
						<Form.Control type="file" onChange={(e: any) => setImageFile(e.target.files[0])} />
						<Form.Text className="text-muted d-none">Validation Message</Form.Text>
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="primary" disabled={loading} onClick={handleSubmit}>
					{!!loading && <Spinner size="sm" animation="border" variant="light" />}
					{!loading && <span>Save</span>}
				</Button>
				<Button variant="light" onClick={handleClose}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default CreateProduct;

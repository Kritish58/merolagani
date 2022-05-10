import { Spinner } from 'react-bootstrap';

const Loader = () => {
	return (
		<div className="w-100 p-5 d-flex align-items-center justify-content-center">
			<Spinner animation="border" variant="primary" />
		</div>
	);
};

export default Loader;

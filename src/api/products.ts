export const fetchProducts = async (category: string) => {
	const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
	const json = await res.json();
	return json;
};

export const addProduct = async (formData: FormData) => {
	const res = await fetch('https://fakestoreapi.com/products', {
		method: 'POST',
		body: formData,
	});
	const json = res.json();
	return json;
};

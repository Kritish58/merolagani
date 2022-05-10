export type ProductType = {
	id: number;
	price: number;
	image: string;
	category: string;
	description: string;
	title: string;
	rating: {
		count: number;
		rate: number;
	};
};

export type NavItem = 'electronics' | 'jewelery' | 'menClothing' | 'womenClothing';

export const NAV_ITEMS: { id: number; name: string; key: NavItem }[] = [
	{
		id: 1,
		name: 'electronics',
		key: 'electronics',
	},
	{
		id: 2,
		name: 'jewelery',
		key: 'jewelery',
	},
	{
		id: 3,
		name: "men's clothing",
		key: 'menClothing',
	},
	{
		id: 4,
		name: "women's clothing",
		key: 'womenClothing',
	},
];

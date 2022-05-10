import React, { Dispatch, SetStateAction, useState } from 'react';
import cx from 'classnames';
import { Container, Dropdown, DropdownButton, Nav, Navbar } from 'react-bootstrap';
import { NavItem, NAV_ITEMS } from '../constants';
import styles from './Layout.module.scss';
import CreateProduct from '../components/shared/CreateProduct';

type LayoutProps = {
	children: React.ReactNode;
	activeNavItem: NavItem;
	setActiveNavItem: Dispatch<SetStateAction<NavItem>>;
};

const Layout = ({ children, activeNavItem, setActiveNavItem }: LayoutProps) => {
	const handleNavClick = (navItem: NavItem) => () => setActiveNavItem(navItem);
	const [showCreateModal, setShowCreateModal] = useState<boolean>(false);

	return (
		<>
			<CreateProduct show={showCreateModal} handleClose={() => setShowCreateModal(false)} />

			<Navbar className="shadow-sm" bg="light" variant="light" expand="lg">
				<Container>
					<Navbar.Brand className={styles['navbar-brand']} href="#home">
						MeroLagani
					</Navbar.Brand>
					<Nav className="me-auto">
						{NAV_ITEMS.map((item) => (
							<Nav.Link
								className={cx(
									'rounded px-4',
									styles['nav-link'],
									activeNavItem === item.key && 'bg-primary text-light'
								)}
								key={item.id}
								href={`#${item.name}`}
								onClick={handleNavClick(item.key)}>
								{item.name}
							</Nav.Link>
						))}
					</Nav>
					<div>
						<DropdownButton id="settings-button" variant="light" title="settings">
							<Dropdown.Item className="p-2" onClick={() => setShowCreateModal(true)}>
								Create Product
							</Dropdown.Item>
						</DropdownButton>
					</div>
				</Container>
			</Navbar>

			<Container>{children}</Container>
		</>
	);
};

export default Layout;

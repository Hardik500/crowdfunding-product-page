import FundProvider from './FundProvider';

export default function AppProvider({ children }) {
	return (
		<FundProvider>
			{children}
		</FundProvider>
	);
};

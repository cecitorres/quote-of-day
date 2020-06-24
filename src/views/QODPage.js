import React, {
	useState,
	useEffect
} from 'react';
import { getQuoteOfDay } from '../api/quoteService';
import QODComponent from '../components/QODComponent';

const App = () => {
	const [quote, setQuote] = useState({
		body: '',
		author: ''
	});

	const fetchData = async () => {
		const res = await getQuoteOfDay();
		setQuote(res.data.quote);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<QODComponent quote={quote} />
			<div className="row">
				<div className="mx-auto">
					<button
						type="button" className="btn btn-secondary rounded-circle"
					>
						<i className="material-icons">favorite</i>
					</button>
					<button
						onClick={fetchData}
						type="button" className="btn btn-secondary rounded-circle"
					>
						<i className="material-icons">cached</i>
					</button>
					
				</div>
			</div>
		</>
	);
};

export default App;
import React, {
	useState,
	useEffect
} from 'react';
import { getQuoteOfDay } from '../api/quoteService';

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
			<blockquote className="blockquote">
				<p className="mb-0">
				<i className="material-icons text-primary">format_quote</i>
				<span>
					{quote.body}
				</span>
				<i className="material-icons text-primary">format_quote</i>
				</p>
				<p className="text-center text-primary">
					.. {quote.author}
				</p>
			</blockquote>
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
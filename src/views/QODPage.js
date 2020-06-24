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
					"{quote.body}"
				</p>
				<p>
					.. {quote.author}
				</p>
			</blockquote>
			<button
				type="button" className="btn btn-primary"
			>
				Fav
			</button>
			<button
				onClick={fetchData}
				type="button" className="btn btn-primary"
			>
				Other
			</button>
		</>
	);
};

export default App;
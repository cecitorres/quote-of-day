import React, {
	useState,
	useEffect,
	useCallback
} from 'react';
import { getQuoteOfDay } from '../api/quoteService';
import QODComponent from '../components/QODComponent';
import { useFirestore } from "react-redux-firebase";
import { useSelector, useDispatch } from "react-redux";
import { addQuote } from "../actions";


const QODPage = () => {
	const firestore = useFirestore();
	const dispatch = useDispatch();

	const saveFavQuote = useCallback(
		quote => {
			return dispatch(addQuote({ firestore }, quote))
		},
    [firestore]
	);
	
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
						onClick={() => saveFavQuote(quote)}
						type="button" className="btn btn-secondary rounded-circle mr-2"
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

export default QODPage;

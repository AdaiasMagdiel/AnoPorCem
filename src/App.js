import React, { useState } from 'react';

import { formatDistanceStrict, format } from 'date-fns';

import ProgressBar from './components/ProgressBar';

function App() {
	const [progress, setProgress] = useState(0);
	const [label, setLabel] = useState('');

	function countTime() {
		const d = new Date();

		const distanceComecoDoAno2FimDoAno = parseInt(
			formatDistanceStrict(
				new Date(d.getFullYear(), 0, 1, 0, 0, 0),
				new Date(d.getFullYear(), 11, 31, 23, 59, 59),
				{
					unit: 'second'
				}
			)
		);
		const distanceHoje2FimDoAno = parseInt(
			formatDistanceStrict(new Date(), new Date(d.getFullYear(), 11, 31, 23, 59, 59), {
				unit: 'second'
			})
		);

		const progress =
			((distanceComecoDoAno2FimDoAno - distanceHoje2FimDoAno) /
				distanceComecoDoAno2FimDoAno) *
			100;

		const label = `${format(d, "dd'/'MM'/'yy '|' HH:mm:ss")} | ${progress.toFixed(2)}%`;

		setLabel(label);
		setProgress(progress);
	}

	setInterval(countTime, 1000);

	return <ProgressBar label={label} progress={progress} />;
}

export default App;

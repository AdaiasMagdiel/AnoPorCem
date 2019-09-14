import React from 'react';

import { LifeBox, LifeContainer, Life, LifeIndicator } from './styles';

function ProgressBar({ label = '', progress = 0 }) {
	return (
		<LifeBox>
			<LifeContainer>
				<Life progress={progress} />
			</LifeContainer>
			<LifeIndicator>{label}</LifeIndicator>
		</LifeBox>
	);
}

export default ProgressBar;

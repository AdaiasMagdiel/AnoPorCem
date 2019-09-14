import styled from 'styled-components';

export const LifeBox = styled.div`
	background-color: rgba(0, 0, 0, 0.55);
	border-radius: 5px;
	padding: 20px 10%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	max-width: 800px;

	@media (min-width: 992px) {
		padding: 20px 60px;
	}
`;

export const LifeContainer = styled.div`
	border: 1px solid #44ca77;
	border-radius: 15px;
	width: 100%;
	height: 25px;
	overflow: hidden;
`;
export const Life = styled.div`
	background-color: #44ca77;
	width: ${props => props.progress}%;
	height: 25px;
`;
export const LifeIndicator = styled.p`
	margin-top: 20px;
`;

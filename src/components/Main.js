import styled from 'styled-components';

const Texte = styled.div`
	display: flex;
	width: 800px;
	text-align: center;
	margin-top: 20px;
`;

const Main = () => {
	return (
		<Texte>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
			veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
			commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
			velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
			cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
			est laborum.
		</Texte>
	);
};

export default Main;

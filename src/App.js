import Title from './components/Title';
import Main from './components/Main';
import Footer from './components/Footer';
import styled from 'styled-components';
import './App.css';

const LetsGo = styled.div`
	display: flex;
	flex-direction: column;
	width: 800px;
	border: solid 2px black;
	border-radius: 10px;
`;

function App() {
	return (
		<LetsGo>
			<Title />
			<Main />
		</LetsGo>
	);
}

export default App;

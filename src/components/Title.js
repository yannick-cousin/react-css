import elPhoto from '../assets/photo.jpg';
import styled from 'styled-components';

const Entete = styled.div`
	display: flex;
	justify-content: space-around;
	width: 800px;
`;

const Photo = styled.img`
	border-radius: 40px;
	width: 300px;
`;

const Identidy = styled.h1`
	display: flex;
	color: #268be9;
	width: 300px;
	align-items: center;
	text-align: center;
`;

const Title = () => {
	return (
		<Entete>
			<Photo src={elPhoto}></Photo>
			<Identidy>
				Someone <br />
				Developper Full-Stack React
			</Identidy>
		</Entete>
	);
};

export default Title;

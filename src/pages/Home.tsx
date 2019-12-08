import { Button, Typography, Icon } from 'antd';
import React from 'react';
import styled from 'styled-components';
import Particles from 'react-particles-js';
import particleConfig from '../assets/particles-config.json';
import { HomeHeader } from '../components/header/HomeHeader';
import { Link, Element } from 'react-scroll';

const BannerContainer = styled.div`
	height: 100vh;
	padding: 0;
	margin: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const BannerItem = styled.div`
	line-height: 20px;
	color: white;
	font-weight: bold;
	font-size: 2em;
	text-align: center;
`;

const { Title } = Typography;

const StyledText = styled(Title)`
	color: white !important;
`;

const NameText = styled(Title)`
	color: #f73859 !important;
`;

const BannerButton = styled(Button)`
	height: auto;
	border: 2px solid;
	border-color: white;
	border-radius: 0;
	background: transparent;

	.arrow-down-ease {
		transition: 0.5s;
		transform: rotate(0deg);
	}
	:hover {
		background: #00adb5;
		border: 2px solid;
		border-color: #00adb5;
	}
	:hover .arrow-down-ease {
		transition: 0.5s;
		transform: rotate(90deg);
	}
`;

const BannerButtonText = styled(StyledText)`
	margin-bottom: 0 !important;
	padding: 7px;
`;

const ParticlesBackground = {
	position: 'absolute',
	zIndex: -1,
	background: '#252934'
};

const MyDiv = styled.div``;

interface Props {}

const params: any = particleConfig;

export const Home: React.FC<Props> = () => {
	return (
		<div>
			<Particles style={ParticlesBackground} params={params} />
			<BannerContainer>
				<BannerItem>
					<StyledText>
						Hi there, I'm<NameText>Sercan Yektaş.</NameText>
						I'm a full-stack Developer.
					</StyledText>
					<Link to="about" spy={true} smooth={true} duration={500}>
						<BannerButton>
							<BannerButtonText level={4}>
								View my work <Icon className="arrow-down-ease" type="arrow-right" />
							</BannerButtonText>
						</BannerButton>
					</Link>
				</BannerItem>
			</BannerContainer>
			<HomeHeader />
			<Element name="about" style={{ height: '100vh' }}>
				<h1>HOME PAGE HERE</h1>
			</Element>
		</div>
	);
};

import { Button, Typography, Icon, Card, Row } from 'antd';
import ScrollAnimation from 'react-animate-on-scroll';

import React from 'react';
import styled from 'styled-components';
import Particles from 'react-particles-js';
import particleConfig from '../assets/particles-config.json';
import { HomeHeader } from '../components/header/HomeHeader';
import { Link, Element } from 'react-scroll';
import { About } from './About';
import { Projects } from './Projects';
import { Header } from '../components/header/Header';
import { useMediaQuery } from 'react-responsive';

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

const WhiteText = styled(Title)`
	color: rgba(255, 255, 255, 0.89) !important;
`;

const NameText = styled.span`
	color: #f73859;
`;

const BannerButton = styled(Button)`
	&& {
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
		:active,
		:focus {
			background: inherit;
		}
	}
`;

const BannerButtonText = styled(WhiteText)`
	margin-bottom: 0 !important;
	padding: 7px;
`;

const ParticlesBackground = {
	height: '100vh',
	position: 'absolute',
	zIndex: -1,
	background: '#252934'
};

interface Props {}

const params: any = particleConfig;

export const Home: React.FC<Props> = () => {
	const pages = ['about', 'projects', 'blog', 'contact'];

	const isMobile = useMediaQuery({
		query: '(max-width: 767px)'
	});

	return (
		<div>
			<Element name="home">
				<Particles style={ParticlesBackground} params={params} />
				<BannerContainer>
					<BannerItem>
						<WhiteText>
							Hi there, I'm
							<br />
							<NameText>Sercan Yektaş.</NameText>
							<br />
							I'm a full-stack software developer.
						</WhiteText>
						<Link
							to="about"
							spy={true}
							smooth={true}
							duration={300}
							offset={-52}
							activeClass="link-active"
						>
							<BannerButton>
								<BannerButtonText level={4}>
									View my work <Icon className="arrow-down-ease" type="arrow-right" />
								</BannerButtonText>
							</BannerButton>
						</Link>
					</BannerItem>
				</BannerContainer>
			</Element>
			<HomeHeader />
			<>
				{isMobile ? (
					<div>
						<About />
						<Projects />
					</div>
				) : (
					<div>
						<ScrollAnimation delay={200} duration={0.3} animateIn="slideInLeft">
							<About />
						</ScrollAnimation>
						<ScrollAnimation delay={200} duration={0.3} animateIn="slideInLeft">
							<Projects />
						</ScrollAnimation>
					</div>
				)}
			</>
		</div>
	);
};

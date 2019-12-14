import * as React from 'react';
import styled from 'styled-components';
import { Row, Col, Card, Icon, Layout } from 'antd';
import { BasePage } from '../components/common/BasePage';
import { useMediaQuery, MediaQueryProps } from 'react-responsive';

const { Content } = Layout;

const Container = styled(Content)`
	&& {
		padding: 20px 30px 20px 30px;
	}
`;

interface Props {}

const StyledSkill = styled.p`
	float: left;
	padding-left: 10px;
	padding-right: 10px;
	font-size: 20px;
	color: rgba(0, 0, 0, 0.65);
`;

const SkillsIconHolder = styled.div`
	background: #41a4f5;
	text-align: center;
	width: 80px;
	height: 80px;
	padding-top: 1.5rem;
	top: -40px;
	left: 50%;
	margin: 0 auto;
	border-radius: 50%;
`;

const ColSkill = styled(Col)<{ mobile: boolean; notLastCol: boolean }>`
	${(props) => props.notLastCol && !props.mobile && 'padding-right: 20px'};
	${(props) => props.mobile && 'margin-bottom: 10px'};
` as any;

const ColAbout = styled(Col)<{ mobile: boolean }>`
	${(props) => !props.mobile && `padding-right: 20px; margin-bottom: 10px`};
	${(props) => props.mobile && 'margin-bottom: 10px'};
	height: 100%;
`;

const SkillCard = styled(Card)`
	width: 100%;
	min-height: 370px;
	box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
`;

export const Projects: React.FC<Props> = () => {
	const mySkills = [
		{
			category: 'Backend',
			icon: 'database',
			skills: ['Java', 'Python', 'ONOS', 'SDN']
		},
		{
			category: 'Frontend',
			icon: 'layout',
			skills: ['React/Mobx/Angular', 'React Native']
		},
		{ category: 'Other Tools', icon: 'tool', skills: ['JMeter', 'JProfiler'] }
	];

	const isMobile = useMediaQuery({
		query: '(max-width: 767px)'
	});
	return (
		<BasePage title="projects">
			<Container>
				<Row style={{ marginTop: 20 }}>
					<ColAbout xs={24} sm={24} md={9} mobile={isMobile}>
						<Card
							bordered={false}
							style={{
								width: '100%',
								minHeight: 370,
								boxShadow: '0 0.125rem 0.25rem rgba(0,0,0,0.075)'
							}}
						>
							<img
								width="150"
								src="https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
							/>
							<p>
								I'm a full-stack developer specialised in frontend and backend development for
								complex scalable web apps. I write about web development on my blog and regularly
								speak at various web conferences and meetups. Want to know how I may help your
								project? Check out my project case studies and resume.
							</p>
						</Card>
					</ColAbout>

					{mySkills.map((skillObj) => {
						return (
							<ColSkill
								xs={24}
								sm={24}
								md={5}
								mobile={isMobile}
								notLastCol={skillObj.category !== 'other tools'}
							>
								<SkillCard key={skillObj.category} bordered={false}>
									<SkillsIconHolder>
										<Icon type={skillObj.icon} style={{ fontSize: '32px', color: 'white' }} />
									</SkillsIconHolder>
									<h2>{skillObj.category}</h2>
									{skillObj.skills.map((tool) => {
										return (
											<Col xs={24} sm={24}>
												<StyledSkill key={tool}>
													<Icon type="thunderbolt" style={{ color: '#08c' }} /> {tool}
												</StyledSkill>
											</Col>
										);
									})}
								</SkillCard>
							</ColSkill>
						);
					})}
				</Row>
			</Container>
		</BasePage>
	);
};

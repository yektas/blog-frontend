import { Card, Col, Row } from 'antd';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';
import * as React from 'react';

import { RootStoreContext } from '../../store/RootStore';

const { Meta } = Card;

interface CategoryType {
	id: number;
	name: string;
}
const categories: CategoryType[] = [
	{ id: 1, name: 'Javascript' },
	{ id: 2, name: 'Python' },
	{ id: 3, name: 'Java' },
	{ id: 4, name: 'UI/UX' }
];

interface Props {}

export const ChooseCategory: React.FC<Props> = observer(() => {
	const { postStore } = React.useContext(RootStoreContext);

	return (
		<Row gutter={16}>
			{categories.map((category: CategoryType) => (
				<Col span={6}>
					<Card
						className={classnames(postStore.categoryId === category.id && 'ant-card-grid-selected')}
						size="small"
						style={{ width: 'fit-content' }}
						cover={
							<img
								alt="example"
								width="80"
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
							/>
						}
						onClick={() => postStore.setCategory(category.id)}
					>
						<Meta title={category} />
					</Card>
				</Col>
			))}
		</Row>
	);
});

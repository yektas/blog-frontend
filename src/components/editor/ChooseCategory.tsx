import { Card, Col, Row } from 'antd';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';
import * as React from 'react';

import { RootStoreContext } from '../../store/RootStore';
import { useCategoriesQuery } from '../../generated/graphql';

const { Meta } = Card;

interface CategoryType {
	id: number;
	name: string;
}

interface Props {}

export const ChooseCategory: React.FC<Props> = observer(() => {
	const { postStore } = React.useContext(RootStoreContext);
	const { data, loading, error } = useCategoriesQuery();

	if (!data) {
		return <div>Loading...</div>;
	}

	return (
		<Row gutter={16}>
			{data.categories.map((category: CategoryType) => (
				<Col span={6} key={category.id}>
					<Card
						className={classnames(postStore.categoryId === category.id && 'ant-card-grid-selected')}
						size="small"
						style={{ width: 'fit-content' }}
						cover={
							<img
								alt="example"
								height="300"
								width="300"
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
							/>
						}
						onClick={() => postStore.setCategory(category.id)}
					>
						<Meta title={category.name} />
					</Card>
				</Col>
			))}
		</Row>
	);
});

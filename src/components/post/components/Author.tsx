import * as React from 'react';

import { SecondaryText } from '../../common/SecondaryText';

interface Props {}

export const Author: React.FC<Props> = ({ children }) => {
	return <SecondaryText bold>{children}</SecondaryText>;
};

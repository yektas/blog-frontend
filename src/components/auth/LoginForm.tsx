import { Button, Icon } from 'antd';
import { Field, Form as FormikForm, Formik } from 'formik';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';

import { getAccessToken, setAccessToken } from '../../accessToken';
import { useLoginMutation } from '../../generated/graphql';
import { RootStoreContext } from '../../store/RootStore';
import { UserType } from '../../store/UserType';
import { FormInput } from '../common/FormInput';

interface Props {}

interface FormValues {
	email: string;
	password: string;
}

const validationSchema = Yup.object({
	email: Yup.string()
		.email('Email not valid')
		.required('Email is required'),
	password: Yup.string().required('Password is required')
});

const Form = styled(FormikForm)`
	max-width: 400px;
	margin: auto;
`;

export const LoginForm: React.FC<Props> = observer(() => {
	const { userStore } = React.useContext(RootStoreContext);
	const [login] = useLoginMutation();

	const handleSubmit = async (values: FormValues, actions: any) => {
		actions.setSubmitting(false);
		const response = await login({
			variables: {
				email: values.email,
				password: values.password
			}
		});
		if (response && response.data) {
			setAccessToken(response.data.login.accessToken);
			console.log('Access token: ', getAccessToken());
			const user = response.data.login.user;
			userStore.setUser(user as UserType);
		}
	};
	return (
		<Formik
			initialValues={{
				email: '',
				password: ''
			}}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
			render={(formProps) => (
				<Form>
					<Field
						component={FormInput}
						name="email"
						type="email"
						placeholder="Email"
						prefix={
							<Icon
								type="user"
								style={{
									color: 'rgba(0,0,0,.25)'
								}}
							/>
						}
						hasFeedback
					/>
					<Field
						component={FormInput}
						name="password"
						type="password"
						placeholder="Password"
						prefix={
							<Icon
								type="lock"
								style={{
									color: 'rgba(0,0,0,.25)'
								}}
							/>
						}
					/>
					<Button type="primary" htmlType="submit" loading={formProps.isSubmitting}>
						Login
					</Button>
				</Form>
			)}
		/>
	);
});

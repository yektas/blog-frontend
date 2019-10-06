import { Form, Input } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import { FieldProps, FormikProps } from 'formik';
import * as React from 'react';

interface MyFormValues {
	email: string;
	password: string;
}
interface Props {
	type: string;
}
type OwnProps = FieldProps<MyFormValues> & FormikProps<MyFormValues> & FormItemProps & Props;

const Password = Input.Password;

export const FormInput: React.FC<OwnProps> = ({
	field,
	form,
	hasFeedback,
	label,
	submitCount,
	type,
	...props
}) => {
	const touched = (form.touched as any)[field.name];
	const submitted = submitCount > 0;
	const hasError = (form.errors as any)[field.name];
	const submittedError = hasError && submitted;
	const touchedError = hasError && touched;
	const onInputChange = (event: any) => form.setFieldValue(field.name, event.target.value);
	const onChange = (value: any) => form.setFieldValue(field.name, value);
	const onBlur = () => form.setFieldTouched(field.name, true);
	return (
		<Form.Item
			label={label}
			hasFeedback={(hasFeedback && submitted) || (hasFeedback && touched) ? true : false}
			help={submittedError || touchedError ? hasError : false}
			validateStatus={submittedError || touchedError ? 'error' : 'success'}
		>
			{type === 'password' ? (
				<Password
					{...field}
					{...props}
					onBlur={onBlur}
					onChange={type ? onInputChange : onChange}
				/>
			) : (
				<Input {...field} {...props} onBlur={onBlur} onChange={type ? onInputChange : onChange} />
			)}
		</Form.Item>
	);
};

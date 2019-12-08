import { Icon } from 'antd';
import { observer } from 'mobx-react-lite';
import axios from 'axios';
import * as React from 'react';
import qs from 'qs';
import { useDropzone } from 'react-dropzone';
import { RootStoreContext } from '../../store/RootStore';
import styled from 'styled-components';

const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	text-align: center;
	background: #fafafa;
	border: 1px dashed #d9d9d9;
	border-radius: 4px;
	cursor: pointer;
`;

interface Props {}

function getBase64(file: File) {
	var reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onload = function() {
		console.log(reader.result);
	};
	reader.onerror = function(error) {
		console.log('Error: ', error);
	};
}

export const CoverImageUpload: React.FC<Props> = observer(() => {
	const [file, setFile] = React.useState();
	const cloudName = 'yektas';
	const maxSize = 1048576;

	const onDrop = React.useCallback((acceptedFiles) => {
		const myFile = Object.assign(acceptedFiles[0], {
			preview: URL.createObjectURL(acceptedFiles[0])
		});
		setFile(myFile);
		const myData = {
			file: getBase64(myFile),
			upload_preset: 'luxdx6wr',
			api_key: '171473169721994',
			api_secret: '3k6EPHNYf41gAp7u8vIoak1GRmU'
		};
		axios({
			method: 'post',
			url: `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
			data: qs.stringify(myData)
		}).then((res) => {
			console.log(res);
		});
	}, []);

	const { isDragActive, getRootProps, getInputProps, isDragReject, rejectedFiles } = useDropzone({
		onDrop,
		accept: ['image/png', 'image/jpeg'],
		minSize: 0,
		maxSize
	});

	const isFileTooLarge = rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize;

	// const { postStore, userStore } = React.useContext(RootStoreContext);
	return (
		<div>
			{file ? (
				<div key={file.name}>
					<div>
						<img width="300px" src={file.preview} alt={file.name} />
					</div>
				</div>
			) : (
				<Container {...getRootProps()}>
					{isDragActive && !isDragReject && "Drop it like it's hot!"}
					{isDragReject && 'File type not accepted, sorry!'}
					{isFileTooLarge && 'File is too large'}
					<input {...getInputProps()} />
					<p className="ant-upload-drag-icon">
						<Icon style={{ fontSize: 48, color: '#40a9ff' }} type="inbox" />
					</p>
					<p className="ant-upload-text">Click or drag file to this area to upload</p>
					<p className="ant-upload-hint">
						Support for a single or bulk upload. Strictly prohibit from uploading company data or
						other band files
					</p>
				</Container>
			)}
		</div>
	);
});

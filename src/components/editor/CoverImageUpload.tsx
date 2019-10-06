import { Icon } from 'antd';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import Dropzone from 'react-dropzone';

import { RootStoreContext } from '../../store/RootStore';

interface Props {}

export const CoverImageUpload: React.FC<Props> = observer(() => {
	const { postStore, userStore } = React.useContext(RootStoreContext);

	const [imageFile, setImageFile] = React.useState(null);
	const [imagePreview, setImagePreview] = React.useState<any>(null);

	const onDrop = (files: any) => {
		const uploadedFile = files.map((file: any) =>
			Object.assign(file, {
				preview: URL.createObjectURL(file)
			})
		)[0];
		//postStore.setCoverImage(files[0]);
		setImagePreview(uploadedFile);
	};

	return (
		<Dropzone onDrop={() => onDrop} multiple={false} accept="image/jpeg, image/png">
			{({ getRootProps, getInputProps, isDragActive }) => {
				return imagePreview ? (
					<div key={imagePreview!.name}>
						<div>
							<img width="300px" src={imagePreview.preview} alt="test" />
						</div>
					</div>
				) : (
					<div className="ant-upload ant-upload-drag" {...getRootProps()}>
						<p className="ant-upload-drag-icon">
							<Icon type="inbox" />
						</p>
						<p className="ant-upload-text">Click or drag file to this area to upload</p>
						<p className="ant-upload-hint">
							Support for a single or bulk upload. Strictly prohibit from uploading company data or
							other band files
						</p>
						<input {...getInputProps()} />
					</div>
				);
			}}
		</Dropzone>
	);
});

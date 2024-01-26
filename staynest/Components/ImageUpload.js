// FileUpload.js
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const FileUpload = ({ onUpload }) => {
  const onDrop = useCallback((acceptedFiles) => {
    onUpload(acceptedFiles);
  }, [onUpload]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} style={dropzoneStyles}>
      <input {...getInputProps()} />
      <p>Drag & drop some files here, or click to select files</p>
    </div>
  );
};

const dropzoneStyles = {
  border: '2px dashed #ccc',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
};

export default FileUpload;

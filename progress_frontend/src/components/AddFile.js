import { ChangeEvent, useState } from 'react';

function FileUploadSingle() {
  const [file, setFile] = useState();

  const handleFileChange = (e) => {
    if (e.target.files) {
        const selectedFile = e.target.files[0];
        console.log(selectedFile);
      setFile(selectedFile);
    }
  };

  const handleUploadClick = () => {
    // console.log(file);
    if (!file) {
      return;
    }
    const formData = new FormData();
    formData.append('file', file);

    // console.log(formData)
    // console.log(Array.from(formData.entries()));
    console.log(formData.getAll('file')[0]);
    fetch('http://localhost:8000/api/upload/', {
      method: 'POST',
      body: formData,
      
      headers: {
        'content-disposition': `attachment; filename=${file.name}`,
        // 'content-type': 'application/json',
        'content-length': `${file.size}`,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <input type="file" name="file" accept=".csv, .xlsx, .xls, .ods, .txt" onChange={handleFileChange} />

      <div>{file && `${file.name} - ${file.type}`}</div>

      <button onClick={handleUploadClick}>Upload</button>
    </div>
  );
}

export default FileUploadSingle;
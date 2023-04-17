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
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', fontSize:'14px', position:"relative", top:'200px'}}>
      <div style={{borderRadius:'10px', padding:'40px', marginTop:'50px', background:'linear-gradient(90deg, rgba(61,25,6,1) 0%, rgba(78,54,48,1) 69%, rgba(76,45,32,1) 93%)'}}>
      <h1 style={{color:'white'}}>
        Add Marks
      </h1>
      <input style={{padding:'20px', marginLeft:'45px'}} type="file" name="file" accept=".csv, .xlsx, .xls, .ods, .txt" onChange={handleFileChange} />
      <br />
      <div style={{color:'white', fontFamily:'sans-serif', font:'poppins'}}>
        {file && `${file.name} - ${file.type}`}
      </div>
      <br />
      <button onClick={handleUploadClick}>Upload</button>
      </div>
    </div>
  );
}

export default FileUploadSingle;
import axios from 'axios';
import React, { useRef, useState } from 'react'
import style from './style.module.css'

export default function Test() {
  const [file, setFile] = useState('')
  const [data, getFile] = useState({ name: "", path: "" });
  const [progress, setProgess] = useState(0); // progess bar
  const el = useRef(); // accesing input element

  const handleChange = (e) => {
    setProgess(0)
    const file = e.target.files[0]; // accessing file
    console.log(file);
    setFile(file); // storing file
  }

  const uploadFile = () => {
    const formData = new FormData();
    formData.append('file', file); // appending file
    axios.post('http://localhost:3001/upload', formData, {
        onUploadProgress: (ProgressEvent) => {
            let progress = Math.round(
            ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
            setProgess(progress);
        }
    }).then(res => {
        console.log(res);
        getFile({ name: res.data.name,
                 path: 'http://localhost:3001' + res.data.path
               })
    }).catch(err => console.log(err))}

  return (
    <div>
            <div className={style.fileupload}>
                <input className={style.any} type="file" ref={el} onChange={handleChange} />
            </div>
        </div>
  )
}


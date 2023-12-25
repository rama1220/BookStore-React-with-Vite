import { useState, useEffect } from "react";
import jsonData from "./data.json";

const Datadiri = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    // Pastikan jsonData adalah array atau akses properti data yang benar
    setdata(jsonData);
  }, []);

  return (
    <>
      <div className="container-data">
        <div className="box-data">
          <h1 className="title"> Data diri</h1>
          <div className="card-container1">
            {data.map((datas) => (
              <div key={datas.id} className="card1">
                <img src={datas.foto} alt="" />
                <h2>Nama : {datas.nama}</h2>
                <h2>Umur : {datas.umur}</h2>
                <h2>Alamat : {datas.alamat}</h2>
                <h2>Email : {datas.email}</h2>
                <h2>Telepon : {datas.telepon}</h2>
                <h2>Pekerjaan : {datas.pekerjaan}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Datadiri;

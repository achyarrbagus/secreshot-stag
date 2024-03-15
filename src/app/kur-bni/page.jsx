"use client"

import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {format} from "date-fns";
import * as XLSX from 'xlsx';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

const pathUploadKtp = "https://cepatsehats.com/api/v3/cs/uploads/ktp/";
const pathUploadNpwp = "https://cepatsehats.com/api/v3/cs/uploads/npwp/";
const pathUploadIo = "https://cepatsehats.com/api/v3/cs/uploads/izin-operasional/";

const dataKurBni = () => {

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState(new Date());
  const [isDownloadLoading, setLoadingDownload] = useState(false);
  
  useEffect(() => {
    const fetchDiscount = async () => {
      try {
        const formattedStartDate = startDate !== "" ? format(startDate, 'yyyy-MM-dd') : "";
        const formattedEndDate = endDate !== "" ? format(endDate, 'yyyy-MM-dd') : "";

        const url = `https://cepatsehats.com/api/v3/cs/getKur.php?startDate=${formattedStartDate}&endDate=${formattedEndDate}`;

        const resData = await fetch(url, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
          }
        });
        
        const result = await resData.json();

        if (result.status === 'success') {
          const updatedData = result.data.map((item, index) => {
            const dateParts = item.created_at.split(' ')[0];
            return {
              ...item,
              id: (index + 1).toString(),
              created_at: dateParts,
              updated_at: null,
              ktp: `${pathUploadKtp}${item.ktp}`,
              npwp: `${pathUploadNpwp}${item.npwp}`,
              izin_operasional: `${pathUploadIo}${item.izin_operasional}`,
              extensionFileKtp: item.ktp.split('.').pop(),
              extensionFileNpwp: item.npwp.split('.').pop(),
              extensionFileIo: item.izin_operasional.split('.').pop(),
            };
          });

          setData(updatedData);
          setFilteredData(updatedData);
        } else {
          console.error('Error fetching data:', result.message);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDiscount();
  }, []); 

  const downloadAllFiles = async () => {
    setLoadingDownload(true);
    const zip = new JSZip();
    const cors = "https://cepatsehats.com/api/v3/cs/fileUrl.php?fileUrl=";
    try {
      for (const item of filteredData) {
        const responseKtp = await fetch(cors + encodeURIComponent(item.ktp));
        const blobKtp = await responseKtp.blob();
        zip.file(`KTP_${item.clinic_name}.${item.extensionFileKtp}`, blobKtp);

        const responseNpwp = await fetch(cors + encodeURIComponent(item.npwp));
        const blobNpwp = await responseNpwp.blob();
        zip.file(`NPWP_${item.clinic_name}.${item.extensionFileNpwp}`, blobNpwp);

        const responseIzin = await fetch(cors + encodeURIComponent(item.izin_operasional));
        const blobIzin = await responseIzin.blob();
        zip.file(`IO_${item.clinic_name}.${item.extensionFileIo}`, blobIzin);
      }
      const timestamp = Date.now();
      const content = await zip.generateAsync({ type: 'blob' });
      saveAs(content, `KTP_NPWP_IZIN-OPERASIONAL_${timestamp}.zip`);
    } catch (error) {
      console.error('Error downloading files:', error);
    } finally {
      setLoadingDownload(false); 
    }
  }

  const handleFilter = (event) => {

    if (!event || !event.target) {
      return;
    }
  
    const value = (event.target.value || '').toLowerCase();
    const filteredData = data.filter(row => {
      const rowDate = new Date(row.created_at);
      return (
        (!startDate || rowDate >= startDate) &&
        (!endDate || rowDate <= endDate) &&
        (row.name.toLowerCase().includes(value) ||
        row.clinic_name.toLowerCase().includes(value) ||
        row.clinic_address.toLowerCase().includes(value))
      );
    });

    setFilteredData(filteredData);
  };

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(filteredData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'KUR BNI');
    XLSX.writeFile(wb, `kur-bni-${Date.now()}.xlsx`);
  };

  const columns = [
    {
      name: 'No',
      selector: row => row.id,
      sortable: true,
    },
    {
      name: 'Name PIC Perwakilan',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'No Handphone PIC',
      selector: row => row.phone,
      sortable: true,
    },
    {
      name: 'Clinic Name',
      selector: row => row.clinic_name,
      sortable: true,
    },
    {
      name: 'Clinic Address',
      selector: row => row.clinic_address,
      sortable: true,
    },
    {
      name: 'Operational License Number',
      selector: row => row.operational_license_number,
      sortable: true,
    },
    {
      name: 'Clinic Fasyankes Code',
      selector: row => row.clinic_fasyankes_code,
      sortable: true,
    },
    {
      name: 'Created At',
      selector: row => row.created_at,
      sortable: true,
    },
    {
      name: 'KTP',
      selector: row => <a href={row.ktp}>{row.ktp !== null ? `KTP_${row.clinic_name}` : ''}</a>,
      sortable: true,
    },
    {
      name: 'NPWP',
      selector: row => <a href={row.npwp}>{row.npwp !== null ? `NPWP_${row.clinic_name}` : ''}</a>,
      sortable: true,
    },
    {
      name: 'Izin Operasional',
      selector: row => <a href={row.izin_operasional}>{row.izin_operasional !== null ? `IO_${row.clinic_name}` : ''}</a>,
      sortable: true,
    },
  ];

  return (
    <>
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Form Registrasi</title>
      <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
      <link rel="stylesheet" href="assets/css/pbs/style.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
    </head>
    <div>
    <div className="row mt-4 pb-3">
      <div className="col-7 col-lg-2 mx-3 pt-3">
        <input className="form-control" type="text" placeholder="Search" onChange={(event) => handleFilter(event)} />
      </div>
      <div className="col-3 col-lg-1 pt-3">
        <a className="btn btn-primary btn-sm w-100" onClick={exportToExcel}>
          Export
        </a>
      </div>
      <div className='col-lg-2 col-5 mx-3 pt-3'>
        <div className='row'>
          <DatePicker
            className='form-control'
            selected={startDate}
            onChange={date => setStartDate(date)}
            dateFormat="yyyy-MM-dd"
            placeholderText='Start Date'
          />
        </div>
      </div>
      <div className='col-lg-2 col-5 pt-3'>
        <div className='row'>
          <DatePicker
            className='form-control'
            selected={endDate}
            onChange={date => setEndDate(date)}
            dateFormat="yyyy-MM-dd"
            placeholderText='end Date'
          />
        </div>
      </div>
      <div className='col-6 col-lg-2 mx-3 pt-3'>
        <button className='btn btn-secondary' onClick={handleFilter}>Apply Filter</button>
      </div>
      <div className='col-lg-2 pt-3'>
        <button className='btn btn-secondary' onClick={downloadAllFiles} style={{color: "blue", cursor: "pointer"}}>{isDownloadLoading ? 'Downloading...' : 'Download Files'}</button>
      </div>
    </div>
    {loading ? (
      <div className='d-flex align-items-center justify-content-center'>
        <p>Loading...</p>
      </div>
      ) : (
        <DataTable
        title="Data KUR BNI"
        columns={columns}
        data={filteredData}
        pagination
        highlightOnHover
      />
      ) }

    </div>
    </>
	);
}

export default dataKurBni;
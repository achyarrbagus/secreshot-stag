"use client"
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {format} from "date-fns";
import * as XLSX from 'xlsx';

const URL_API = "https://cepatsehats.com/api/v3/cs/";

const columns = [
  {
    name: 'ID',
    selector: row => row.id,
    sortable: true,
  },
  {
    name: 'Name',
    selector: row => row.name,
    sortable: true,
  },
  {
    name: 'Phone',
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
    selector: row => <a href={`${URL_API}uploads/ktp/${row.ktp}`}>{row.izin_operasional !== null ? row.ktp : ''}</a>,
    sortable: true,
  },
  {
    name: 'NPWP',
    selector: row => <a href={`${URL_API}uploads/npwp/${row.npwp}`}>{row.izin_operasional !== null ? row.npwp : ''}</a>,
    sortable: true,
  },
  {
    name: 'Izin Operasional',
    selector: row => <a href={`${URL_API}uploads/izin-operasional/${row.izin_operasional}`}>{row.izin_operasional !== null ? row.izin_operasional : ''}</a>,
    sortable: true,
  },
];

const dataKurBni = () => {

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState(new Date());
  
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
                updated_at: null
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

  return (
    <>
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Form Registrasi</title>
      <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
      <link rel="stylesheet" href="assets/css/pbs/style.css" />
    </head>
    <div>
    <div className="row mt-4 pb-3">
      <div className="col-7 col-lg-3 mx-3 pt-3">
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
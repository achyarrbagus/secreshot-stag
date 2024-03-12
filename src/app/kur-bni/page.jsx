"use client"
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import * as XLSX from 'xlsx';

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
];

const dataKurBni = () => {

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDiscount = async () => {
      try {
        const resData = await fetch('https://cepatsehats.com/api/v3/cs/getKur.php', {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
          },
        });

        const result = await resData.json();

        if (result.status === 'success') {

          const updatedData = result.data.map((item, index) => ({
            ...item,
            id: (index + 1).toString(),
          }));

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
    const value = event.target.value.toLowerCase();
    const filteredData = data.filter(row =>
      row.name.toLowerCase().includes(value) ||
      row.clinic_name.toLowerCase().includes(value) ||
      row.clinic_address.toLowerCase().includes(value) 
    );
    setFilteredData(filteredData);
  };

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(filteredData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
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
    <div className="row mt-4">
      <div className="col-7 col-lg-3 mx-3">
        <input className="form-control" type="text" placeholder="Search" onChange={handleFilter} />
      </div>
      <div className="col-3">
        <a className="btn btn-primary btn-sm" onClick={exportToExcel}>
          Export
        </a>
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
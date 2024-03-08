import * as Yup from 'yup'

export const validation = Yup.object({
  name: Yup.string().min(3, 'Minimal 3 karakter').required('*Data belum diisi'),
  phone: Yup.number().integer('*Data belum diisi').min(10, 'Minimal memasukan 10 digit').required('*Data belum diisi'),
  clinic_name: Yup.string().min(3, 'Minimal 3 karakter').required('*Data belum diisi'),
  clinic_address: Yup.string().min(3, 'Minimal 3 karakter').required('*Data belum diisi'),
  clinic_operation_license_number: Yup.string().min(3, 'Minimal 3 karakter').required('*Data belum diisi'),
  fasyankes_clinic_code: Yup.string().min(3, 'Minimal 3 karakter').required('*Data belum diisi'),
});
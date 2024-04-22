import axios from "axios";
import { number } from "yup";

class Helper {
  async RedirectToWa(form, lang, isForm) {
    if (!isForm) {
      const formData = {
        customer_name: form.name,
        customer_address: form.address,
        service_name: form.service,
      };
      let resp = await axios
        .post("https://api.cepatsehat.com/api/v1/book-service", formData)
        .then(function (response) {
          const numberPhone = response.data.data.number_whatsapp;
          let url = `https://api.whatsapp.com/send/?phone=${numberPhone}&text=&type=phone_number&app_absent=0`;
          return url;
        })
        .catch(function (error) {
          console.log(error);
        });

      window.location.href = resp;
      return;
    }

    if (form?.name && form?.address && form?.service) {
      if (form.service == "Select Service") {
        return alert("please fill form correcly");
      }
      let wardingWa = encodeURIComponent(`
Hallo CepatSehat.com by Klinik Cepat Sehat, saya ingin konsultasi

Nama : ${form?.name}
Alamat : ${form?.address} 
Layanan : ${form?.service}`);

      if (lang == "EN") {
        wardingWa = encodeURIComponent(`
        Hello CepatSehat.com by Cepat Sehat Clinic, i want a consultation
        
        Name :  ${form.name}
        Address : ${form.address} 
        Service : ${form.service}
        `);
      }
      const formData = {
        customer_name: form.name,
        customer_address: form.address,
        service_name: form.service,
      };

      let resp = await axios
        .post("https://api.cepatsehat.com/api/v1/book-service", formData)
        .then(function (response) {
          console.log();
          const numberPhone = response.data.data.number_whatsapp;
          let url = `https://api.whatsapp.com/send/?phone=${numberPhone}&text=${wardingWa}&type=phone_number&app_absent=0`;
          return url;
        })
        .catch(function (error) {
          console.log(error);
        });

      window.location.href = resp;

      return;
    } else {
      alert("please fill form with correctly");
      return;
    }
  }
  async RedirectToTele(form) {
    const formData = {
      customer_name: form.name || "",
      customer_address: form.address || "",
      service_name: form.service || "",
    };

    let resp = await axios
      .post("https://api.cepatsehat.com/api/v1/book-service", formData)
      .then(function (response) {
        const url = response.data.data.url_telegram;
        return url;
      })
      .catch(function (error) {
        console.log(error);
      });

    window.location.href = resp;
  }
}

export default Helper;

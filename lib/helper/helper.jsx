import axios from "axios";
import { number } from "yup";

class Helper {
  async RedirectToWa(form, lang, isForm) {
    if (!isForm) {
      console.log(isForm);
      const formData = {
        customer_name: "no-input",
        customer_address: "no-input",
        service_name: "no-input",
      };
      let resp = await axios
        .post("https://api.cepatsehat.com/api/v1/book-service", formData)
        .then(function (response) {
          const numberPhone = response.data.data.number_whatsapp;
          let url = `https://api.whatsapp.com/send/?phone=6282221122311&text=Hello%2C+Clinic+Cepat+Sehat%21+%F0%9F%A9%BA+I%E2%80%99m+looking+into+your+Stem+Cells+Therapy+and+would+love+to+know+more+about+the+treatments+and+who+it%E2%80%99s+best+suited+for.+Thanks%21+%E2%9C%A8`;
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
Hello%2C+Clinic+Cepat+Sehat%21+%F0%9F%A9%BA+I%E2%80%99m+looking+into+your+Stem+Cells+Therapy+and+would+love+to+know+more+about+the+treatments+and+who+it%E2%80%99s+best+suited+for.+Thanks%21+%E2%9C%A8

Nama : ${form?.name}
Alamat : ${form?.address} 
Layanan : ${form?.service}`);

      if (lang == "EN" || lang == "en") {
        wardingWa = encodeURIComponent(`
      Hello%2C+Clinic+Cepat+Sehat%21+%F0%9F%A9%BA+I%E2%80%99m+looking+into+your+Stem+Cells+Therapy+and+would+love+to+know+more+about+the+treatments+and+who+it%E2%80%99s+best+suited+for.+Thanks%21+%E2%9C%A8
        
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
    if (form?.name && form?.address && form?.service) {
      if (form.service == "Select Service") {
        return alert("please fill form correcly");
      }

      const formData = {
        customer_name: form.name,
        customer_address: form.address,
        service_name: form.service,
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

      return;
    } else {
      alert("please fill form with correctly");
      return;
    }
  }
}

export default Helper;

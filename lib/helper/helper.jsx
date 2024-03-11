class Helper {
  RedirectToWa(form, lang, isForm) {
    let phone = "6285212500030";
    const date = new Date();
    if (date.getHours() >= 21 || date.getHours() < 6) {
      phone = "6281222200113";
    }

    if (!isForm) {
      let url = `https://api.whatsapp.com/send/?phone=${phone}&text=&type=phone_number&app_absent=0`;
      window.location.href = url;
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

      let url = `https://api.whatsapp.com/send/?phone=${phone}&text=${wardingWa}&type=phone_number&app_absent=0`;
      window.location.href = url;

      return;
    } else {
      alert("please fill form with correctly");
      return;
    }
  }
  RedirectToTele() {
    window.location.href = "https://t.me/cepat_sehat";
  }
}

export default Helper;

import { redirect } from "next/navigation";

export default function RootPage() {
  if (window.location.hostname === "https://www.cepat-sehat.com/") {
    window.location.replace("https://www.cepatsehat.com/");
  }

  console.log(window.location.hostname);
  redirect("/en");
}

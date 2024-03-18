"use client";

import Link from "next/link";

const cmsDashboard = () => {
  const PATH_DASHBOARD = "/cms/dashboard/";
  return (
    <>
    <h1>Dashboard v1</h1>
    <Link href={`${PATH_DASHBOARD}article`}>Article</Link>
    </>
  );
}

export default cmsDashboard;
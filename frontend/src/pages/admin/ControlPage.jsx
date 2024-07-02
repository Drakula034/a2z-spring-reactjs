import AdminHeader from "../../ui/admin/AdminHeader";
import { getUserInfo } from "../../services/api/user-services/userApi";
import { useEffect, useState } from "react";
// import styled from "styled-components";
import Layout from "../../features/control-panel/Layout";

function ControlPage() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await getUserInfo();
      setData(res);
    };
    fetchData();
  }, []);

  // console.log(data);
  return (
    <>
      <AdminHeader />
      <Layout />
    </>
  );
}

export default ControlPage;

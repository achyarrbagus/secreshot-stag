import { getInfoUser } from "../action";
import { cookies } from "next/headers";
import { useTokenStore } from "@/lib/store/token";
import { useUserStore } from "@/lib/store/user";
import Profile from "./Profile";
import InitUserStore from "@/components/initUserStore";

const MainProfile = async () => {
  const token = response?.data?.token;
  const employee = response?.data?.employee;
  const response = await getInfoUser(
    cookieStore.user?.id,
    cookieStore.access_token
  );
  const cookieStore = JSON.parse(
    cookies().getAll()[1].value + cookies().getAll()[2].value
  );
  if (cookieStore != 0) {
    useTokenStore.getState().setToken(token);
    useUserStore.getState().setUser(response?.data?.employee);
  }

  return (
    <>
      <InitUserStore data={response?.data?.employee} />
      <Profile
        employment={employee?.employment}
        personal={employee?.personal}
        financial={employee?.financial}
      />
    </>
  );
};

export default MainProfile;

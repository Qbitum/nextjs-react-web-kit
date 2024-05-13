import { useContext, useEffect, useState } from "react";
import { appPagesMenu } from "../menu";
import { SidebarComponent } from "../../components/sidebar";
import Aside from "./Aside";
import { AbacProvider } from "../context/react-abac/src";
import { rules } from "@/abac.config";
import { AuthContext, IAuthContext } from "react-oauth2-code-pkce";

const DefaultAside = () => {
  const [doc] = useState(
    (typeof window !== "undefined" &&
      localStorage.getItem("IM_WEB_ASIDE") === "true") ||
    false
  );

  const auth = useContext<IAuthContext>(AuthContext);
  console.log("Wrapper token : ", auth?.tokenData);

  const [user, setUser] = useState({
    id: 1,
    roles: [""],
    permissions: [],
    age: 0,
  });

  useEffect(() => {
    if (auth && auth.tokenData) {
      setUser({
        id: 1,
        roles: auth?.tokenData?.role,
        permissions: auth?.tokenData?.permissions,
        age: auth?.tokenData?.age,
      });
    }
  }, [auth]);

  // console.log(user);

  return (
    <Aside>
      <AbacProvider
        rules={rules}
        user={user}
        roles={user.roles}
        permissions={user.permissions}
      >
        <SidebarComponent menu={appPagesMenu} id="main_naviigation"></SidebarComponent>

      </AbacProvider>
    </Aside>
  );
};

export default DefaultAside;

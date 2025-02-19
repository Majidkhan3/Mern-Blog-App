import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";
import DashPosts from "../components/DashPosts";
import DashUser from "../components/DashUser";
import DashComments from "../components/DashComments";
import DashCom from "../components/DashCom";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabfromUrl = urlParams.get("tab");
    console.log(tabfromUrl);
    if (tabfromUrl) {
      setTab(tabfromUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        <DashSidebar />
      </div>
      {tab === "profile" && <DashProfile />}
      {tab === "post" && <DashPosts />}
      {tab === "users" && <DashUser />}
      {tab === "comments" && <DashComments />}
      {tab === "dash" && <DashCom />}
    </div>
  );
}

import axios from "axios";
import { useRouter } from "next/router"

import styles from "../../styles/Home.module.css"

const index = () => {

  const router = useRouter()
  
  // handleget user
  const handleGetUser = async () => {
    const user = await axios.get("/api/user");
  };

  const handleLogOut = async () => {
      const user = await axios.get("/api/auth/logout");
      if (user.status === 200) {
         router.push("/login")
        
     }
  };

  return (
      <div className={styles.dashboard}>
    <button onClick={() => handleGetUser()}> User </button>
   
      <button onClick={() => handleLogOut()}> Logout </button>
    </div>
  )
}

export default index
import { createContext, useState } from "react";

export const AppContex = createContext();

const AppContexProvider = (props) => {
  const [userData, setUserData] = useState(null)
  const [chatData, setChatData] = useState()

  const value = {
  

  }
  return (
    <AppContex.Provider>
      {props.children}
    </AppContex.Provider>
  )
}

export default AppContexProvider
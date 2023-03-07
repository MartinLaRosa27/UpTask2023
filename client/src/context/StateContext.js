import React, { createContext, useContext } from "react";
import axios from "axios";
const Context = createContext();

export const StateContext = ({ children }) => {
  const [countriesList, setCountriesList] = React.useState(null);

  const getAllCountries = async () => {
    await axios
      .get(process.env.NEXT_PUBLIC_COUNTRIES_API)
      .then((res) => {
        const newArray = res.data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountriesList(newArray);
      })
      .catch((e) => console.log(e));
  };

  return (
    <Context.Provider value={{ countriesList, getAllCountries }}>
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => {
  return useContext(Context);
};

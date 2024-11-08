import { createContext, useState, useEffect } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";
import useLocalStorage from "../hooks/useLocalStorage";
const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [texts, setTexts] = useState({});

  const [lang, setLang] = useLocalStorage("lang", "tr");

  const { data, fetchError, isLoading } = useAxiosFetch(`./data/db.json`);

  useEffect(() => {
    if (data) {
      setTexts(data[lang]);
    } else if (fetchError) {
      console.log(fetchError);
    }
  }, [data, lang]);

  return (
    <DataContext.Provider
      value={{
        isLoading,
        texts,
        setTexts,
        lang,
        setLang,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;

import { createContext, useContext, useState, useEffect } from "react";

const AddressContext = createContext();

export function AddressProvider({ children }) {
  const [address, setAddress] = useState(() => {
    const saved = localStorage.getItem("savedAddress");

    return saved
      ? JSON.parse(saved)
      : {
          name: "",
          phone: "",
          address: "",
          city: "",
          pincode: "",
        };
  });

  useEffect(() => {
    localStorage.setItem("savedAddress", JSON.stringify(address));
  }, [address]);

  return (
    <AddressContext.Provider
      value={{
        address,
        setAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
}

export const useAddress = () => useContext(AddressContext);

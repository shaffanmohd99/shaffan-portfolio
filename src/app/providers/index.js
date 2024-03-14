import Context from "@/context/navigationContext";

export function Providers({ children }) {
  return <Context>{children}</Context>;
}

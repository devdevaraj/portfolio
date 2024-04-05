import { createContext } from "react";
import { ContextType } from "./ppoem";

const GlobalContext = createContext<ContextType | null>(null);

export default GlobalContext;
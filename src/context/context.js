import { createContext, useContext } from 'react';

const dataContext = createContext();
export default dataContext;
const useMyContext = () => useContext(dataContext);
export { useMyContext };

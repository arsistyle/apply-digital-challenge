import { useEffect, useState } from 'react';
import { HitsContext } from './HitsContext';
import { useHits } from './useHits';

export const HitsProvider = ({ children }) => {
  const { hits: data = {}, setPage, setQuery, loading } = useHits();
  const [hits, setHits] = useState({});
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    if (!loading && data) setHits(data);
  }, [data]);

  return <HitsContext.Provider value={{ hits, setPage, setQuery, favs, setFavs, loading }}>{children}</HitsContext.Provider>;
};

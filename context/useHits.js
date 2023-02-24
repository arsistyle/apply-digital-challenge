import { useState, useEffect } from 'react';
import axios from 'axios';
import { ITEMS_PER_PAGE } from './constants';

export const useHits = () => {
  const [hits, setHits] = useState({});
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const hitsPerPage = ITEMS_PER_PAGE;

  const fetchHits = () => {
    setLoading(true);
    axios
      .get('https://hn.algolia.com/api/v1/search_by_date', {
        params: {
          query,
          page,
          hitsPerPage
        }
      })
      .then((response) => {
        setHits(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchHits();
  }, [query, page, hitsPerPage]);

  return { hits, setHits, setPage, setQuery, loading };
};

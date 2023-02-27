/**
 * Fetches hits data from the HN Search API.
 *
 * @async
 * @param {Object} options - The options object for the API request.
 * @param {string} options.query - The search query string.
 * @param {number} options.page - The current page number.
 * @param {number} options.hitsPerPage - The number of hits to return per page.
 * @returns {Promise} - The promise containing the fetched data.
 */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import PropTypes from 'prop-types';

export const fetchHits = createAsyncThunk('hits/fetchData', async ({ query, page, hitsPerPage }) => {
  const response = await axios.get('https://hn.algolia.com/api/v1/search_by_date', {
    params: {
      query,
      page,
      hitsPerPage
    }
  });
  return response.data;
});

/**
 * The initial state of the hits slice.
 */
const initialState = {
  hits: [],
  hitsPerPage: 8,
  query: '',
  page: 0,
  loading: false,
  error: null
};

const hitsSlice = createSlice({
  name: 'hits',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchHits.pending, (state) => {
        return {
          ...state,
          loading: true,
          error: null
        };
      })
      .addCase(fetchHits.fulfilled, (state, { payload }) => {
        const { hits, hitsPerPage, page, nbHits } = payload || {};
        return {
          ...state,
          loading: false,
          hits,
          hitsPerPage,
          page,
          nbHits
        };
      })
      .addCase(fetchHits.rejected, (state, { error }) => {
        return {
          ...state,
          loading: false,
          error: error.message
        };
      });
  }
});

// PropTypes
export const hitsPropType = PropTypes.shape({
  hits: PropTypes.arrayOf(PropTypes.object),
  hitsPerPage: PropTypes.number,
  query: PropTypes.string,
  page: PropTypes.number,
  loading: PropTypes.bool,
  error: PropTypes.string
});

// Export the reducer and actions
export default hitsSlice.reducer;

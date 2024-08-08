import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetcher from "../../api/fetcher";

export const fetchMovieDetailApi = createAsyncThunk(
  "movieDetail/fetcher",
  async (maPhim) => {
    try {
      const respone = await fetcher.get(
        `/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`
      );
      return respone.data.content;
    } catch (error) {
      throw Error(error);
    }
  }
);

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const movieDetail = createSlice({
  name: "moviveDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieDetailApi.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovieDetailApi.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
      })
      .addCase(fetchMovieDetailApi.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default movieDetail.reducer;

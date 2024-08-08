import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBannerApi } from "../../redux/slices/banner";
import { useNavigate } from "react-router-dom";

const QuanLyPhim = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {loading, listBanner, error} = useSelector((state) => state.banner)

  useEffect(() => {
    dispatch(fetchBannerApi())
  }, []);

  const handleRedirectDetails = (maPhim) => {
    navigate(`/movie/${maPhim}`)
  }
  

  if (loading) return <p>....Loading</p>;

  if (error) return <p>Oops!!!</p>;

  return (
    <div>
      <h3 className="mb-5">QuanLyPhim</h3>
      {listBanner.map((item) => {
        return (
          <div key={item.maBanner} className="nb-5" onClick={() => handleRedirectDetails(item.maPhim)
          }>
          <img src={item.hinhAnh} className="w-full h-full object-cover cursor-pointer" alt="" />
        </div>
        )
      }
      )}
    </div>
  );
};

export default QuanLyPhim;

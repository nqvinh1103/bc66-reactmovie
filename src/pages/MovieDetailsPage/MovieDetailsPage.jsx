import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Col, Layout, Row, Typography } from "antd";
import { format } from "date-fns";
import { fetchMovieDetailApi } from "../../redux/slices/movieDetail";

const { Content } = Layout;

const MovieDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.movieDetail);

  useEffect(() => {
    if (id) {
      dispatch(fetchMovieDetailApi(id));
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oops!</p>;
  return (
    <Content className="mx-auto max-w-lg">
    <Row gutter={[48]} className="mt-10">
      <Col span={8}>
        <img src={data?.hinhAnh} className="h-60 w-full" alt={data?.tenPhim} />
      </Col>
      <Col span={16}>
        <Typography className="text-3xl font-semibold text-green-600">
          {data?.tenPhim}
        </Typography>
        <Typography>{data?.moTa}</Typography>
        <Typography>{data?.ngayKhoiChieu && format(data.ngayKhoiChieu, 'PPpp')}</Typography>
      </Col>
    </Row>
  </Content>
  );
};

export default MovieDetailsPage;

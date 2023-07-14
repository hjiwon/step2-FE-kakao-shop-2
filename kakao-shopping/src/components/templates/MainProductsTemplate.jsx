import { useState, useEffect } from "react";
import Container from "../atoms/Container";
import MainProductsSkeleton from "../organisms/MainProductsSkeleton";
import PageSetButton from "../molecules/PageSetButton";
import MainProducts from "../organisms/MainProducts";
import { useQuery } from "react-query";
import { getProducts } from '../../apis/api';
import Error from "../molecules/Error";

const MainProductsTemplate = () => {

  const [page, setPage] = useState(0);

  const { data, isLoading, isError, error, refetch } = useQuery("products", () => getProducts(page));

  const slicedData = data?.data.response;

  useEffect(() => {
    refetch();
  }, [page, refetch])

  if(isLoading ) {
    return (
    <MainProductsSkeleton />
    )
  }
  if(isError) {
    return (
      <Error errorStatus={error.message}/>
    )
  }
  return (
    <Container className="flex flex-col items-center justify-center">
      <MainProducts slicedData={slicedData} />
      <PageSetButton page={2} setPage={setPage} />
    </Container>
  );
}

export default MainProductsTemplate;

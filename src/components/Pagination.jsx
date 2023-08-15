import React, { useEffect } from "react";
import { Pagination as MuiPagination } from "@mui/material";
import { useProductContext } from "../contexts/ProductContext";
import { useSearchParams } from "react-router-dom";

const Pagination = () => {
  const { totalPages, page, setPage } = useProductContext();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);

    setSearchParams({
      ...currentParams,
      page,
    });
  }, [page]);

  return (
    <MuiPagination
      count={totalPages}
      page={page}
      onChange={(_, value) => setPage(value)}
      color="primary"
    />
  );
};

export default Pagination;

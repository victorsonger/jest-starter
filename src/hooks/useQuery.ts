// src/hooks/useQuery.ts
import React from "react";
import { useLocation } from "react-router-dom";

// 获取查询参数
const useQuery = () => {
  const a = "1";
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
};

export default useQuery;

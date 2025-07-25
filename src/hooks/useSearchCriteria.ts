"use client";

import { useState } from "react";

function useSearchCriteria() {
  const [values, setValues] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClear = () => {
    setValues({});
  };

  return { values, handleChange, handleClear };
}

export default useSearchCriteria;

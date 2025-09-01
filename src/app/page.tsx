"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Advocate } from "@/frontend/types";
import { AdvocateTable } from "@/frontend/components/AdvocateTable";
import { SearchBar } from "@/frontend/components/SearchBar";

export default function Home() {
  const [advocates, setAdvocates] = useState<Advocate[]>([]);
  const [searchInputValue, setSearchInputValue] = useState<string>("");
  const [page, setPage] = useState(1);
  const [limit] = useState(10); // rows per page
  const [totalPages, setTotalPages] = useState(1);

  const fetchAdvocates = async (page: number, limit: number) => {
    const response = await fetch(`/api/advocates?page=${page}&limit=${limit}`);
    const json = await response.json();
    setAdvocates(json.data);
    setTotalPages(json.totalPages);
  };

  useEffect(() => {
    fetchAdvocates(page, limit);
  }, [page, limit]);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.currentTarget.value);
  };

  const handleResetButtonClick = () => {
    setSearchInputValue("");
  };

  const filteredAdvocates = useMemo(() => {
    const searchTerm = searchInputValue.toLowerCase();

    return advocates.filter(
      (advocate) =>
        advocate.firstName.toLowerCase().includes(searchTerm) ||
        advocate.lastName.toLowerCase().includes(searchTerm) ||
        advocate.city.toLowerCase().includes(searchTerm) ||
        advocate.degree.toLowerCase().includes(searchTerm) ||
        advocate.specialties.join().toLowerCase().includes(searchTerm) ||
        String(advocate.yearsOfExperience).includes(searchTerm)
    );
  }, [advocates, searchInputValue]);

  return (
    <main className="bg-gray-50 pt-16 pb-20 px-24 text-gray-700">
      <SearchBar
        onResetButtonClick={handleResetButtonClick}
        onSearchInputChange={handleSearchInputChange}
        searchInputValue={searchInputValue}
      />
      <AdvocateTable
        advocates={filteredAdvocates}
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </main>
  );
}

'use client';
import { FC, useCallback } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Pagination as NextUIPagination } from "@nextui-org/pagination";

interface PaginationProps {
  totalPages: number;
}

const Pagination: FC<PaginationProps> = ({ totalPages }) => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const changePage = useCallback(
    (pageNumber: number | string) => {
      const params = new URLSearchParams(searchParams);
      params.set('page', pageNumber.toString());
      replace(`${pathname}?${params.toString()}`);
    },
    [pathname, replace, searchParams],
  );

  return (
    <NextUIPagination
      total={totalPages}
      color="secondary"
      page={currentPage}
      onChange={changePage}
    />
  )
};

export default Pagination;
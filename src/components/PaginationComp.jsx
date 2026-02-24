import { Pagination } from "flowbite-react";

export default function PaginationComp({currentPage, onPageChange}) {
    return (
        <div className="flex overflow-x-auto sm:justify-center">
            <Pagination currentPage={currentPage} totalPages={10} onPageChange={onPageChange} />
        </div>
    );
}
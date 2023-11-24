import React from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  

  const TableList: React.FC = () => {
    return (
  <Table className='border'>
  <TableHeader className='min-h-[70px]'>
    <TableRow>
      <TableHead className="font-medium">INVOICE</TableHead>
      <TableHead className="font-medium">AMOUNT</TableHead>
      <TableHead className="font-medium">DATE</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Startup Plan - #8</TableCell>
      <TableCell>$459 USD</TableCell>
      <TableCell>Oct 20, 2022</TableCell>
      <TableCell className="flex justify-end"> <button typeof='button'><img src='../images/download.png' alt='download'/></button></TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Startup Plan - #8</TableCell>
      <TableCell>$459 USD</TableCell>
      <TableCell>Oct 20, 2022</TableCell>
      <TableCell className="flex justify-end"> <button typeof='button'><img src='../images/download.png' alt='download'/></button></TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Startup Plan - #8</TableCell>
      <TableCell>$459 USD</TableCell>
      <TableCell>Oct 20, 2022</TableCell>
      <TableCell className="flex justify-end"> <button typeof='button'><img src='../images/download.png' alt='download'/></button></TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Startup Plan - #8</TableCell>
      <TableCell>$459 USD</TableCell>
      <TableCell>Oct 20, 2022</TableCell>
      <TableCell className="flex justify-end"> <button typeof='button'><img src='../images/download.png' alt='download'/></button></TableCell>
    </TableRow>
  </TableBody>
</Table>

)
}

export default TableList;
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import "./Table.css"

function createData(tid, activity, mode, date, amount, status) {
    return {tid, activity, mode, date, amount, status };
}

const rows = [
    createData('1234','TATA Motors', 'CC', '13-02-2022 01:15', '14 LACS', 'Completed'),
    createData('1224','MAHINDRA Garage', 'DB', '11-01-2025 01:25', '16 LACS', 'Pending'),
    createData('11234','MARUTI Service', 'UPI', '12-12-2022 01:55', '9 LACS', 'Completed'),
    createData('112324','MG store', 'CC', '25-02-2023 01:11', '18 LACS', 'Completed'),
    createData('14','MERCE store', 'CC', '10-06-2022 01:25', '52 LACS', 'Failed'),
];



export default function SimpleTable() {

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));

      const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 16,
        },
      }));

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead >
                    <StyledTableRow className="Tablehead">
                        <StyledTableCell>
                            ACTIVITY
                        </StyledTableCell>
                        <StyledTableCell>
                            MODE
                        </StyledTableCell>
                        <StyledTableCell>
                            DATE
                        </StyledTableCell>
                        <StyledTableCell>
                            AMOUNT(Rs)
                        </StyledTableCell>
                        <StyledTableCell>
                            Status
                        </StyledTableCell>
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow
                            key={row.id}
                            sx={{
                                '&:last-child td, &:last-child th':
                                    { border: 0 }
                            }}
                        >
                            <StyledTableCell scope="row">
                                {row.activity}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {row.mode}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {row.date}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {row.amount}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {
                                    row.status === 'Completed' ? <span className='success'> Completed</span> 
                                    : (
                                        row.status === 'Pending' ? <span className='pending'> Pending</span> 
                                        : <span className='failed'> Failed</span> 
                                    )
                                }
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

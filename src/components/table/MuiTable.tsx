import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Stack } from '@mui/material';

export const MuiTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.grey[600],
        color: theme.palette.common.white,
        fontSize: 16,
        fontWeight: 600,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

export const MuiTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export const MuiTableWrapper: React.FC<{
    children?: React.ReactNode;
    dataColumn: { name: string; width: string | number }[];
}> = ({ children, dataColumn }) => {
    return (
        <Stack sx={{ overflowX: 'scroll' }}>
            <Table sx={{ minWidth: 700, borderRadius: 50 }} aria-label='customized table'>
                <TableHead>
                    {dataColumn.map((column, i) => {
                        return (
                            <MuiTableCell key={i} width={column.width || ''} align='center'>
                                {column.name}
                            </MuiTableCell>
                        );
                    })}
                </TableHead>
                <TableBody>{children}</TableBody>
            </Table>
        </Stack>
    );
};

export const MuiTableHead: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <TableHead>
            <TableRow>{children}</TableRow>
        </TableHead>
    );
};

export const MuiTableBodyRow: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <TableRow>
            <MuiTableCell>{children}</MuiTableCell>
        </TableRow>
    );
};

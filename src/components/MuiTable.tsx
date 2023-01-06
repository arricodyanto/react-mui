import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material"

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{maxHeight: '300px'}}>
        <Table aria-label='simple table' stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell align="center">Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                { tableData.map((row) => (
                    <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 }}}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.first_name}</TableCell>
                        <TableCell>{row.last_name}</TableCell>
                        <TableCell align="center">{row.email}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
  )
}

const tableData = [
  {
    "id": 1,
    "first_name": "Asher",
    "last_name": "Lattimer",
    "email": "alattimer0@utexas.edu",
    "gender": "Male",
    "ip_address": "152.21.2.12"
  }, {
    "id": 2,
    "first_name": "Meir",
    "last_name": "Strathe",
    "email": "mstrathe1@wunderground.com",
    "gender": "Male",
    "ip_address": "88.0.103.170"
  }, {
    "id": 3,
    "first_name": "Erhart",
    "last_name": "Phizackerly",
    "email": "ephizackerly2@hugedomains.com",
    "gender": "Male",
    "ip_address": "215.61.60.4"
  }, {
    "id": 4,
    "first_name": "Debbi",
    "last_name": "Pencot",
    "email": "dpencot3@cdbaby.com",
    "gender": "Female",
    "ip_address": "96.241.180.90"
  }, {
    "id": 5,
    "first_name": "Celka",
    "last_name": "Taggert",
    "email": "ctaggert4@ft.com",
    "gender": "Female",
    "ip_address": "13.207.25.224"
  }, {
    "id": 6,
    "first_name": "Woodman",
    "last_name": "Crookston",
    "email": "wcrookston5@ca.gov",
    "gender": "Male",
    "ip_address": "184.41.12.83"
  }, {
    "id": 7,
    "first_name": "Clevie",
    "last_name": "Attwooll",
    "email": "cattwooll6@ibm.com",
    "gender": "Male",
    "ip_address": "119.15.122.152"
  }, {
    "id": 8,
    "first_name": "Dacy",
    "last_name": "MacKilroe",
    "email": "dmackilroe7@dell.com",
    "gender": "Genderqueer",
    "ip_address": "115.215.193.12"
  }, {
    "id": 9,
    "first_name": "Johannah",
    "last_name": "Grindell",
    "email": "jgrindell8@marriott.com",
    "gender": "Non-binary",
    "ip_address": "138.198.6.39"
  }, {
    "id": 10,
    "first_name": "Dirk",
    "last_name": "Readitt",
    "email": "dreaditt9@newyorker.com",
    "gender": "Male",
    "ip_address": "79.65.121.132"
  },
]
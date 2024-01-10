import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text
} from '@tremor/react';
import { CredentialMetadata } from '@triveria/wallet';
import { Suspense } from 'react';

type CredentialsTableProps = {
  credentials: CredentialMetadata[]
  isLoading: boolean
}

export default function CredentialsTable({ credentials, isLoading }: CredentialsTableProps) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>ID</TableHeaderCell>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {isLoading && <TableRow><Suspense /></TableRow>}
        {!isLoading && credentials.map(({ id, name, status }) => (
          <TableRow key={id}>
            <TableCell>{id}</TableCell>
            <TableCell>
              <Text>{name}</Text>
            </TableCell>
            <TableCell>
              <Text>{status}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

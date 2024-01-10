"use client"

import { Card, Title, Text } from '@tremor/react';
import CredentialsTable from './table';
import { useEffect, useState } from 'react';
import { CredentialMetadata } from '@triveria/wallet';

export default function IndexPage() {
  const [data, setData] = useState<CredentialMetadata[]>([])
  const [isLoading, setLoading] = useState(true)
 
  useEffect(() => {
    fetch('/api/wallet/credentials')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])


  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Credentials</Title>
      <Text>List of credentials owned by your wallet.</Text>
      <Card className="mt-6">
        <CredentialsTable credentials={data} isLoading={isLoading} />
      </Card>
    </main>
  );
}

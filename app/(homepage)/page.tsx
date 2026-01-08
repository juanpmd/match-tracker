import { getMatches } from '@/lib/actions';
import HomePage from '@/components/HomePage/HomePage';

export const dynamic = 'force-dynamic';

export default async function Page() {
  const matches = await getMatches();
  return <HomePage initialMatches={matches} />;
}

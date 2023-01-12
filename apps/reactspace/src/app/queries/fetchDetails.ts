import { BASE_URL } from './constants';

export default async function fetchDetails(id: number) {
  const response = await fetch(`${BASE_URL}/details/${id}`);

  return response.json();
}

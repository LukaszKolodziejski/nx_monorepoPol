import { BASE_URL } from './constants';

export default async function fetchList() {
  const response = await fetch(`${BASE_URL}/list`);

  return response.json();
}

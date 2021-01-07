import {api, username} from '../../api.config';

export const fetchRepos = async () => {
  const url = `${api}${username}/repos?per_page=100`;

  const response = await fetch(url);

  return await response.json();
}
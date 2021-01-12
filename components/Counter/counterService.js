import { api, username } from '../../api.config';

export const getUserData = async() => {
  const response = await fetch(`${api}${username}`);

  const profile = await response.json();
  const { public_repos:repos, public_gists: gists } = profile;
  return {repos, gists};
}

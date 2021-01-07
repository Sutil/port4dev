import { api, username } from '../../api.config';

export const getUserData = async() => {
  const response = await fetch(`${api}${username}`);

  const profile = await response.json();

  const { avatar_url, name } = profile;
  return {avatarURL: avatar_url, name};
}

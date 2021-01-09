import { getUserData } from "./headerService";
import { useState, useEffect } from 'react';

import {Image, Container, Name} from './styles';

const Header = () => {

  const [userData, setUserData] = useState({name: 'Dev', avatarURL: ''});

  useEffect(() => {
    getUserData().then(data => setUserData(data));
  }, []);

  return <Container>
    <Image src={userData.avatarURL} />
    <Name>{userData.name}</Name>
    <p>{userData.bio}</p>
  </Container>
}

export default Header;
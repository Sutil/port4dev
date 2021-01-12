import React, {useState, useEffect} from 'react'
import { getUserData } from './counterService';
import { Section } from './styles'

export default function Counter() {

  const [userData, setUserData] = useState({repos: 0, gists: 0});

  useEffect(() => {
    getUserData().then(data => {
      console.log('aaaa', data)
      setUserData(data) 
    });
  }, []);

  return (
    <Section>
      <div className="border-frame">
        <div className="content">
          <span className="value" >{userData.repos}</span>
          <span className="description" >repositórios</span>
        </div>
      </div>
      <div className="border-frame">
        <div className="content">
          <span className="value" >{userData.gists}</span>
          <span className="description" >gists</span>
        </div>
      </div>
    </Section>
  )
}

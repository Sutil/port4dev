import {useState, useEffect } from 'react';
import { fetchRepos } from './repoService';
import {Container} from './styles';
import { parseISO, format } from 'date-fns';

const Repositories = () => {

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetchRepos().then(repos => {
      repos.sort((a,b) => {
        if(a.created_at > b.created_at) {
          return -1;
        }
        if(a.created_at < b.created_at) {
          return 1;
        }
        return 0;
      })
      setRepos(repos);
    });
  }, []);

  console.log(repos);

  return <>
    {repos.map((repo) => (
    <Container key={repo.id} >
      <h3>{ repo.name }</h3>
      <h5>Criado em { format(parseISO(repo.created_at), 'dd/MMyyy') }</h5>
      <p>{repo.description}</p>
    </Container>))}
  </>

}

export default Repositories;
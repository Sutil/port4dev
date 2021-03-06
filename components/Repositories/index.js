import {useState, useEffect } from 'react';
import { fetchRepos } from './repoService';
import {Container} from './styles';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

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
      <img src="https://github.com/Sutil/tabela-aninhada-angular/raw/master/pix.jpg" />
      <h3>{ repo.name }</h3>
      <h5>Criado em { format(parseISO(repo.created_at), "dd 'de' MMMM 'de' yyyy", {locale: pt}) }</h5>
      <p>{repo.description}</p>
      <a target="_blank" href={repo.html_url} >Acessar</a>
    </Container>))}
  </>

}

export default Repositories;
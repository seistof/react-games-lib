import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './components/nav/Nav';
import List from './components/list/List';
import Info from './components/info/Info';
import github from './github.svg';

function App() {
  const [list, setList] = useState([]);
  const [query, setQuery] = useState('');
  const [queryType, setQueryType] = useState('search');

  useEffect(() => {
    const getList = async () => {
      const response = await fetch(`https://api.rawg.io/api/games?page_size=10&${queryType}=${query}`);
      const data = await response.json();
      setList(data.results);
      const container = document.querySelector('#list') || document.body;
      container.scrollTop = 0;
    };
    getList();
  }, [query, queryType]);

  return (
    <Router>
      <div className={'app'}>
        <Nav setQuery={setQuery} setQueryType={setQueryType}/>
        <Switch>
          <Route
            path={'/'}
            exact
            render={(props) =>
              <List {...props}
                    list={list}
                    query={query}
                    setQuery={setQuery}
                    setQueryType={setQueryType}
              />
            }
          />
          <Route path={'/:id'} exact component={Info}/>
        </Switch>
        <div className={'footer'}>
          <a href="https://github.com/seistof" target={'_blanc'}>
            <img src={github} alt="github"/>
          </a>
        </div>
      </div>
    </Router>
  );
}

export default App;

//https://api.rawg.io/api/games?page_size=5&search=skyrim
//https://api.rawg.io/api/games?page_size=5&tags=2d

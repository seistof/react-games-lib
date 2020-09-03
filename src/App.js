import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './components/nav/Nav';
import List from './components/list/List';
import Info from './components/info/Info';

function App() {
  const [list, setList] = useState([]);
  const [game, setGame] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    console.log('getList();');
    const getList = async () => {
      const response = await fetch(`https://api.rawg.io/api/games?page_size=10&search=${query}`);
      const data = await response.json();
      setList(data.results);
      console.log(data.results);
    };
    getList();
  }, [query]);

  return (
    <Router>
      <div className={'app'}>
        <Nav setQuery={setQuery}/>
        <Switch>
          <Route path={'/'} exact render={(props) => <List {...props} list={list}/>}/>
          <Route path={'/:id'} exact component={Info}/>
        </Switch>
        <div className={'footer'}>©</div>
      </div>
    </Router>
  );
}

export default App;

//https://api.rawg.io/api/games%3Fpage_size=5&search=skyrim
//https://api.rawg.io/api/games?page_size=5&search=skyrim

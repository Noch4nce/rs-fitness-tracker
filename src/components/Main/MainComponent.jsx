import React from 'react';
import { Route } from 'react-router-dom';
import SearchFood from './SearchFood/SearchFoodComponent';
import StatsComponent from './Stats/StatsComponent';

const MainComponent = () => {
  return (
    <main>
      <Route exact path="/" render={() => <div>Default page</div>} />
      <Route path="/search_food" render={() => <SearchFood/>} />
      <Route path="/todo" render={() => <div>Todo</div>} />
      <Route path="/stats" render={() => <StatsComponent />} />
    </main>
  );
};

export default MainComponent;

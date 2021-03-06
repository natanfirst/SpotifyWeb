import React from 'react';

import {Switch, Route } from 'react-router-dom';
import Browse from '../Pages/browse';
import  Playlist  from '../Pages/playlists';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Browse} />
        <Route exact path="/playlists/:id" component={Playlist} />
    </Switch>
);

export default Routes
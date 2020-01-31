import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { roadMap } from '../../router/index';
const Header = () => 
        roadMap.map((prop, key) => 
            !prop.redirect
            ? <NavLink to={prop.path} key={key} activeClassName="active">
                {prop.name}
              </NavLink>
            : <Route path={prop.path} component={prop.component} key={key} />
        )

export default Header;
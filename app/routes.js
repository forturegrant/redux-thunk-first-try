import  {BrowserRouter as Router ,IndexRoute} from 'react-router'

export default () => {
    <Router>
        <Route path="/">
            <IndexRoute component={welcome}></IndexRoute>
        </Route>
        <Route path="/login"></Route>
        <Route path="/register"></Route>
    </Router>
}


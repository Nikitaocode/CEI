import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Todo = React.lazy(() =>
  import(/* webpackChunkName: "application-todo" */ './Product')
);
const Survey = React.lazy(() =>
  import(/* webpackChunkName: "application-survey" */ './survey')
);
// const SurveyDetail = React.lazy(() =>
//   import(/* webpackChunkName: "application-survey-detail" */ './survey-detail')
// );
// const Chat = React.lazy(() =>
//   import(/* webpackChunkName: "application-chat" */ './chat')
// );
const Newproduct = React.lazy(() =>
  import(/* webpackChunkName: "application-survey" */ './CreateNewProduct.js')
);

const Applications = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/products`} />
      <Route
        path={`${match.url}/products`}
        render={(props) => <Todo {...props} />}
      />
      {/* <Route
        path={`${match.url}/survey/:surveyid`}
        render={(props) => <SurveyDetail {...props} />}
        isExact
      /> */}
      <Route
        path={`${match.url}/variants`}
        render={(props) => <Survey {...props} />}
        isExact
      />
      <Route
        path={`${match.url}/add-new-product`}
        render={(props) => <Newproduct {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Applications;

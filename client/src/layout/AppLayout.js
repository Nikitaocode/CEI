import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TopNav from '../containers/navs/Topnav';
import Sidebar from '../containers/navs/Sidebar';
import Footer from '../containers/navs/Footer';
import Authservice from "../AuthHeader/authheader"
import { NotificationManager } from '../components/common/react-notifications';

import axios from 'axios'
const AppLayout = ({ containerClassnames, children, history }) => {
  const user = Authservice.getCurrentUser()
  // if not user, then redirect to login page
  useEffect(() => {
    axios.get("/dashboard-page", { headers: Authservice.authHeader() }).then(res => {
      console.log(res.data)
      if(res.data.error){
        history.push("/user/login")
      }
      else{
        console.log("loggedd in");
        // NotificationManager.success(
        //   "Successfully logged in",
        //   'Success',
        //   3000,
        //   null,
        //   null,
        //   ''
        // );
      }
    })
  })
  
  return (
    <div id="app-container" className={containerClassnames}>
      <TopNav history={history} user={user}/>
      <Sidebar />
      <main>
        <div className="container-fluid">{children}</div>
      </main>
      <Footer />
    </div>
  );

}
const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};
const mapActionToProps = {};

export default withRouter(
  connect(mapStateToProps, mapActionToProps)(AppLayout)
);

import React from 'react'
import { Switch, Redirect, Route, withRouter } from 'react-router-dom'
import BtnGroup from './RadioBtn'
import FooterComponent from './FooterComponent'
import {Table,RejectTable,SaveTable,GrantedTable} from './Table'
import {connect} from 'react-redux';


const mapStateToProps=state=>{
  return{
    request:state.request,
    save:state.save,
    reject:state.reject,
    grant:state.grant
  }
}


const MainComponent = (props) => {
  const requestTable=()=>{
    return(
      <Table request={props.request}/>
    )
  }

  return (
    <div>
      <div style={{ height: '51vh' }}></div>
      <div className=" col-8 col-md-8 col-sm px-4 py-2">
        <BtnGroup />
        <div style={{ height: '40vh' }} className="center-col">
          <Switch>
            <Route path="/request" component={requestTable} />
            <Route path="/grant" component={GrantedTable} />
            <Route path="/save" component={SaveTable} />
            <Route path="/reject" component={RejectTable} />
            <Redirect path="/request" />
          </Switch>
        </div>
      </div>
      <div className="col-4 col-md-4 col-sm"></div>
      <FooterComponent />
    </div>
  )
}

export default withRouter(connect(mapStateToProps)(MainComponent))

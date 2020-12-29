import React from 'react'
import { Card, CustomInput } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { NotificationManager } from '../../components/common/react-notifications';
import { ContextMenuTrigger } from 'react-contextmenu';
import { Colxx } from '../../components/common/CustomBootstrap';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';

function ListHeadings() {
    return (
        <Colxx xxs="12" className="mb-3">
        <ContextMenuTrigger id="menu_id" >
          {/* <Card> */}
            <div className="pl-2 d-flex flex-grow-1 min-width-zero">
              <div className="custom-control custom-checkbox pl-1 align-self-center pr-4">
              
               
              </div>
              <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                <NavLink to={`?p=$2`} className="w-15 w-sm-100">
                  <p
                    style={{ textTransform: 'capitalize' }}
                    className="list-item-heading mb-1 truncate"
                  >
                    First Name
                  </p>
                </NavLink>
                <p className="mb-1 w-15 w-sm-100 list-item-heading">
                  {' '}
                  Last Name
                </p>
                <p className="mb-1 w-20 w-sm-100 list-item-heading">
                  {' '}
                  Email
                </p>
                
                <p className="mb-1 w-10 w-sm-100 list-item-heading truncate">
                  Status
                </p>
                
                <p className="mb-1 w-2 w-sm-100 list-item-heading">
                {/* Edit */}
                </p>
                
                <p className="mb-1 w-2 w-sm-100 list-item-heading">
                {/* Delete */}
                </p>
              </div>
            </div>
          {/* </Card> */}
        </ContextMenuTrigger>
      </Colxx>
    )
}

export default ListHeadings

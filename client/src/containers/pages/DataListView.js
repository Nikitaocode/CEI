import React from 'react';
import { Card, CustomInput, Badge } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { ContextMenuTrigger } from 'react-contextmenu';
import { Colxx } from '../../components/common/CustomBootstrap';
import Button from 'reactstrap/lib/Button';
import {FaEdit,FaTrash, FaEye} from 'react-icons/fa'

const DataListView = ({ product, isSelect, collect, onCheckItem }) => {
  const edit=(e)=>{
    e.preventDefault()
    console.log("hi");
  }
  return (
    <Colxx xxs="12" className="mb-3">
      <ContextMenuTrigger id="menu_id" data={product.id} collect={collect}>
        <Card
          onClick={(event) => onCheckItem(event, product.id)}
          className={classnames('d-flex flex-row', {
            active: isSelect,
          })}
        >
          <div className="pl-2 d-flex flex-grow-1 min-width-zero">
          <div className="custom-control custom-checkbox pl-1 align-self-center pr-4">
              <CustomInput
                className="item-check mb-0"
                type="checkbox"
                id={`check_${product.id}`}
                checked={isSelect}
                onChange={(event) => onCheckItem(event, product.id)}
                label=""
              />
            </div>
            <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
              <NavLink to={`?p=${product.id}`} className="w-15 w-sm-100">
                <p style={{textTransform:"capitalize"}} className="list-item-heading mb-1 truncate">
                  {product.firstName}
                </p>
              </NavLink>
              <p  className="mb-1 text-muted text-small w-15 w-sm-100 list-item-heading"> {product.lastName}</p>
              <p  className="mb-1 text-muted text-small w-20 w-sm-100 list-item-heading"> {product.email}</p>
              <FaEdit onClick={edit} style={{cursor:'pointer'}} className="mb-1 w-2 w-sm-100 list-item-heading "/>
              <FaEye  style={{cursor:'pointer'}} className="mb-1 w-2 w-sm-100 list-item-heading"/>
              <FaTrash  style={{cursor:'pointer'}} className="mb-1 w-2 w-sm-100 list-item-heading"/>
            </div>
            
          </div>
        </Card>
      </ContextMenuTrigger>
    </Colxx>
  );
};

/* React.memo detail : https://reactjs.org/docs/react-api.html#reactpurecomponent  */
export default React.memo(DataListView);

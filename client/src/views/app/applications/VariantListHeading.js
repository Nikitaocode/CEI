import React from 'react'
import { Card, CustomInput } from 'reactstrap';
import { NavLink } from 'react-router-dom';
// import classnames from 'classnames';
// import { NotificationManager } from '../../components/common/react-notifications';
import { ContextMenuTrigger } from 'react-contextmenu';
import { Colxx } from '../../../components/common/CustomBootstrap';
// import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';

function VariantListHeading({selectedItemsLength,handleChangeSelectAll,itemsLength}) {
    return (
        <Colxx style={{padding:"0"}} xxs="12" className="mb-3">
        <ContextMenuTrigger id="menu_id" >
        <Card style={{background : 'transparent', zIndex : 0, boxShadow : 'none'}}>
          <div className="d-flex flex-grow-1 min-width-zero">
            <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
            <CustomInput
                className="custom-checkbox mb-0 d-inline-block"
                type="checkbox"
                style={{cursor:'pointer'}}
                id="checkAll"
                checked={selectedItemsLength >= itemsLength}
                onChange={() => handleChangeSelectAll(true)}
              />
              <div class="custom-control pl-5 align-self-center pr-5"></div>
              <div class="custom-control pl-5 align-self-center pr-5"></div>
              <div className="w-40 w-sm-100 pl-4">
                <p className="list-item-heading mb-1 truncate font-weight-bold ">
                  Variant Title
                </p>
              </div>
              <div className="w-15 w-sm-100">
                <p className="list-item-heading mb-1 truncate font-weight-bold">
                  Category
                </p>
              </div>
              <div className=" w-15 w-sm-100">
                <p className="list-item-heading mb-1 truncate font-weight-bold">
                Stock
                </p>
              </div>
              <div className=" w-15 w-sm-100">
                <p className="list-item-heading mb-1 truncate font-weight-bold">
                  Sales
                </p>
              </div>
              <div className=" w-15 w-sm-100">
                <p className="list-item-heading mb-1 truncate font-weight-bold">
                Added On
                </p>
              </div>
              <div className=" w-15 w-sm-100">
                <p className="list-item-heading mb-1 truncate font-weight-bold">
                Status
                </p>
              </div>
              <div className=" w-15 w-sm-100">
                <p className="list-item-heading mb-1 truncate font-weight-bold">
                Action
                </p>
              </div>
            </div>
          </div>
        </Card>
        </ContextMenuTrigger>
      </Colxx>
    )
}

export default VariantListHeading

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
        <Card>
          <div className="pl-0 d-flex flex-grow-1 min-width-zero">
            <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
            <CustomInput
                className="custom-checkbox mb-0 d-inline-block"
                type="checkbox"
                id="checkAll"
                checked={selectedItemsLength >= itemsLength}
                onChange={() => handleChangeSelectAll(true)}
              />
              <div className="w-15 w-sm-100">
                <p className="list-item-heading mb-1 truncate">
                </p>
              </div>
              <div className="w-40 w-sm-100 pl-2">
                <p className="list-item-heading mb-1 truncate">
                  Variant Title
                </p>
              </div>
              <p className="mb-1 text-muted text-small w-15 w-sm-100">
                Variant Category
              </p>
              <p className="mb-1 text-muted text-small w-15 w-sm-100">
                Variant Stock
              </p>
              <p className="mb-1 text-muted text-small w-15 w-sm-100">
              Variant Sales
              </p>
              <p className="mb-1 text-muted text-small w-15 w-sm-100">
              Added On
              </p>
              <div className="w-15 w-sm-100">
                Status
              </div>
            </div>
            
          </div>
        </Card>
        </ContextMenuTrigger>
      </Colxx>
    )
}

export default VariantListHeading

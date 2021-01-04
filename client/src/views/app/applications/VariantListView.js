import React from 'react';
import { Card, CustomInput, Badge } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { ContextMenuTrigger } from 'react-contextmenu';
import { Colxx } from '../../../components/common/CustomBootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';

const VariantListView = ({ openModal, deleteModal, index, variant, isSelect, collect, onCheckItem }) => {

  return (
    <Colxx xxs="12" key={variant.id} className="mb-3">
      <ContextMenuTrigger id="menu_id" data={variant.id} collect={collect}>
        <Card
          className={classnames('d-flex flex-row align-self-center', {
            active: isSelect,
          })}
        >
        <div className="custom-control custom-checkbox pl-1 align-self-center px-4"
        style={{cursor:'pointer'}}
        onClick={(event) => onCheckItem(event, variant.id)}
        >
            <CustomInput
              className="item-check mb-0"
              type="checkbox"
              id={`check_${variant.id}`}
              checked={isSelect}
              label=""
            />
        </div>
        <div className="custom-control custom-checkbox align-self-center pr-5">
          {index}
        </div>
          <NavLink to={`?p=${variant.id}`} className='pt-3'>
            <img
              alt={variant.title}
              src={variant.img}
              style={{maxHeight:"60px"}}
              className="list-thumbnail responsive border-0 card-img-left"
            />
          </NavLink>
          <div className="pl-2 d-flex flex-grow-1 min-width-zero">
            <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
              <NavLink to={`?p=${variant.id}`} className="w-40 w-sm-100">
                <p className="list-item-heading mb-1 truncate">
                  {variant.title}
                </p>
              </NavLink>
              <p className="mb-1 text-muted text-small w-15 w-sm-100">
                {variant.category}
              </p>
              <p className="mb-1 text-muted text-small w-15 w-sm-100">
                {variant.stock}
              </p>
              <p className="mb-1 text-muted text-small w-15 w-sm-100">
                {variant.sales}
              </p>
              <p className="mb-1 text-muted text-small w-15 w-sm-100">
                {variant.date}
              </p>
              <div className="w-15 w-sm-100">
                <Badge color={variant.statusColor} pill>
                  {variant.status}
                </Badge>
              </div>
              <p className="w-15 w-sm-100">
              <FaEdit
                  onClick={()=>openModal(variant.id)}
                  style={{ cursor: 'pointer'}}
                  id={variant.id}
                  className="mb-1 w-20 w-sm-100 list-item-heading  mx-2 "
                />
                <FaTrash
                  onClick={() => deleteModal(variant.id)}
                  value={variant.id}
                  style={{ cursor: 'pointer' }}
                  className="mb-1 w-20 w-sm-100 list-item-heading mx-2 "
                />
              </p>
            </div>
          </div>
        </Card>
      </ContextMenuTrigger>
    </Colxx>
  );
};

/* React.memo detail : https://reactjs.org/docs/react-api.html#reactpurecomponent  */
export default React.memo(VariantListView);

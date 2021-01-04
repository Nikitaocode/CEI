import React from 'react';
import { Card, CustomInput, Badge } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { ContextMenuTrigger } from 'react-contextmenu';
import { Colxx } from '../../../components/common/CustomBootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';

const ProductListView = ({ openModal, deleteModal, index, product, isSelect, collect, onCheckItem }) => {

  return (
    <Colxx xxs="12" key={product.id} className="mb-3">
      <ContextMenuTrigger id="menu_id" data={product.id} collect={collect}>
        <Card
          style={{height:'4rem'}}
          className={classnames('d-flex flex-row align-self-center ', {
            active: isSelect,
          })}
        >
        <div className="custom-control custom-checkbox pl-1 align-self-center px-4"
          style={{cursor:'pointer'}}
          onClick={(event) => onCheckItem(event, product.id)}
        >
            <CustomInput
              className="item-check mb-0"
              type="checkbox"
              id={`check_${product.id}`}
              checked={isSelect}
              onChange={() => {}}
              label=""
            />
        </div>
        <div className="custom-control custom-checkbox align-self-center pr-5">
          {index}
        </div>
          <NavLink to={`?p=${product.id}`} className='align-self-center'>
            <img
              alt={product.title}
              src={product.img}
              style={{height:"3rem"}}
              className="list-thumbnail responsive border-0 card-img-left"
            />
          </NavLink>
          <div className="pl-2 d-flex flex-grow-1 min-width-zero">
            <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
              <NavLink to={`?p=${product.id}`} className="w-40 w-sm-100">
                <p className="list-item-heading mb-1 truncate">
                  {product.title}
                </p>
              </NavLink>
              <p className="mb-1 text-muted text-small w-15 w-sm-100">
                {product.category}
              </p>
              <p className="mb-1 text-muted text-small w-15 w-sm-100">
                {product.stock}
              </p>
              <p className="mb-1 text-muted text-small w-15 w-sm-100">
                {product.sales}
              </p>
              <p className="mb-1 text-muted text-small w-15 w-sm-100">
                {product.date}
              </p>
              <div className="w-15 w-sm-100">
                <Badge color={product.statusColor} pill>
                  {product.status}
                </Badge>
              </div>
              <p className="w-15 w-sm-100 align-self-center pt-3">
              <FaEdit
                  onClick={()=>openModal(product.id)}
                  style={{ cursor: 'pointer'}}
                  id={product.id}
                  className="w-20 w-sm-100 list-item-heading  mx-2 "
                />
                <FaTrash
                  onClick={() => deleteModal(product.id)}
                  value={product.id}
                  style={{ cursor: 'pointer' }}
                  className="w-20 w-sm-100 list-item-heading mx-2 "
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
export default React.memo(ProductListView);

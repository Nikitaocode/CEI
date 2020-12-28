import React,{useState} from 'react';
import { Card, CustomInput } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { NotificationManager } from '../../components/common/react-notifications';
import { ContextMenuTrigger } from 'react-contextmenu';
import { Colxx } from '../../components/common/CustomBootstrap';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';
import IntlMessages from '../../helpers/IntlMessages';
import axios from 'axios';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Row,
  Col
} from 'reactstrap';

const DataListView = ({ product, isSelect, collect, onCheckItem }) => {
  const [formData,setformData]= React.useState({})
  const [modalBasic, setModalBasic] = useState(false);
  const [details,setDetails] = useState({})
  const [deleteId,setdeleteId]= useState("")
  const [modal,setModal]= useState(false)
  // GET THE USER DETAILS AND OPEN THE EDIT MODAL
  const openModal = (e) => {
    axios.get("/api/user-details",{params:{id:e}}).then(res=>{
    console.log(res.data.data);
    setDetails(res.data.data)
    console.log(details);
    setModal(true)
    })
    
  };

  // EDIT HANDLER
  const edit=(e)=>{
    console.log(e);
    axios.post("/api/edit-user",formData,{params:{id:e}}).then(res=>{
      console.log(res);
      if (res.data.success) {
        setModal(false)
        NotificationManager.success(res.data.success, 'Success', 3000, null, null, '');
        window.location.reload()
      }

    })
  }
  const deleteModal =(e)=>{
    setdeleteId(e)
    setModalBasic(true)
  }

  // DELETE SINGLE USER
  const deleteUser = (e) => {
    axios.post('/api/delete-user', null, { params: { id: deleteId } }).then((res) => {
      console.log(res);
      setModalBasic(false)
      window.location.reload()
    });
  };
  return (
    <>
      <Colxx xxs="12" className="mb-3">
        <ContextMenuTrigger id="menu_id" data={product.id} collect={collect}>
          <Card>
            <div className="pl-2 d-flex flex-grow-1 min-width-zero">
              <div className="custom-control custom-checkbox pl-1 align-self-center pr-4">
                <CustomInput
                  className="item-check mb-0"
                  type="checkbox"
                  id={`check_${product.id}`}
                  checked={isSelect}
                  onChange={(event) => onCheckItem(event, product.id)}
                  className={classnames('d-flex flex-row', {
                    active: isSelect,
                  })}
                  label=""
                />
              </div>
              <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                <NavLink to={`?p=${product.id}`} className="w-15 w-sm-100">
                  <p
                    style={{ textTransform: 'capitalize' }}
                    className="list-item-heading mb-1 truncate"
                  >
                    {product.firstName}
                  </p>
                </NavLink>
                <p className="mb-1 text-muted text-small w-15 w-sm-100 list-item-heading">
                  {' '}
                  {product.lastName}
                </p>
                <p className="mb-1 text-muted text-small w-20 w-sm-100 list-item-heading">
                  {' '}
                  {product.email}
                </p>
                <FaEdit
                  onClick={()=>openModal(product.id)}
                  style={{ cursor: 'pointer' }}
                  id={product.id}
                  className="mb-1 w-2 w-sm-100 list-item-heading "
                />
                <FaEye
                  style={{ cursor: 'pointer' }}
                  id={product.id}
                  className="mb-1 w-2 w-sm-100 list-item-heading"
                />
                <FaTrash
                  onClick={() => deleteModal(product.id)}
                  value={product.id}
                  style={{ cursor: 'pointer' }}
                  className="mb-1 w-2 w-sm-100 list-item-heading"
                />
              </div>
            </div>
          </Card>
        </ContextMenuTrigger>
      </Colxx>
      <Modal isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader>
          <IntlMessages id="Edit" />
        </ModalHeader>
        <ModalBody>
        <Row>
        <Col className="sm-6">
        <Label>
          <IntlMessages id="First name" />
        </Label>
        <Input defaultValue={details.firstName} onChange={(e) => {
                setformData({ ...formData, firstName: e.target.value })
              }} />

        </Col>
        <Col className="sm-6">
        <Label>
          <IntlMessages id="Last name" />
        </Label>
        <Input defaultValue={details.lastName} onChange={(e) => {
                setformData({ ...formData, lastName: e.target.value })
              }}/>

        </Col>
        </Row>
        <Label className="mt-4">
          <IntlMessages id="Email" />
        </Label>
        <Input defaultValue={details.email} onChange={(e) => {
                setformData({ ...formData, email: e.target.value })
              }} />
        <Label className="mt-4">
          <IntlMessages id="Phone" />
        </Label>
        <Input defaultValue={details.phone} name="text" onChange={(e) => {
                setformData({ ...formData, phone: e.target.value })
              }} />
        </ModalBody>
        <ModalFooter>
          <Button onClick={()=>edit(details.id)} color="primary">
            Save Changes
          </Button>{' '}
          <Button color="secondary" onClick={() => setModal(false)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={modalBasic} toggle={() => setModal(!modalBasic)}>
        <ModalHeader>
          <IntlMessages id="Delete" />
        </ModalHeader>
        <ModalBody>
         Are you sure you want to delete user?
        </ModalBody>
        <ModalFooter>
          <Button onClick={deleteUser} color="primary">
            Confirm
          </Button>{' '}
          <Button color="secondary" onClick={() => setModalBasic(false)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

/* React.memo detail : https://reactjs.org/docs/react-api.html#reactpurecomponent  */
export default React.memo(DataListView);

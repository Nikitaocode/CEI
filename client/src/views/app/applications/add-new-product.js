import React,{useState} from 'react';
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
import Select from 'react-select';
import CustomSelectInput from '../../../components/common/CustomSelectInput';
import IntlMessages from '../../../helpers/IntlMessages';
import axios from 'axios'
import CustomInput from 'reactstrap/lib/CustomInput';

const AddNewProductModal = ({ modalOpen, toggleModal, categories }) => {
  const [formData,setformData]= React.useState({})
  const [picture, setPicture] = useState(null);


  // Create new user
  const CreateNewProduct=(e)=>{
    e.preventDefault()
    const data = new FormData()
    data.append("image",picture)
    data.append("name",formData.name)
    data.append("supplier",formData.supplier)
    data.append("productType",formData.productType)
    data.append("brand",formData.brand)
    data.append("initialPrice",formData.initialPrice)
    data.append("initialStock",formData.initialStock)
    data.append("retailPrice",formData.retailPrice)
    data.append("buyPrice",formData.buyPrice)
    data.append("wholesalePrice",formData.wholesalePrice)
    data.append("weight",formData.weight)
    axios.post("/api/inventory/new-product",data).then(res=>{
      if(res.data.success){
        // window.location.reload()
      }
    })
  }

  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      setPicture(e.target.files[0]);
      console.log(picture)
    }
  };
  return (
    <Modal
      isOpen={modalOpen}
      toggle={toggleModal}
      wrapClassName="modal-right"
      backdrop="static"
    >
      <ModalHeader toggle={toggleModal}>
        <IntlMessages id="Add New Product" />
      </ModalHeader>
      <ModalBody>
        <div className='mt-3'>
          <Label>
            <IntlMessages id="Product Name" />
          </Label>
          <Input onChange={(e) => {
              setformData({ ...formData, name: e.target.value })
            }} />
        </div>
        <div className='mt-3'>
          <Label>
            <IntlMessages id="Product Image" />
          </Label>
          <CustomInput
            type="file"
            id="exampleCustomFileBrowser2"
            name="customFile"
            onChange={onChangePicture}
          />
        </div>
        <Row>
          <Col className="sm-6">
          <Label className="mt-4">
              <IntlMessages id="Type" />
            </Label>
            
            <Input onChange={(e) => {
              setformData({ ...formData, productType: e.target.value })
            }} />
          </Col>
          <Col className="sm-6">
            <Label className="mt-4">
              <IntlMessages id="Brand" />
            </Label>
            
            <Input  onChange={(e) => {
              setformData({ ...formData, brand: e.target.value })
            }} />
          </Col>
        </Row>
        <Row>
          <Col className="sm-6">
            <Label className="mt-4">
              <IntlMessages id="Supplier" />
            </Label>
            
            <Input type='number' onChange={(e) => {
              setformData({ ...formData, supplier: e.target.value })
            }} />
          </Col>
          <Col className="sm-6">
            <Label className="mt-4">
              <IntlMessages id="Initial Stock" />
            </Label>
            
            <Input type='number' onChange={(e) => {
              setformData({ ...formData, initialStock: e.target.value })
            }} />
          </Col>
          
        </Row>
        <Row>
          <Col className="sm-6">
          <Label className="mt-4">
            <IntlMessages id="Initial Price" />
          </Label>
          <Input onChange={(e) => {
              setformData({ ...formData, initialPrice: e.target.value })
            }} />
          </Col>
          <Col className="sm-6">
          <Label className="mt-4">
            <IntlMessages id="Retail Price" />
          </Label>
          <Input type='number' onChange={(e) => {
              setformData({ ...formData, retailPrice: e.target.value })
            }} />
          </Col>
        </Row>
        <Row>
          <Col className="sm-6">
          <Label className="mt-4">
            <IntlMessages id="Buy Price" />
          </Label>
          <Input type='number' onChange={(e) => {
              setformData({ ...formData, buyPrice: e.target.value })
            }} />
          </Col>
          <Col className="sm-6">
          <Label className="mt-4">
            <IntlMessages id="Wholesale Price" />
          </Label>
          <Input type='number' onChange={(e) => {
              setformData({ ...formData, wholesalePrice: e.target.value })
            }} />
          </Col>
        </Row>
        <div className='mt-3'>
          <Label>
            <IntlMessages id="Weight" />
          </Label>
          <Input onChange={(e) => {
              setformData({ ...formData, weight: e.target.value })
            }} />
        </div>
        <div className='mt-3'>
          <Label>
            <IntlMessages id="Product Description" />
          </Label>
          <Input type="textarea" onChange={(e) => {
              setformData({ ...formData, description: e.target.value })
            }} />
        </div>
        
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" outline onClick={toggleModal}>
          <IntlMessages id="pages.cancel" />
        </Button>
        <Button onClick={CreateNewProduct} color="primary">
          <IntlMessages id="Create Product" />
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AddNewProductModal;

import React from 'react';
import {
  CustomInput,
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

const AddNewVariantModal = ({ modalOpen, toggleModal, categories }) => {
  const [formData,setformData]= React.useState({})

  // Create new user
  const CreateNewUser=(e)=>{
    e.preventDefault()
    axios.post("/api/new-user",formData).then(res=>{
      if(res.data.success){
        window.location.reload()
      }
    })
  }
  return (
    <Modal
      isOpen={modalOpen}
      toggle={toggleModal}
      wrapClassName="modal-right"
      backdrop="static"
    >
      <ModalHeader toggle={toggleModal}>
        <IntlMessages id="Add New Variant" />
      </ModalHeader>
      <ModalBody>
        <Row>
        <Col className="sm-6">
        <Label>
          <IntlMessages id="Variant Title" />
        </Label>
        <Input onChange={(e) => {
                setformData({ ...formData, title: e.target.value })
              }} />

        </Col>
        <Col className="sm-6">
        <Label>
          <IntlMessages id="No. of Stocks" />
        </Label>
        <Input type='number' onChange={(e) => {
                setformData({ ...formData, stocks: e.target.value })
              }}/>

        </Col>
        </Row>
        <Label className="mt-4">
          <IntlMessages id="Status" />
        </Label>
        
        <Select
          components={{ Input: CustomSelectInput }}
          className="react-select"
          classNamePrefix="react-select"
          name="form-field-name"
          options={categories}
          onChange={(e) => {
                setformData({ ...formData, status: e.value })
                
              }}
        />
        <Label className="mt-4">
          <IntlMessages id="Category" />
        </Label>
        
        <Select
          components={{ Input: CustomSelectInput }}
          className="react-select"
          classNamePrefix="react-select"
          name="form-field-name"
          options={categories}
          onChange={(e) => {
                setformData({ ...formData, Category: e.value })
                
              }}
        />
        
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" outline onClick={toggleModal}>
          <IntlMessages id="pages.cancel" />
        </Button>
        <Button onClick={CreateNewUser} color="primary">
          <IntlMessages id="Create Variant" />
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AddNewVariantModal;


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
import CustomSelectInput from '../../components/common/CustomSelectInput';
import IntlMessages from '../../helpers/IntlMessages';

const AddNewModal = ({ modalOpen, toggleModal, categories }) => {
  return (
    <Modal
      isOpen={modalOpen}
      toggle={toggleModal}
      wrapClassName="modal-right"
      backdrop="static"
    >
      <ModalHeader toggle={toggleModal}>
        <IntlMessages id="Add New User" />
      </ModalHeader>
      <ModalBody>
        <Row>
        <Col className="sm-6">
        <Label>
          <IntlMessages id="First name" />
        </Label>
        <Input />

        </Col>
        <Col className="sm-6">
        <Label>
          <IntlMessages id="Last name" />
        </Label>
        <Input />

        </Col>
        </Row>
        <Label className="mt-4">
          <IntlMessages id="pages.category" />
        </Label>
        <Select
          components={{ Input: CustomSelectInput }}
          className="react-select"
          classNamePrefix="react-select"
          name="form-field-name"
          options={categories}
        />
        <Label className="mt-4">
          <IntlMessages id="pages.description" />
        </Label>
        <Input type="textarea" name="text" id="exampleText" />
        <Label className="mt-4">
          <IntlMessages id="pages.status" />
        </Label>
        <CustomInput
          type="radio"
          id="exCustomRadio"
          name="customRadio"
          label="ON HOLD"
        />
        <CustomInput
          type="radio"
          id="exCustomRadio2"
          name="customRadio"
          label="PROCESSED"
        />
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" outline onClick={toggleModal}>
          <IntlMessages id="pages.cancel" />
        </Button>
        <Button color="primary" onClick={toggleModal}>
          <IntlMessages id="pages.submit" />
        </Button>{' '}
      </ModalFooter>
    </Modal>
  );
};

export default AddNewModal;

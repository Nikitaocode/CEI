import IntlMessages from '../../../helpers/IntlMessages';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import React, { useState, useEffect,useContext } from 'react';
import {
    Button,
    Label,
    Row,
    Col,
    Card,
    CardBody,
    Input,
    CustomInput,
    Form,
  } from 'reactstrap';
import Select from 'react-select';
import CustomSelectInput from '../../../components/common/CustomSelectInput';
import axios from 'axios'
import { NotificationManager } from '../../../components/common/react-notifications';
import {UserContext} from "../../../Context/UserContext"
import {Link, useHistory} from "react-router-dom"

// import { injectIntl } from 'react-intl';
const categories = [
    { label: 'Cakes', value: 'Cakes', key: 0 },
    { label: 'Cupcakes', value: 'Cupcakes', key: 1 },
    { label: 'Desserts', value: 'Desserts', key: 2 },
];

const Newproduct = ({ match }) => {
    const [formData, setformData] = useState({})
    const [user, setUser] = useContext(UserContext)
    const [picture, setPicture] = useState(null);
    const [imgData, setImgData] = useState(null);
    const history = useHistory()
    const styles = {
    active: {
      color: 'green',
    },
    inactive: {
      color: 'red',
    },
    profileImg: {
      height: '6rem',
      width: '6rem',
      borderRadius: '50%',
    },
    editprofileImage: {
      height: '5rem',
      width: '5rem',
      borderRadius: '50%',
    },
  };

  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      console.log('picture: ', e.target.files);
      setPicture(e.target.files[0]);
      console.log(picture);
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  

    
    // FORM   SUBMIT HANDLER
    const submit = (e) => {
        e.preventDefault()
        console.log(formData)
        const data = new FormData()
        if(formData.name){
          data.append("name",formData.name)
        }
        if(formData.description){
          data.append("description",formData.description)
        }
        if(formData.supplier){
          data.append("supplier",formData.supplier)
        }
        if(formData.type){
          data.append("type",formData.type)
        }
        if(formData.brand){
          data.append("brand",formData.brand)
        }
        if(formData.status){
          data.append("status",formData.status)
        }
        if(formData.description){
          data.append("description",formData.description)
        }
        if(formData.stock){
          data.append("stock",formData.stock)
        }
        if(formData.initialprice){
          data.append("initialprice",formData.iprice)
        }
        if(formData.retailprice){
          data.append("retailprice",formData.rprice)
        }
        if(formData.butprice){
          data.append("butprice",formData.bprice)
        }
        if(formData.wholesaleprice){
          data.append("wholesaleprice",formData.wprice)
        }
        if(formData.weight){
          data.append("weight",formData.weight)
        }
      if(picture){
        data.append("image",picture)
      }
      if(formData.phone && formData.phone.length<10){
          NotificationManager.warning(
              "Number invalid",
              'Error',
              3000,
              null,
              null,
              ''
            );
      }
        else if(formData.zipcode && formData.zipcode.length>10){
            NotificationManager.warning(
                "Invalid Zipcode",
                'Error',
                3000,
                null,
                null,
                ''
              );
        }
       else{
        axios.post("/api/edit-profile", data,{params:{id:user.id}}).then((res) => {
            console.log(res.data);
            setUser(res.data.data)
            NotificationManager.success(
                res.data.success,
                'Success',
                3000,
                null,
                null,
                ''
              );
            //   window.location.reload();
        })
       }
    }
    return (
        <>
        <Row>
            <Colxx xxs="12">
                <Breadcrumb heading="Add New Product" match={match} />
                <Separator className="mb-5" />
            </Colxx>
        </Row>
        <div className="d-flex flex-column">
            <Row className="mb-4">
                <Colxx xxs="12">
                    <Card>
                        <CardBody>
                            {/* <CardTitle>
            <IntlMessages id="Edit" />
            </CardTitle> */}
            <Form onSubmit={submit}>
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
            />
            </div>
            <Row>
            <Col className="sm-6">
            <Label className="mt-4">
                <IntlMessages id="Type" />
                </Label>
                
                <Select
                components={{ Input: CustomSelectInput }}
                className="react-select"
                classNamePrefix="react-select"
                name="form-field-name"
                options={categories}
                onChange={(e) => {
                        setformData({ ...formData, type: e.value })
                        
                    }}
                />
            </Col>
            <Col className="sm-6">
                <Label className="mt-4">
                <IntlMessages id="Brand" />
                </Label>
                
                <Select
                components={{ Input: CustomSelectInput }}
                className="react-select"
                classNamePrefix="react-select"
                name="form-field-name"
                options={categories}
                onChange={(e) => {
                        setformData({ ...formData, brand: e.value })
                        
                    }}
                />
            </Col>
            </Row>
            <Row>
            <Col className="sm-6">
                <Label className="mt-4">
                <IntlMessages id="Supplier" />
                </Label>
                
                <Select
                components={{ Input: CustomSelectInput }}
                className="react-select"
                classNamePrefix="react-select"
                name="form-field-name"
                options={categories}
                onChange={(e) => {
                        setformData({ ...formData, supplier: e.value })
                        
                    }}
                />
            </Col>
            <Col className="sm-6">
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
            </Col>
            </Row>
            <Row>
            <Col className="sm-6">
            <Label className="mt-4">
                <IntlMessages id="Initial Price" />
            </Label>
            <Input type='number' onChange={(e) => {
                setformData({ ...formData, iprice: e.target.value })
                }} />
            </Col>
            <Col className="sm-6">
            <Label className="mt-4">
                <IntlMessages id="Retail Price" />
            </Label>
            <Input type='number' onChange={(e) => {
                setformData({ ...formData, rprice: e.target.value })
                }} />
            </Col>
            </Row>
            <Row>
            <Col className="sm-6">
            <Label className="mt-4">
                <IntlMessages id="But Price" />
            </Label>
            <Input type='number' onChange={(e) => {
                setformData({ ...formData, bprice: e.target.value })
                }} />
            </Col>
            <Col className="sm-6">
            <Label className="mt-4">
                <IntlMessages id="Wholesale Price" />
            </Label>
            <Input type='number' onChange={(e) => {
                setformData({ ...formData, wprice: e.target.value })
                }} />
            </Col>
            </Row>
            <Row>
            <Col className="sm-6">
            <Label className="mt-4">
                <IntlMessages id="Stock" />
            </Label>
            <Input onChange={(e) => {
                setformData({ ...formData, stock: e.target.value })
                }} />
            </Col>
            <Col className="sm-6">
            <Label className="mt-4">
                <IntlMessages id="Weight" />
            </Label>
            <Input onChange={(e) => {
                setformData({ ...formData, weight: e.target.value })
                }} />
            </Col>
            </Row>
            <div className='mt-3'>
            <Label>
                <IntlMessages id="Product Description" />
            </Label>
            <Input type="textarea" onChange={(e) => {
                setformData({ ...formData, description: e.target.value })
                }} />
            </div>
            <div className="mt-3">
            
            </div>
            <div className="mt-5">
            <Button onClick={ e => {e.preventDefault(); history.push('/app/inventory/products')}}color="secondary" outline >
                <IntlMessages id="pages.cancel" />
            </Button>
            <Button className='mx-3' color="primary">
                <IntlMessages id="Create Product" />
            </Button>
            </div>
                                </Form>
                            </CardBody>
                        </Card>
                    </Colxx>
                </Row>
            </div>
        </>
    );
};

export default Newproduct;
import IntlMessages from '../../../helpers/IntlMessages';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import React, { useState, useEffect,useContext } from 'react';
import axios from 'axios'
import { NotificationManager } from '../../../components/common/react-notifications';
import Authservice from "../../../AuthHeader/authheader"
import {UserContext} from "../../../Context/UserContext"
import {useHistory} from "react-router-dom"
import {
    Row,
    Card,
    CardBody,
    Input,
    CardTitle,
    FormGroup,
    Label,
    CustomInput,
    Button,
    FormText,
    Form,
} from 'reactstrap';
// import { injectIntl } from 'react-intl';

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
        const data = new FormData()
        if(formData.firstName){
          data.append("firstName",formData.firstName)
        }
        if(formData.lastName){
          data.append("lastName",formData.lastName)
        }
        if(formData.email){
          data.append("email",formData.email)
        }
        if(formData.phone){
          data.append("phone",formData.phone)
        }
        if(formData.role){
          data.append("role",formData.role)
        }
        if(formData.address){
          data.append("address",formData.address)
        }
        if(formData.company){
            data.append("company",formData.company)
          }
          if(formData.city){
            data.append("city",formData.city)
          }
          if(formData.state){
            data.append("state",formData.state)
          }
          if(formData.country){
            data.append("country",formData.country)
          }
          if(formData.zip){
            data.append("zip",formData.zip)
          }
        if(picture){
          data.append("profileImage",picture)
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
                                <Form>
                             
                                    <FormGroup row>
                                   
                                        <Colxx sm={6}>
                                            <FormGroup>
                                                <Label for="exampleEmailGrid">
                                                    <IntlMessages id="First Name" />
                                                </Label>
                                                <Input
                                                    type="text"
                                                    defaultValue={user.firstName}
                                                    name="exampleEmailGrid"
                                                    id="exampleEmailGrid"
                                                    placeholder="First Name"
                                                    onChange={(e) => {
                                                        setformData({ ...formData, firstName: e.target.value });
                                                    }}
                                                />
                                            </FormGroup>
                                        </Colxx>

                                        <Colxx sm={6}>
                                            <FormGroup>
                                                <Label for="examplePasswordGrid">
                                                    <IntlMessages id="Last Name" />
                                                </Label>
                                                <Input
                                                    type="text"
                                                    defaultValue={user.lastName}
                                                    // name="examplePasswordGrid"
                                                    // id="examplePasswordGrid"
                                                    placeholder="Last Name"
                                                    onChange={(e) => {
                                                        setformData({ ...formData, lastName: e.target.value });
                                                    }}
                                                />
                                            </FormGroup>
                                        </Colxx>
                                        <Colxx sm={6}>
                                            <FormGroup>
                                                <Label for="exampleEmailGrid">
                                                    <IntlMessages id="forms.email" />
                                                </Label>
                                                <Input
                                                    defaultValue={user.email}
                                                    type="email"
                                                    name="exampleEmailGrid"
                                                    id="exampleEmailGrid"
                                                    placeholder="Email"
                                                    onChange={(e) => {
                                                        setformData({ ...formData, email: e.target.value });
                                                    }}
                                                />
                                            </FormGroup>
                                        </Colxx>

                                        <Colxx sm={6}>
                                            <FormGroup>
                                                <Label for="examplePasswordGrid">
                                                    <IntlMessages id="Phone" />
                                                </Label>
                                                <Input
                                                defaultValue={user.phone}
                                                    type="text"
                                                    name="examplePasswordGrid"
                                                    id="examplePasswordGrid"
                                                    placeholder="Phone"
                                                    onChange={(e) => {
                                                        setformData({ ...formData, phone: e.target.value });
                                                    }}
                                                />
                                            </FormGroup>
                                        </Colxx>
                                        <Colxx sm={12}>
                                            <FormGroup>
                                                <Label for="exampleAddressGrid">
                                                    <IntlMessages id="Company Name" />
                                                </Label>
                                                <Input
                                                defaultValue={user.company}
                                                    type="text"
                                                    name="exampleAddressGrid"
                                                    id="exampleAddressGrid"
                                                    placeholder="Company Name"
                                                    onChange={(e) => {
                                                        setformData({ ...formData, company: e.target.value });
                                                    }}
                                                />
                                            </FormGroup>
                                        </Colxx>

                                        <Colxx sm={12}>
                                            <FormGroup>
                                                <Label for="exampleAddressGrid">
                                                    <IntlMessages id="forms.address" />
                                                </Label>
                                                <Input
                                                defaultValue={user.address}
                                                    type="text"
                                                    name="exampleAddressGrid"
                                                    id="exampleAddressGrid"
                                                    placeholder="Address"
                                                    onChange={(e) => {
                                                        setformData({ ...formData, address: e.target.value });
                                                    }}
                                                />
                                            </FormGroup>
                                        </Colxx>

                                        <Colxx sm={4}>
                                            <FormGroup>
                                                <Label for="exampleAddress2Grid">
                                                    <IntlMessages id="City" />
                                                </Label>
                                                <Input
                                                defaultValue={user.city}
                                                    type="text"
                                                    name="exampleAddress2Grid"
                                                    id="exampleAddress2Grid"
                                                    placeholder="City"
                                                    onChange={(e) => {
                                                        setformData({ ...formData, city: e.target.value });
                                                    }}
                                                />
                                            </FormGroup>
                                        </Colxx>
                                        <Colxx sm={3}>
                                            <FormGroup>
                                                <Label for="exampleAddress2Grid">
                                                    <IntlMessages id="State" />
                                                </Label>
                                                <Input
                                                defaultValue={user.state}
                                                    type="text"
                                                    name="exampleAddress2Grid"
                                                    id="exampleAddress2Grid"
                                                    placeholder="State"
                                                    onChange={(e) => {
                                                        setformData({ ...formData, state: e.target.value });
                                                    }}
                                                />
                                            </FormGroup>
                                        </Colxx>
                                        <Colxx sm={3}>
                                            <FormGroup>
                                                <Label>
                                                    <IntlMessages id="Country" />
                                                </Label>
                                                {/* <Input defaultValue={user.country} type="select" onChange={(e) => {
                                                    setformData({ ...formData, country: e.target.value });
                                                }}>

                                                    <option>Select</option>
                                                    {countries.map(item => {
                                                        return (<option>{item}</option>)
                                                    })}

                                                </Input> */}
                                                {/* <select value={user.country} onChange={(e) => {
                                                    setformData({ ...formData, country: e.target.value })
                                                }}>
                                                <option>Select</option>
                                                    {countries.map(item => {
                                                        return (<option>{item}</option>)
                                                    })}
                                                </select> */}
                                                <Input
                                                defaultValue={user.country}
                                                    type="text"
                                                    name="exampleAddress2Grid"
                                                    id="exampleAddress2Grid"
                                                    placeholder="State"
                                                    onChange={(e) => {
                                                        setformData({ ...formData, state: e.target.value });
                                                    }}
                                                />
                                                
                                            </FormGroup>
                                        </Colxx>
                                        <Colxx sm={2}>
                                            <FormGroup>
                                                <Label for="exampleZipGrid">
                                                    <IntlMessages id="forms.zip" />
                                                </Label>
                                                <Input
                                                defaultValue={user.zipcode}
                                                    type="text"
                                                    name="exampleZipGrid"
                                                    id="exampleZipGrid"
                                                    placeholder="Zip"
                                                    onChange={(e) => {
                                                        setformData({ ...formData, zipcode: e.target.value });
                                                    }}
                                                />
                                            </FormGroup>
                                        </Colxx>


                                    </FormGroup>

                                    <Button onClick={submit} color="primary">
                                        <IntlMessages id="Save Changes" />
                                    </Button>
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
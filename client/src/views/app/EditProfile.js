import IntlMessages from '../../helpers/IntlMessages';
import { Colxx, Separator } from '../../components/common/CustomBootstrap';
import Breadcrumb from '../../containers/navs/Breadcrumb';
import React, { useState, useEffect,useContext } from 'react';
import axios from 'axios'
import { NotificationManager } from '../../components/common/react-notifications';
import Authservice from "../../AuthHeader/authheader"
import {UserContext} from "../../Context/UserContext"
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

const EditProfile = ({ match }) => {
    const [formData, setformData] = useState({})
    const [user, setUser] = useContext(UserContext)
    const history = useHistory()

    // useEffect(() => {
    //     countryData()
    // }
    // )
    // useEffect(()=>{
    //     getuserData()
    // },[])

    // const getuserData =()=>{
    //     const user = Authservice.getCurrentUser()
    //     axios.get("/userData",{params:{id:user.user.id}}).then(res=>{
    //         console.log(res.data)
    //             setUserData(res.data.data)
    //     })
    // }
    // // useEffect(()=>{
    // //     const user = Authservice.getCurrentUser()
    // //     setUserData(user.user)
    // // },[userData])
    // const user = Authservice.getCurrentUser()
    // const userData = user.user

    
    // // setformData({...formData,email:userData.email,firstName:userData.firstName,lastName:userData.lastName})
    // // console.log(formData)

    // // 


    // const countryData = () => {
    //     axios.get("/countries").then(res => {
    //         console.log(res.data.list)
    //         setCountries(res.data.list)
    //     })
    // }

    
    // FORM   SUBMIT HANDLER
    const submit = (e) => {
        e.preventDefault()
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
        axios.post("/edit-profile", formData,{params:{id:user.id}}).then((res) => {
            setUser(res.data.data)
            NotificationManager.success(
                res.data.success,
                'Success',
                3000,
                null,
                null,
                ''
              );
              window.location.reload();
        })
       }
    }
    return (
        <>
            <Row>
                <Colxx xxs="12">
                    <Breadcrumb heading="Edit Profile" match={match} />
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

export default EditProfile;
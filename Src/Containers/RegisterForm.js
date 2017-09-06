import React from 'react';
import axios from 'axios';
import {Button, Form, Col, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

export default class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeFields = this.handleChangeFields.bind(this);
  }
  handleChangeFields(e) {
    this.setState({ [e.target.name] : e.target.value,});
    console.log(e.target.value);

  }
  handleSubmit(e) {
    const { freelance_name, company_name, job_from, job_to, industry, project_name, project_from, project_to, client_name } = this.state;
    e.preventDefault();

    axios.post('/registerNewFreelancer', {
      freelance_name, company_name, job_from, job_to, industry, project_name, project_from, project_to, client_name

    }).then((response) => {
      console.log(response);
    }).catch(function(err) {
      console.log(err);

    });

  }
  render() {
    return (
      <div id="form-regis-cnt">
        <Form id="form-new-freelance-cnt" horizontal>
          <h3> Freelance Profile </h3>
          <FormGroup controlId="formHorizontalName">
            <ControlLabel> Freelance Name </ControlLabel>
            <FormControl type="text" name="freelance_name" placeholder="Name"  onChange={this.handleChangeFields}/>
          </FormGroup>

          <h3> Job Experience </h3>
          <FormGroup controlId="formHorizontalaCompanyName">
            <ControlLabel> Company Name </ControlLabel>
            <FormControl type="text" name="company_name" placeholder="Company Name" onChange={this.handleChangeFields} />
          </FormGroup>
          <Form inline id='duration'>
          <FormGroup controlId="formInlineJobFrom" bsSize="small" className='duration'>
            <ControlLabel>Duration </ControlLabel>
            <ControlLabel>From</ControlLabel>
            <FormControl type="text" name="job_from" placeholder="2013" onChange={this.handleChangeFields} />
          </FormGroup>
          <FormGroup controlId="formInlineJobTo" bsSize="small" className='duration' >
            <ControlLabel>To</ControlLabel>
            <FormControl type="text" name='job_to' placeholder="2015" onChange={this.handleChangeFields} />
          </FormGroup>
          </Form>
          <FormGroup controlId="formControlsIndustry">
            <ControlLabel>Industry of Company</ControlLabel>
            <FormControl componentClass="select" name="industry" placeholder="select" onChange={this.handleChangeFields}>
              <option value="Aviation"> Aviation </option>
              <option value="Railway"> Railway </option>
              <option value="Ocean tranportation"> Ocean tranportation </option>
              <option value="Logistics"> Logistics</option>
              <option value="Pharmaceuticals, life sciences and biotechnology"> Pharmaceuticals, life sciences and biotechnology </option>
              <option value="Banking, financial services and insurance"> Banking, financial services and insurance</option>
              <option value="Telecommunications"> Telecommunications</option>
              <option value="Oil and gas"> Oil and gas </option>
              <option value="Automotive"> Automotive </option>
            </FormControl>
          </FormGroup>

          <h3> Project Experience </h3>
          <FormGroup controlId="formHorizontalaProjectName">
            <ControlLabel> Project Name  </ControlLabel>
            <FormControl type="text" name="project_name" placeholder="Project Name" onChange={this.handleChangeFields} />
          </FormGroup>
          <Form inline id='duration'>
            <FormGroup controlId="formInlineProjectFrom" bsSize="small" className='duration'>
            <ControlLabel>Duration From</ControlLabel>
            <FormControl type="text" name='project_from' placeholder="1998" onChange={this.handleChangeFields} />
          </FormGroup>
          <FormGroup controlId="formInlineProjectTo" bsSize="small" className='duration'>
            <ControlLabel>To</ControlLabel>
            <FormControl type="text" name='project_to' placeholder="2001" onChange={this.handleChangeFields} />
          </FormGroup>
          </Form>
          <FormGroup controlId="formHorizontalaClientName">
            <ControlLabel> Client Name </ControlLabel>
            <FormControl type="text" name="client_name" placeholder="Client Name" onChange={this.handleChangeFields} />
          </FormGroup>
            <FormGroup>
              <Col smOffset={5} sm={10}>
                <Button type="submit" onClick={this.handleSubmit}>
                  Register
                </Button>
              </Col>
            </FormGroup>
            <p> All fields are mandatory </p>
        </Form>
      </div>
    )
  }
}

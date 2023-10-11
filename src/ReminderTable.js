

import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
// import { useAuth } from './context/AuthContext';

const StyledFormContainer = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: #f7f7f7;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
`;

const StyledHeader = styled.h1`
  text-align: center;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  background-color: ${(props) => (props.even ? '#f2f2f2' : 'transparent')};
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StyledCheckboxLabel = styled.label`
  margin-right: 10px;
`;

const StyledButton = styled.button`
  background-color: #007BFF;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const ReminderTable = () => {
    const  navigate=useNavigate();
    const rizz =()=> {
        navigate('/');
      }
     
  const [formData, setFormData] = useState({
    createdby:'6526ab6e7e4fed79ee8e74fe',
    selectedDate: '',
    selectedSubject: '',
    description: '',
    emailAddress: '',
    contactNo: '',
    smsNo: '',
    recurringDays: {
      '7 Days': false,
      '5 Days': false,
      '3 Days': false,
      '2 Days': false,
    },
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        recurringDays: {
          ...prevData.recurringDays,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async () => {
    try {
      // Send the form data to your backend server
      const response = await axios.post('http://localhost:3001/api/v1/auth/set', formData);
      console.log('Data saved:', response.data);
       
  // rr(response.data);
      navigate('/');

    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <StyledFormContainer>
      <StyledHeader>Set a New Reminder</StyledHeader>
      <StyledTable>
        <tbody>
          <TableRow even>
            <TableCell>Select a Date:</TableCell>
            <TableCell>
              <StyledInput type="date" name="selectedDate" value={formData.selectedDate} onChange={handleInputChange} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Subject:</TableCell>
            <TableCell>
              <StyledSelect name="selectedSubject" value={formData.selectedSubject} onChange={handleInputChange}>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
              </StyledSelect>
            </TableCell>
          </TableRow>
          <TableRow even>
            <TableCell>Add description:</TableCell>
            <TableCell>
              <StyledTextArea name="description" value={formData.description} onChange={handleInputChange} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Email Address:</TableCell>
            <TableCell>
              <StyledInput type="text" name="emailAddress" value={formData.emailAddress} onChange={handleInputChange} />
            </TableCell>
          </TableRow>
          <TableRow even>
            <TableCell>Contact No:</TableCell>
            <TableCell>
              <StyledInput type="text" name="contactNo" value={formData.contactNo} onChange={handleInputChange} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>SMS No:</TableCell>
            <TableCell>
              <StyledInput type="text" name="smsNo" value={formData.smsNo} onChange={handleInputChange} />
            </TableCell>
          </TableRow>
          <TableRow even>
            <TableCell>Recur for next:</TableCell>
            <TableCell>
              {Object.keys(formData.recurringDays).map((day) => (
                <StyledCheckboxLabel key={day}>
                  <input
                    type="checkbox"
                    name={day}
                    checked={formData.recurringDays[day]}
                    onChange={handleInputChange}
                  />
                  {day}
                </StyledCheckboxLabel>
              ))}
            </TableCell>
          </TableRow>
        </tbody>
      </StyledTable>
      <StyledButton onClick={handleSubmit}>Save Reminder</StyledButton> &nbsp; &nbsp; &nbsp;
      {/* <Button onClick={rizz}>Back</Button> */}
      <StyledButton onClick={rizz}>Back</StyledButton>
    </StyledFormContainer>
  );
};

export default ReminderTable;

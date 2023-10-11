import React ,{ useState }from 'react'
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
// import { useAuth } from "./context/AuthContext";
// import axios from 'axios';


// Welcome to the Reminder Application <<username>>			
// Today is Tuesday, 14th Of February.			
// Set  Reminder			
// Modify Reminder			
// Disable Reminder			
// Delete Reminder			
// Enable Reminder			
// View your Reminders	
// let _id='6526b7b8038b3e6cae98d9b7';
//  const response = await axios.post('http://localhost:3001/api/v1/auth/getreminder', _id);
const StyledContainer = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: #f7f7f7;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
`;

// const StyledHeader = styled.h1`
//   text-align: center;
// `;

const StyledDataContainer = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
`;

const StyledDataField = styled.div`
  margin: 5px 0;
`;	
const StyledDate = styled.p`
  text-align: center;
  font-size: 16px;
`;	

function getCurrentDate() {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
    const now = new Date();
    const dayOfWeek = days[now.getDay()];
    const dayOfMonth = now.getDate();
    const month = months[now.getMonth()];
  
    return `Today is ${dayOfWeek}, ${dayOfMonth}th Of ${month}.`;
  }
  
function Home() {
    // const {user } = useAuth();
    const  navigate=useNavigate();
    const location = useLocation();
    //  const {userr}=useAuth;
    const [showReminderData, setShowReminderData] = useState(false);
  const reminderData = location.state ? location.state.reminderData : null;
  const currentDate = getCurrentDate();
    const riz =()=> {
        navigate('/setr');
      }
    //   {user.username}
  return (
    <>
   <br/>
   <br/>
    <h3 style={{textAlign:"center"}}>Welcome to the Reminder Application 	</h3>
    <StyledDate>{currentDate}</StyledDate>
    <div className='container'>
        <div className='grid grid-three-column'>
            <div>
    <Button onClick={riz}>Set  Reminder</Button>
    </div>

    {/* <Button>Modify Reminder</Button> */}
    <div>
    <Button>Disable  Reminder</Button>
    </div>
    {/* <Button>Delete  Reminder</Button> */}
    {/* <Button>Enable  Reminder</Button> */}
    <div>
    <Button onClick={() => setShowReminderData(true)}>View your Reminder</Button>
    </div>
    </div>
    </div>
    {showReminderData && (
<>
    {reminderData && (
        <StyledContainer>
          <h3>Received Reminder Data</h3>
          {reminderData.map((reminder, index) => (
            <StyledDataContainer key={index}>
              <StyledDataField>
                <strong>Date:</strong> {reminder.selectedDate}
              </StyledDataField>
              <StyledDataField>
                <strong>Subject:</strong> {reminder.selectedSubject}
              </StyledDataField>
              <StyledDataField>
                <strong>Description:</strong> {reminder.description}
              </StyledDataField>
              <StyledDataField>
                <strong>Email Address:</strong> {reminder.emailAddress}
              </StyledDataField>
              <StyledDataField>
                <strong>Contact No:</strong> {reminder.contactNo}
              </StyledDataField>
              <StyledDataField>
                <strong>SMS No:</strong> {reminder.smsNo}
              </StyledDataField>
              <StyledDataField>
                <strong>Recurring Days:</strong> {reminder.recurringDays}
              </StyledDataField>
              {/* Add more fields as needed */}
            </StyledDataContainer>
          ))}
        </StyledContainer>
      )}
    </>
)}






    </>
  )
};

export default Home;
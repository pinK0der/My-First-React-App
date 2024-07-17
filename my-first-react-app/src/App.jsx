import Card from './Card.jsx'
import Student from './Student.jsx'
import List from './List.jsx'
import Button from './Button.jsx'
import ProfilePicture from './ProfilePicture.jsx'

function App()
{
  return (
    <div>
      <Card />
      <Button />
      <Student name="Leonardo" age={30} isStudent={true}/>
      <h2>Default props</h2>
      <Student />
      <List />
      <ProfilePicture />
    </div>
  );
}
//learning props with student file
export default App

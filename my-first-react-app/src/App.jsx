import Card from './Card.jsx'
import Student from './Student.jsx'
import List from './List.jsx'
import Button from './Button.jsx'
import ProfilePicture from './ProfilePicture.jsx'
import MyComponent from './MyComponent.jsx'
import ObjectForUpdate from './ObjectForUpdate.jsx'
import ArrayForUpdate from './ArrayForUpdate.jsx'
import UseEffect from './UseEffect.jsx'
import WidthJokes from './WidthJokes.jsx'
import ComponentA from './ComponentA.jsx'

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
      <MyComponent />
      <ObjectForUpdate />
      <ArrayForUpdate />
      <UseEffect />
      <WidthJokes />
      <ComponentA />
    </div>
  );
}
//learning props with student file
export default App

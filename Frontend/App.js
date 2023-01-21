import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './Classvelidatonfrom';
import Deletefeedback from './Delete feedback';
import Deletelogfeed from './Deletelogfeed';
import Deleteregistration from './DeleteRegistration';
import Editfeedback from './Edit feedback';
import Editregistration from './Edit registration';
import Editloginfeed from './Editloginfeed';
import FeedBack from './Registrationfeedback';
import Showfeedback from './Get feedback';
import Layout from './Layout';
import Login from './login';
import Loginfeedback from './Loginfeedback';
import Registration from './Regstration';
import Showloginfeedback from './Showloginfeedback';
import Showregistration from './Showregistration';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          start Admin page
          <Route index element={<Login/>}/> 
        <Route path="login" element={<Login/>}/>
        <Route path="Loginfeedback" element={<Loginfeedback/>}/>
        <Route path="Editloginfeed" element={<Editloginfeed/>}/>
        <Route path="Deletelogfeed" element={<Deletelogfeed/>}/>
        <Route path="Showloginfeedback" element={<Showloginfeedback/>}/> 

        start Registration page
        <Route path="Registration" element={<Registration/>}/>
        <Route path="Showregistration" element={<Showregistration/>}/>
        <Route path="Editregistration" element={<Editregistration/>}/>
        <Route path="Deleteregistration" element={<Deleteregistration/>}/>

        feedback
        <Route path="Feedback" element={<FeedBack/>}/>
        <Route path="Showfeedback" element={<Showfeedback/>}/>
        <Route path="Editfeedback" element={<Editfeedback/>}/>
        <Route path="Deletefeedback" element={<Deletefeedback/>}/>
        
        <Route path="velidForm" element={<Form/>}/>

        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

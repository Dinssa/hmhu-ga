import './App.css';
import { useState, useEffect } from 'react';

// Router
import { Navigate, Routes, Route } from 'react-router-dom';
// Token
import { getUserFromToken } from '../../utilities/users-service';

// * Pages
// Universal
import Nav from '../../components/global/Nav/Nav';
import AuthPage from '../Auth/AuthPage';
import HomePage from '../Home/HomePage';
import ClientsPage from '../Meta/ClientsPage';
import FreelancersPage from '../Meta/FreelancersPage';
import PageNotFound from '../Misc/PageNotFound';
// Main App
import ProjectsPage from '../Project/ProjectsPage';
import TemplatesPage from '../Template/TemplatesPage';
import FormsPage from '../Form/FormsPage';
import ProfilePage from '../Account/ProfilePage';
import SettingsPage from '../Account/SettingsPage';

function App() {
  const [user, setUser] = useState(getUserFromToken())

  return (
    <main className="App">
      <Nav user={user} setUser={setUser} />
      { user ? 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/freelancers" element={<FreelancersPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="/forms" element={<FormsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/404" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        :
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/freelancers" element={<FreelancersPage />} />
          <Route path="/auth" element={<AuthPage setUser={setUser} />} />
          <Route path="/404" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      }      
    </main>
  );
}

export default App;

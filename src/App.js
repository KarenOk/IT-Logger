import React, { useEffect } from 'react';
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import './App.css';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddButton from './components/layout/AddButton';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechnicianModal from './components/technicians/AddTechnicianModal';
import ViewTechniciansModal from './components/technicians/ViewTechniciansModal';


function App() {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <div className="App">
      <SearchBar />
      <div className="container">
        <Logs />
        <AddButton />
        <AddLogModal />
        <EditLogModal />
        <AddTechnicianModal />
        <ViewTechniciansModal />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap';

const Dashboard = (props) => {
  return (
    <div>
      <h1>Dashboard</h1>

      <Tabs defaultActiveKey={2} id="dashboard-tabs">
        <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
        <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
        <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
      </Tabs>
    </div>
  );
};

export default Dashboard;

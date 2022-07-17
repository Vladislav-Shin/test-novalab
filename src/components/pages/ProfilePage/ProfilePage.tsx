import React from 'react';
import AppHeader from '../../appHeader/AppHeader';
import Footer from '../../footer/Footer';
import { Card } from 'antd';

const ProfilePage = () => {
  const id = localStorage.getItem('idUser')
  return (
    <>
      <AppHeader />
      <main className="main">
        <div className="container">
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://joeschmoe.io/api/v1/random"
              />
            }

          >
            <h2>Пользователь - {id}</h2>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProfilePage;
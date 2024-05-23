import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import NavigationBar from './components/Navbar'; // Ensure the filename matches exactly
import Introduction from './components/Introduction';
import CourseList from './components/CourseList';
import ReviewForm from './components/ReviewForm';
import ReviewList from './components/ReviewList';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/courses" element={<CourseList />} />
          <Route path="/reviews" element={<ReviewList />} />
          <Route path="/add-review" element={<ReviewForm />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;

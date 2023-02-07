import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from '../components/Common/PriavteRoute/PrivateRoute';
import WrapperScrollTop from '../components/Common/WrapperScrollTop/WrapperScrollTop';
import AdminLayout from '../layouts/AdminLayout/AdminLayout';
import AuthLayout from '../layouts/AuthLayout/AuthLayout';
import CourseLayout from '../layouts/CourseLayout/CourseLayout';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Login from './auth/login';
import Register from './auth/register';

// MainLayout
const HomePageComponent = React.lazy(() => import('./main/HomePage/HomePage'));
const RoadMapComponent = React.lazy(() => import('./main/RoadMap/RoadMap'));
const StudyComponent = React.lazy(() => import('./main/Study/Study'));
const BlogComponent = React.lazy(() => import('./main/Blog/Blog'));

// CourseLayout
const LearningComponent = React.lazy(() => import('./main/Learning/Learning'));

// AdminLayout
const CourseOverviewComponent = React.lazy(() => import('./admin/Courses/CoursesOverview'));
const RoadMapAdminComponent = React.lazy(() => import('./admin/RoadMap/RoadMapAdmin'));
const BlogAdminComponent = React.lazy(() => import('./admin/Blog/BlogAdmin'));

export default function MainModule() {
  return (
    <Router>
      <WrapperScrollTop>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          <Route path="" element={<MainLayout />}>
            <Route index element={<HomePageComponent />}></Route>
            <Route path="road-map" element={<RoadMapComponent />} />
            <Route path="study" element={<StudyComponent />} />
            <Route path="blog" element={<BlogComponent />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="learning" element={<CourseLayout />}>
              <Route path=":slug/:_id" element={<LearningComponent />} />
            </Route>
          </Route>

          <Route path="admin" element={<AdminLayout />}>
            <Route path="course" index element={<CourseOverviewComponent />} />
            <Route path="roadmap" element={<RoadMapAdminComponent />} />
            <Route path="blog" element={<BlogAdminComponent />} />
          </Route>
        </Routes>
      </WrapperScrollTop>
    </Router>
  );
}

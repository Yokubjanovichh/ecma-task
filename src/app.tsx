import { AddMain, CourseList } from 'pages'
import Dashboard from 'pages/Dasahboard'
import NotFound from 'pages/NotFound'
import { Routes, Route } from 'react-router-dom'

export default function app() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="/" element={<CourseList />} />
        <Route path="lists/:courseId" element={<AddMain />} />
        <Route path="lists/create" element={<AddMain />} />
      </Route>
        <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

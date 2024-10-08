// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private } from '@redwoodjs/router'

import { useAuth } from './auth'
import NavbarLayout from './layouts/NavbarLayout/NavbarLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/contact" page={ContactPage} name="contact" />
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Set wrap={NavbarLayout}>
        <Private unauthenticated="home">
          <Route path="/settings" page={SettingsPage} name="settings" />
        </Private>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/widgets" page={WidgetsPage} name="widgets" />
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes

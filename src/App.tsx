import React from 'react'
// import { useFormikContext, withFormik, Form, Field } from 'formik'
import ContentComponant from './components/contentComponent'
import NavSideBar from './components/navSideBar'
import NavTopBar from './components/navTopBar'
import styles from './App.module.scss'

function App() {
  // const { values, errors, touched } = useFormikContext<any>()

  return (
    <div className={`${styles.root}`}>
      <NavSideBar />
      <div className={`${styles.wrapper}`}>
        <NavTopBar />
        <ContentComponant />
      </div>
    </div>
  )
}

// const EnhancedApp = withFormik({
//   mapPropsToValues: (props) => ({
//     //
//   }),
//   validate: (values) => {
//     //
//   },
//   handleSubmit: (values, { setFieldValue }) => {
//     // console.log(values)
//   },
// })(App)

export default App

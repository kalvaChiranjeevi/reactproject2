import React,{useEffect} from 'react';

import { useFormik } from 'formik';

import  './style.css';



function Loginform(props) {
    
   

const uvalidate = {
    name:'chiranjeevi',
    pass : '123456789',
}

    const validate = values => {
        const errors = {};
        if (!values.name) {
          errors.name = 'Plese Enter User Name';
        } else if (values.name.length <= 5) {
          errors.name = 'Must be 5 characters or More';
        }
      
       
      
        if (!values.pass) {
          errors.pass = 'Plese Enter password';
        } else if (values.pass.length <=8) {
            errors.pass = 'Must be 8 characters or more';
          }
      
        return errors;
      };
    const formik = useFormik({
        initialValues: {
          name: '',
          
          pass: '',
        },
        validate,
        onSubmit: values => {
            
          // alert(JSON.stringify(values, null, 2));
        if(values.name ===uvalidate.name &&  values.pass===uvalidate.pass){
            props.history.push(`/home`)
            // window.location.href="/home"
            localStorage.setItem('username', values.name);
            localStorage.setItem('password', values.pass);
           
            
        }else {
            alert('Not Uthorized Person');
        }

       
        },
      });

      useEffect(() => {
        
      },[props.location]);

    return (
        
        <div className="loginform"  style = {{height:'inherit'}}>
          <form  onSubmit={formik.handleSubmit} style = {{height:'400px'}}>
            <div>
            <label htmlFor="name">User Name</label>
                <input id ="name" type="text" name="name"                
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                />
                {formik.errors.name ? <span style={{color:'red'}}>{formik.errors.name}</span> : null}
            </div>
                <br></br>
            <div>
                <label htmlFor="pasword">Pasword</label>
                  <input id ="pass" type="text" name="pass"                
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.pass}
                    
                />
              {formik.errors.pass ? <span style={{color:'red'}}> {formik.errors.pass}</span> : null}
            </div>
            <div>
                
                <button type="submit"> Login</button>
               
                
            </div>
            </form>
        </div>
      
    );
}

export default Loginform;
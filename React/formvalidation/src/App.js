import{useFormik} from 'formik'
import * as Yup from 'yup'
function App() {
const formik=useFormik({
  initialValues:{
    username:"",
    email:"",
    password:"",
    gender:"",
    country:"",

  },
  validationSchema:Yup.object({
username:Yup.string()
.max(10,"cannot exceed 10 characters")
.required("this field cannot be empty") ,
email:Yup.string()
  .max(20,"cannot exceed 20 characters")
  .required("this field cannot be empty"),
password:Yup.string()
  .min(8,"Atleast 8 characters")
  .max(12,"Cannot exceed 12 characters")
  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[_@#*&])/,"Password must contain min 1 samll alphabet,min 1 capital alphabet,min 1 digit,min 1 special character")
  .required("this field cannot be empty"),
gender:Yup.string()
.required("Choose atleast one"),
country:Yup.string()
.required("select one option"),
  }), 
  onSubmit:(values)=>{
    alert(JSON.stringify(values))
  }
})
  return (
  <div>
    <form onSubmit={formik.handleSubmit}>
    <fieldset>
      <legend><b>User Login</b></legend>
      <label>UserName:</label>
      <input type="text" name="username" placeholder="Enter Username"
      onChange={formik.handleChange}
      value={formik.values.username}
      />
           {formik.errors.username &&<p style={{color:"red"}}>{formik.errors.username}</p>}
      <br/>
      <br/>
 
      <label>Email:</label>
      <input type="email" name="email"placeholder="Enter Email" 
      onChange={formik.handleChange}
      value={formik.values.email}
      />
      {formik.errors.email &&<p style={{color:"red"}}>{formik.errors.email}</p>}
      <br/>
      <br/>
      
      <label>Password:</label>
      <input type="password" name="password"placeholder="Enter password"
      onChange={formik.handleChange}
      value={formik.values.password}
      />
      {formik.errors.password &&<p style={{color:"red"}}>{formik.errors.password}</p>}
      
      <br/>
      <br/>
      
      <label>Gender: </label>
      <input type="radio" name="gender"
      onChange={formik.handleChange}
      value="Male"
      />Male
       <input type="radio" name="gender"
      onChange={formik.handleChange}
      value="Female"
      />Female
       <input type="radio" name="gender"
      onChange={formik.handleChange}
      value="Others"
      />Others
      {formik.errors.gender &&<p style={{color:"red"}}>{formik.errors.gender}</p>} 
      <br/>
      <br/>
      <label>Select Country</label>
      <select name="country"  onChange={formik.handleChange }>
      <option name="country"  >--</option>
        <option name="country"  onChange={formik.handleChange } value="India">India</option>
        <option name="country"  onChange={formik.handleChange } value="China">China</option>
        <option name="country"  onChange={formik.handleChange } value="Nepal">Nepal</option>
        <option name="country"  onChange={formik.handleChange } value="Germany">Germany</option>
        <option name="country" onChange={formik.handleChange } value="Bhutan">Bhutan</option>
        {formik.values.value}
      </select>
      {formik.errors.country &&<p style={{color:"red"}}>{formik.errors.country}</p>}
      <br/><br/>
    <input type="submit" value="Submit"></input>
    </fieldset>
    </form>
  </div>
  );
}
export default App;

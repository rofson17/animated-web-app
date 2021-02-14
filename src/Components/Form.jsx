import {React ,useState} from 'react';

const Form=()=>{
  const [data, setData]=useState({
    fullname:'',
    number:'',
    email:'',
    coments:''
  });
  const inputEvent=(event)=>{
    const {name, value}=event.target;
    setData((preVal)=>{
      return{
        ...preVal, [name]:value,
      };
    });
  };

  const formSubmit=(e)=>{
    e.preventDefault();
    alert(`NAME: ${data.fullname}\n EMAIL: ${data.email}\n NUMBER: ${data.number}\n COMENT: ${data.coments}`);
  }


  return (<>
    <div className="col-md-6 col-10 mx-auto order-2 order-lg-1">
        <form onSubmit={formSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Full name</label>
            <input name="fullname" onChange={inputEvent} value={data.fullname} type="text" className="form-control" id="exampleFormControlInput1" placeholder="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
              <input name="email" onChange={inputEvent} value={data.email} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Phone number</label>
                <input name="number" onChange={inputEvent} value={data.number} type="number" className="form-control" id="exampleFormControlInput1" placeholder="mobile number" />
              </div>
            <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea name="coments" onChange={inputEvent} value={data.coments} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-outline-primary">Submit</button>
        </form>
    </div>

    </>
  )
}

export default Form;

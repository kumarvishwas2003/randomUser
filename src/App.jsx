import { useState } from 'react'
import './App.css'
import Address from './components/Address'

function App() {
  // const [count, setCount] = useState(0)
  const [img,setImg] = useState("")
  const [streetAddress,setStreetAddress] = useState("")
  const [postCode,setPostCode] = useState("")
  const [streetName,setStreetName] = useState("")
  const [fullName,setFullName] = useState("")
  const [age,setAge] = useState("")
  const [city,setCity] = useState("")
  const [phone,setPhone] = useState("")
  const [mobile,setMobile] = useState("")
  const [fullAddress,setAddress] = useState("")
  const getUser = async () => {
    try {
      const userInfo = await fetch('https://randomuser.me/api/')
      const userJson = await userInfo.json()
      const data = userJson.results[0]
      console.log(data)
  const finalName = data.name.title +" "+data.name.first+" "+data.name.last;
  const finalAddress = data.location.city +","+data.location.state +","+data.location.country
  console.log(finalName) 
      setPostCode(data.location.postcode)
      setStreetName(data.location.street.name)
      setAge(data.dob.age)
      setFullName(finalName)
      setImg(data.picture.medium)
      setStreetAddress(data.location.street.number)
      // console.log(data.phone)
      setPhone(data.phone)
      setMobile(data.cell)
      setAddress(finalAddress)
      
      
    } catch (error) {
      console.log("something went wrong")
    }
  }

  return (
    <div className="frame-container h-screen w-screen flex">
      <div className="left-div w-1/2 flex flex-col justify-center items-center ">
        <div className="main-container bg-[rgb(248,249,254)] h-4/5 w-5/6 flex flex-col justify-center items-center drop-shadow-xl">
          <div className="mini-container bg-white w-4/6 h-4/6 p-4 relative flex flex-col justify-center items-center gap-10">
            <div className="img-div absolute top-[-20px] left-[50%] transform -translate-x-1/2"><img src={`${img}`} alt="" className=' rounded-full border-4 border-[rgb(15,205,241)]' /></div>
            <div className="email-div flex justify-start mt-3 absolute top-2 left-5"><button className=' bg-[rgb(14,204,239)] px-2 text-white flex gap-2 items-center'><i class="fa-solid fa-envelope"></i>Email</button></div>
            <div className="address-div flex justify-around mt-[120px] gap-10">
              <Address content={streetAddress} title={"Street Address"} />
              <Address content={postCode} title={"Postcode"} />
              <Address content={streetName} title={"Street Name"} />

            </div>
            <div className="name-div flex flex-col items-center">
              <div className="name-1 font-bold">{`${fullName}, `}<span className='text-[rgb(228,230,231)]'>{`${age}`}</span></div>
              <div className="name-2 text-[rgb(156,158,160)] tracking-wider font-bold">{fullAddress}</div>
            </div>
            {/* <hr className='w-full mt-2'/> */}
            <div className="contact-div flex justify-between w-full px-8 py-8 pt-3 border-t-2 border-[rgb(15,205,241)] mt-5">
              <div className="phone-div flex items-center gap-2"><i class="fa-solid fa-phone text-[rgb(15,205,241)]"></i>{phone}</div>
              <div className="mobile-div flex items-center gap-2"><i class="fa-solid fa-mobile text-[rgb(15,205,241)]"></i>{mobile}</div>
            </div>
          </div>{/* mini container */}
          <div className='pt-5'><button className='bg-[rgb(25,43,74)] px-2 text-white py-1' onClick={getUser}>Get New User</button></div>
        </div>
      </div>
      <div className="right-div w-1/2 flex flex-col justify-center items-center gap-5">
      <div className="head-1 w-11/12 bg-[rgb(15,205,241)] p-10 flex justify-center drop-shadow-xl">
        <p className='text-7xl font-extrabold text-white '>RANDOM USER</p>
      </div>
      <div className="head-2 w-11/12 border-8 border-[rgb(15,205,241)] p-10 flex justify-center drop-shadow-xl">
      <p className='text-7xl font-extrabold text-[rgb(15,205,241)]'>API REACT JS</p>
      </div>
      </div>
    </div>
  )
}

export default App

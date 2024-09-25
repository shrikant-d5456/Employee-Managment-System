import { useEffect, useState } from 'react';
import { BsPersonFillLock, BsKeyFill, BsEnvelopeArrowUpFill } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../components/Header';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    

    const navigate = useNavigate();

    const handleOnSubmit = ()=>{
            window.localStorage.setItem("login",true);
            navigate("/home");
    }


    useEffect(()=>{
        let login = window.localStorage.getItem("login");
        if(!login){
            navigate("/");
        }
    });


    return (
        <>
            <Header />
            <div className='flex w-full h-screen text-center'>

                <div className='w-10/12 h-full lg:flex m-auto'>

                    <div className='lg:w-2/3 p-4'>
                        <img src="https://scholarship-management-system-project.vercel.app/assets/bgimg-DPIZVSPf.jpg" className='w-full h-full object-cover p-8' alt="" />
                    </div>

                    <div className='lg:w-1/3  p-4 flex justify-center items-center'>
                        <form className='flex-col w-full' onSubmit={handleOnSubmit}>

                            <p className='text-2xl font-bold text-[#269CFF]'>Log In</p>
                            <InputField name={"Enter your Username"} placeholder={"UserName"} value={username} onChange={() => e.target.value} type="text" icon={<BsPersonFillLock />} />
                            <InputField name={"Enter your Email"} placeholder={"Email"} value={email} onChange type="text" icon={<BsEnvelopeArrowUpFill />} />
                            <InputField name={"Enter Password"} placeholder={"Password"} value={password} onChange type="text" icon={<BsKeyFill />} />

                            

                            <button type='submit' className='btn my-4 font-semibold w-full outline-none text-white py-2 px-4 rounded-full'
                            >Log In
                            </button>

                            <p>Don't have an account ? <Link to="/signup" className='text-blue-500 underline'>SignUp</Link> </p>


                        </form>

                    </div>
                </div>
            </div>
        </>
    )



}

const InputField = ({ name, placeholder, value, onChange, type = "text", icon }) => {
    return (
        <div className='text-start py-2'>

            <p className='py-2'>{name}</p>
            <div className="px-3 py-2 bg-white rounded w-full flex items-center gap-3 border-[0.1px] border-[#0000f]">
                {icon && <span className="text-lg opacity-40 ">{icon}</span>}
                <input
                    type={type} placeholder={placeholder}
                    className="outline-none w-full opacity-95"
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    )
}

export default Login;

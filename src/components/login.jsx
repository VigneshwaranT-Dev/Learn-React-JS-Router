import { useState } from "react"
import { useNavigate } from "react-router-dom";

export function Login() {
    const[loginForm, SetLoginForm] = useState({});
    const navigate = useNavigate();

    function submitLoginForm(e){
        e.preventDefault();
        navigate('/home')
    }

    function onChangeForm(e){
        const event = e?.target
        SetLoginForm((prev) => {
            return({
                ...prev, [event.name]: event.value
            })
        })
    }

    return(
        <>
            <div className="container">
                <h1><strong>Login</strong></h1>
                <form onSubmit={submitLoginForm}>
                    <div className="row mb-3 mt-3">
                        <label className="col-sm-4 col-form-label text-end" htmlFor="userName"><strong>UserName</strong></label>
                        <div className="col-sm-5">
                            <input className="form-control" type="text" name="userName" id="userName" onChange={onChangeForm}/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-4 col-form-label text-end" htmlFor="password"><strong>Password</strong></label>
                        <div className="col-sm-5">
                            <input className="form-control" type="password" name="password" id="password" onChange={onChangeForm}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-5 d-grid gap-2">
                            <button className="btn btn-primary">
                                Login
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
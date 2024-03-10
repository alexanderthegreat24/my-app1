import React,{useState} from 'react';

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


 async function handleSubmit(e){
     e.preventDefault();
     console.log('hi')
    try{
        const response=await fetch('http://localhost:3001/login',{
            method: 'POST',
            body: JSON.stringify({email, password})
        });
        console.log(response);
        if(response.ok){
            alert('Login Success');
        }

    }catch(error){
        console.error(error);
    }
}


    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">Login</button>
        </form>
    )

}
export default Login;
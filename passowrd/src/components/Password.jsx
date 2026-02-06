import React from "react";
import { useState, useEffect,useRef} from "react";
function Password() {
    let [password, setPassword] = useState("Abhay");
    let [length, setLength] = useState(4);
    let [includeNumbers, setIncludeNumbers] = useState(false);
    let [includeSymbols, setIncludeSymbols] = useState(false);

    useEffect(()=>{
        let sol = "";
        let n = length;
        let s1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let s2 = "abcdefghijklmnopqrstuvwxyz";
        let s3 = "0123456789";
        let s4 = "!@#$%^&*()_+";
        let s = s1 + s2;
        if(includeNumbers){
            s += s3;
        }
        if(includeSymbols){
            s += s4;
        }
        for(let i=0;i<n;i++){
            let random = Math.floor(Math.random() * s.length);
            sol += s.charAt(random);
        }
        setPassword(sol);
    },[length,includeNumbers,includeSymbols]);


    let passwordRef = useRef();
    function copyPassword(){
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0,10);
        window.navigator.clipboard.writeText(password);
    }
    return (
        <>
            <h1>Password Generator</h1>
            <div>
                <input type="text" placeholder="Password" value={password} readOnly ref={passwordRef} />
                <button onClick={copyPassword}> Copy </button> 
                <br />
                <p>Length: {length}</p>
                <input type="range" min="4" max="20" value={length} onChange={(e)=>setLength(Number(e.target.value))} /> <br />
                   Number: <input type="checkbox" id="password" value="Number" checked={includeNumbers} onChange={()=>setIncludeNumbers(!includeNumbers)} /> <br />
                   Character: <input type="checkbox" id="password" value="Symbol" checked={includeSymbols} onChange={()=>setIncludeSymbols(!includeSymbols)} />
                       
            </div>
        </>
    )
}
export default Password;
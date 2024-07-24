import {useState,useEffect,useRef} from 'react'
const Otp = () => {
    let otp=0;
    let correct_otp=1234;
    const otp1 = useRef(0)
    const otp2 = useRef(0)
    const otp3 = useRef(0)
    const otp4 = useRef(0)
    const btn = useRef(0)
    const next=(e)=>{
        let id=e.target.getAttribute('id');
        let value=e.target.value;
        if(id.includes('otp1')){
            otp2.current.value=''
            otp2.current.focus();
        }
        else if(id.includes('otp2')){
            otp3.current.value=''
            otp3.current.focus();
        }
        else if(id.includes('otp3')){
            otp4.current.value=''
            otp4.current.focus();
        }
       
    }
    let submit=()=>{
        otp=1000*Number(otp1.current.value)
        +100*Number(otp2.current.value)
        +10*Number(otp3.current.value)
        +1*Number(otp4.current.value)
        console.log(otp)
        if(otp==correct_otp){
            otp1.current.classList.remove('failed-border')
            otp2.current.classList.remove('failed-border')
            otp3.current.classList.remove('failed-border')
            otp4.current.classList.remove('failed-border')
            btn.current.classList.remove('failed')
            otp1.current.classList.add('success-border')
            otp2.current.classList.add('success-border')
            otp3.current.classList.add('success-border')
            otp4.current.classList.add('success-border')
btn.current.classList.add('success')
btn.current.value="Verified"

        }
        else{
            otp1.current.classList.add('failed-border')
            otp2.current.classList.add('failed-border')
            otp3.current.classList.add('failed-border')
            otp4.current.classList.add('failed-border')
            btn.current.classList.add('failed')
            btn.current.value="Verification failed"  
        }
    }
  return (
    <>
    <div className="otp-box">

   
      <h1 className='otphead'>Mobile Phone Verification</h1>
      <h4 className='otpdetails'>Enter the 4-digit verification code that was sent to your phone number.</h4>
      <div className="otp">
      <input type="text"  id="otp1" ref={otp1} maxLength={1} onKeyUp={next}  />
      <input type="text" id="otp2" ref={otp2} maxLength={1} onKeyUp={next}/>
      <input type="text"  id="otp3" ref={otp3} maxLength={1} onKeyUp={next}/>
      <input type="text" id="otp4" ref={otp4} maxLength={1} onKeyUp={next} />
      </div>
    <input type='button' className='otpsubmit' ref={btn} onClick={submit} value={'Verify  Account'}/>
    <h4 className='otpdetails'>    Didn’t receive code? <span className='resend'>Resend</span></h4>
    </div>
    </>
  )
}

export default Otp

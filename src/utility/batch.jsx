import {useMemo,useEffect,useState} from 'react'
import data from '../assets/details.json';
const Batch = () => {
  const [dat, setdat] = useState(data.batch)
  const searchhandle=(e)=>{
let dats=dat.filter((elem)=>{
  return elem.title.toLowerCase().includes(e.target.value.toLowerCase())
})
setdat(dats)
if(!e.target.value.length){
  setdat(data.batch)
}
  }
  return (
    <>
      <div className='bat'>
        <h1 >Batches</h1>
        <h4>Create learner’s batch and share information at the same time.</h4>

        <div className="search">
          <input type="text" placeholder='Search by Title (alt+k or cmd+k)' onKeyUp={searchhandle} /> <button>Search</button>
        </div>
{/* <center> */}
<center><p className='dberror'>{(dat.length==0)?'No found any data':''}</p></center>

        <table className={`batch ${(dat.length==0)?"dn":''}`} >

          <tr >
            <th>Title</th>
            <th>Start Date</th>
            <th id='t2'>End Date</th>
            <th>Price</th>
            <th id='t1'>Validity/Expiry</th>
            <th >Status</th>
          </tr>

{dat.map((elem,index)=>{
return(
  <>
  
  <tr >
  {console.log(dat.length)}
    
          <td><div className='title'><img src={elem.thumb} alt="batch" /> <p>{elem.title}</p></div></td>
            <td>{elem.startdate}</td>
            <td id='t2'>{elem.enddate}</td>
            <td>{elem.Price}</td>
            <td id='t1'>{elem.Validity}</td>
            <td ><div className={`types ${elem.Status.includes('Unpublished') ? 'un':''}`}  >{elem.Status}</div></td>
          </tr>
  </>
)
})}
          
         
        </table>
        {/* </center> */}
        <div className='page'>
        Rows per page 
        <select name="page" id="">
          <option value="1">{(dat.length==0)?0:1}</option>
        </select>
        <div className='options'><img src="Vect.png" alt="btn" /><img src="Vect (1).png" alt="btn" /> </div>
        </div>
      </div>

    </>
  )
}

export default Batch

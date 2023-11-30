import './TicketTemplate.css'

import { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';

const Print = () => {

    const movie = JSON.parse(localStorage.getItem('movie'));
    const email = JSON.parse(localStorage.getItem('email'))

    const componentRef=useRef();
    const [dp,setDp]=useState(true);
    const today = new Date();
    const days=["Sunday",'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    console.log(today)
    const handlePrint= useReactToPrint({
        content: ()=> componentRef.current,
    });

    return (
        <div className='full'>
        {<button className='print-button' onClick={()=>{handlePrint();setDp(false)}}>Download</button>}
        <div className="print-page" >
            <div className="print-container" ref={componentRef}>
                <div className="print-header">
                    <div className="print-logo">
                        <h2>  ChalCinema</h2>
                    </div>
                </div>
    
                <div className="t-details">
                    <div className="td-header">
                        <div className="t-head-logo">
                        <h3>{movie.movieName}</h3>
                        <p>Theatre: {movie.theatreName}</p>
                        </div>
                        <div className="th-bar">
                            {/* <p className='bar'><FontAwesomeIcon icon={faBarcode}/></p> */}
                            <img className='bar' src="https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg" alt="" />
                        </div>
                    </div>
                    <div className="t-d-2">
                        <div className="t-first-part">
                            <div className="t-airline-date">
                            <b>Seats</b>
                            <b> A1,A2</b>
                        </div>
                            <div className="t-second-part">
                                <div className="t-departure">
                                    <b><p className="t-dtime"> Show-Time</p></b>
                                    <p className='t-place'> 9:30 PM </p>
                                </div>
                                <div className="t-arrow">
                                 </div>
                                <div className="t-arrival">
                                   <b> <p className="t-dtime"> Price </p></b>
                                    <p className='t-place'>{movie.charges}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-dets">
                        <div className="p-name">
                            <p className="pp-name"> Name</p>
                            <b><p>Tarun</p></b>
                        </div>

                        <div className="p-age">
                            <p className="pp-age"> Mail</p>
                            <b><p>{email}</p></b>
                        </div>

                    </div>

                </div>



                <div className="footer">
                    <p>Chlcienma</p>
                    <p>© chlacinema Ltd 2023</p>
                </div>

            </div>
        </div>
        </div>
      );
}
 
export default Print;
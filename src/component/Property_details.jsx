import React from 'react'
import "../css/Property_details.css"
import ProgressBar from 'react-bootstrap/ProgressBar';


function Property_details({data}) {
    console.log(((1.00*data.value)/(1.00*data.highest))*100);
    console.log(typeof(1.00*data.value))
    console.log((1.00*data.value),(1.00*data.highest))
  return (
    <div className="property-details-main">
        <div className="left-main">
            <div className="details">
                <h3>
                    <span>Property Overview</span></h3>
                <p>
                    {data.overview}
                </p>
            </div>
            <div className="images-div">
                {
                    data.overview_img.map((image, index) => (
                        <div className="image" key={index}>
                            <img src={image} key={index} className="main-img" />
                        </div>
                    ))
                }
            </div>
            <div className="range">
                <span className="value">{data.value}</span>
                <ProgressBar  variant='info' now={50} min={0} max={100}/>
                <div className="range-value">
                    <div className="low">
                        <p>{data.lowest}</p>
                        <p>Lowest</p>
                    </div>
                    <div className="middle"><h3>Price range in the area</h3></div>  
                    <div className="high">
                        <p>{data.highest}</p>
                        <p>Highest</p>
                    </div>
                </div>


            </div>
            <div className='Nearby'>
                <div className="n-1">
                    <h5>Restaurents</h5>
                    <ul>
                        {
                            data.restaurent.map((ele,index)=>(
                                <li key={index}>
                                    <div><p>{ele.name}</p><span>({ele.distance})</span></div>
                                    {/* <div>
                                        {
                                            for(let i=0;i<ele.star.length;i++){

                                            }
                                        }
                                    </div> */}

                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="n-2"></div>
                <div className="n-3"></div>
            </div>

        </div>
        <div className="right-main"><p>ksjdjshhgjshdkhfjksdhkjshA component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.</p>

        </div>

    </div>
  )
}

export default Property_details
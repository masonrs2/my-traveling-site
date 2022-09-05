import React from  'react' ;

const Item = (props) => {
    return (
        <div>
            <div className="item-card">
                <img className="item-image" src={props.item.imageUrl}></img>
                <div className="item-description" >
                    <img src={"../img/location-pin.png"} className="item-location-pin"></img>
                    <span className="item-location"> {props.item.location} </span>
                    <span> 
                        <a href={props.item.googleMapsUrl} target="_blank" rel="noreferrer" className="item-maps-url"> View on Google Maps</a>
                    </span>
                    <h2 className="item-title"> {props.item.title} </h2>
                    <p className="start-end-date">{props.item.startDate} - {props.item.endDate} </p>
                    <span className="item-description-text"> {props.item.description} </span>
                </div>
            </div>

            <hr />
        </div>
    )
}

export default Item;
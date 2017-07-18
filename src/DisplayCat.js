import React from 'react';

class DisplayCat extends React.Component{
    render(){
        const {cat : {name,image,count},incrementCount} = this.props;
        return(
            < div className="col-xs-4">
            <div className="display-cat__name"> {name} </div>
            <div className="img" onClick={incrementCount}> <img src={image} height="300px" width="100%" /></div>
            <div className ="display-cat__count"> Count : {count} </div>
            < / div >
    );
    }
}

export default DisplayCat;
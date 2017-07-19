import React from 'react';

/*
class DisplayCat extends React.Component{
    render(){
        const {name,image,count} = this.props.cat;
        return(
            < div className="col-xs-4">
            <div className="display-cat__name"> {name} </div>
            <div className="img" onClick={this.props.incrementCount}> <img src={image} height="300px" width="100%" /></div>
            <div className ="display-cat__count"> Count : {count} </div>
            < / div >
    );
    }
}
*/
function DisplayCat(props){
    const {name,image,count} = props.cat;
    return(
        < div className="col-xs-4">
        <div className="display-cat__name"> {name} </div>
        <div className="img" onClick={props.incrementCount}> <img src={image} height="300px" width="100%" /></div>
        <div className ="display-cat__count"> Count : {count} </div>
    < / div >
);
}

export default DisplayCat;
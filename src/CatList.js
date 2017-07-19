import React from 'react';

/*
class CatList extends React.Component{

    changeCurrentCat = e => {
        this.props.changeCurrentCat(e.target.id);
    }

    render(){
        const catList = (this.props.cats).map((cat, index) => {
        return (<li className ="list-group-item" key={index} id={index} onClick={this.changeCurrentCat}> {cat.name} </li>);
            });
        return (
            <ul className="col-xs-4 list-group"> {catList} </ul>
    );
    }
}*/

function CatList(props){
    const changeCurrentCat = e => {
        props.changeCurrentCat(e.target.id);
    }

    const catList = (props.cats).map((cat, index) => {
            return (<li className ="list-group-item" key={index} id={index} onClick={changeCurrentCat}> {cat.name} </li>);
    });

    return (
        <ul className="col-xs-4 list-group"> {catList} </ul>
    );
}

export default CatList;
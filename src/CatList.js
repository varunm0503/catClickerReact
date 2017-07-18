import React from 'react';

class CatList extends React.Component{

    constructor(props){
        super(props);
        this.changeCurrentCat = this.changeCurrentCat.bind(this);
    }

    changeCurrentCat(e){
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
}

export default CatList;
import React from 'react';

class AdminPanel extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            showPanel : false,
            name : props.cat.name,
            count : props.cat.count
        }
        this.toggleState = this.toggleState.bind(this);
        this.changeName = this.changeName.bind(this);
        this.changeCount = this.changeCount.bind(this);
        this.changeCatDetails = this.changeCatDetails.bind(this);
    }

    toggleState(){
        //ask
        this.setState((prevState) => ({showPanel : !prevState.showPanel}));

    }

    changeName(e){
        console.log(e.target);
        this.setState({
            name : e.target.value
        });
    }

    changeCount(e){
        console.log(e.target.value);
        if(e.target.value < 0 || isNaN(e.target.value)){
            this.setState((prevState)=>({
                count:prevState.count
            }));
        } else {
            this.setState({
                count: e.target.value
            });
        }
        console.log(e.target);
    }

    changeCatDetails(){
        this.props.save(this.state.name,this.state.count);
        //callback
    }

    componentWillReceiveProps(newProps){
        this.setState({
            name: newProps.cat.name,
            count: newProps.cat.count
        })
    }

    render(){
        const {toggleState, changeCatDetails, changeName, changeCount, state : {name, count, showPanel}} = this;
        if (showPanel === false){
            return <div className="col-xs-4"><button className="btn btn-primary" onClick = {toggleState}> Show Admin </button></div>
        }
        return (
            <div className="col-xs-4">
            <button className="btn btn-primary" onClick = {toggleState}> Hide Admin </button>
        <div >
            <div> Change Name: <input type="text" value={name} onChange={changeName}/></div>
            <div>  Change Count: <input type="text" value={count} onChange={changeCount}/></div>
            <button className="btn btn-primary" onClick={changeCatDetails}> Save </button>
            </div>
            </div>
    );
    }
}

export default AdminPanel;
import React from 'react';

class AdminPanel extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            showPanel : false,
            name : props.cat.name,
            count : props.cat.count
        }
    }

    toggleState = () => {
        //ask
        this.setState((prevState) => ({showPanel : !prevState.showPanel}));

    }

    changeName = e => {
        //console.log(e.target);
        this.setState({
            name : e.target.value
        });
    }

    changeCount = e => {
        //console.log(e.target.value);
        if(e.target.value < 0 || isNaN(e.target.value)){
            this.setState((prevState)=>({
                count:prevState.count
            }));
        } else {
            this.setState({
                count: e.target.value
            });
        }
        //console.log(e.target);
    }

    changeCatDetails = () => {
        this.props.save(this.state.name,this.state.count);
        //callback
    }

    componentWillReceiveProps(newProps){
        const {name, count} = newProps.cat;
        this.setState({
            name,
            count
        })
    }

    render(){
        const {name, count, showPanel} = this.state;
        if (showPanel === false){
            return <div className="col-xs-4"><button className="btn btn-primary" onClick = {this.toggleState}> Show Admin </button></div>
        }
        return (
            <div className="col-xs-4">
            <button className="btn btn-primary" onClick = {this.toggleState}> Hide Admin </button>
        <div >
            <div> Change Name: <input type="text" value={name} onChange={this.changeName}/></div>
            <div>  Change Count: <input type="text" value={count} onChange={this.changeCount}/></div>
            <button className="btn btn-primary" onClick={this.changeCatDetails}> Save </button>
            </div>
            </div>
    );
    }
}

export default AdminPanel;
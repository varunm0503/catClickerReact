import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap/css/bootstrap-theme.min.css';
import './bootstrap/css/bootstrap.min.css';
//import App from './App';
import CatList from './CatList';
import DisplayCat from './DisplayCat';
import AdminPanel from './AdminPanel';
import registerServiceWorker from './registerServiceWorker';

class CatClickerApp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            cats: [
                {
                    name: "Cat1",
                    image: "https://static.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
                    count: 0
                },
                {
                    name: "Cat2",
                    image: "https://static.pexels.com/photos/126407/pexels-photo-126407.jpeg",
                    count: 0
                },
                {
                    name: "Cat3",
                    image: "https://static.pexels.com/photos/20787/pexels-photo.jpg",
                    count: 0
                }
            ],
            currentCat: 0
        }
        this.changeCurrentCat = this.changeCurrentCat.bind(this);
        this.increment = this.increment.bind(this);
        this.save = this.save.bind(this);
    }

    increment(){
        const {cats: catsArray, currentCat} = this.state;

        (catsArray[currentCat]).count++;
        this.setState({
            cats: catsArray
        });
    }

    changeCurrentCat(i){
        this.setState({
            currentCat: i
        });
    }

    save(name,count){
        const {cats : catsArray, currentCat} = this.state;
        if(count===""){
            count=0;
        }
        (catsArray[currentCat]).count = count;
        (catsArray[currentCat]).name = name;
        this.setState({
            cats: catsArray
        });
    }

    render(){
        const {changeCurrentCat, increment, save, state : {cats, currentCat}} = this;
        return (
            <div className="cat-clicker">
                <div className="cat-clicker__header">Cat Clicker</div>
                <div className="cat-clicker__body">
                <CatList currentCat = {currentCat} cats={cats} changeCurrentCat = {changeCurrentCat} />
                <DisplayCat cat = {cats[currentCat]} incrementCount = {increment}/>
                <AdminPanel cat = {cats[currentCat]} save={save}/>
                </div>
            </div>
        );
    }
}


ReactDOM.render(<CatClickerApp />, document.getElementById('root'));
registerServiceWorker();

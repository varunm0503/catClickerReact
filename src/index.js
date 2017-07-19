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
    }

    increment = () => {
        const {cats, currentCat} = this.state;

        (cats[currentCat]).count++;
            this.setState({
                cats
            });
    }

    changeCurrentCat = currentCat => {
        this.setState({
            currentCat
        });
    }

    save = (name,count) => {
        const {cats, currentCat} = this.state;
        count === "" && (count = 0);
        (cats[currentCat]).count = count;
        (cats[currentCat]).name = name;
        this.setState({
            cats
        });
    }

    render(){
        const {cats, currentCat} = this.state;
        return (
            <div className="cat-clicker">
                <div className="cat-clicker__header">Cat Clicker</div>
                <div className="cat-clicker__body">
                <CatList currentCat = {currentCat} cats={cats} changeCurrentCat = {this.changeCurrentCat} />
                <DisplayCat cat = {cats[currentCat]} incrementCount = {this.increment}/>
                <AdminPanel cat = {cats[currentCat]} save={this.save}/>
                </div>
            </div>
        );
    }
}


ReactDOM.render(<CatClickerApp />, document.getElementById('root'));
registerServiceWorker();

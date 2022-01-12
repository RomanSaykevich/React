import './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";

function App() {
    return (
        <div className={'container'}>
            <div className="users">
                <Users/>
            </div>
            <div className="posts">
                <Posts/>
            </div>
            <div className="comments">
                <Comments/>
            </div>


        </div>
    );
}

export default App;

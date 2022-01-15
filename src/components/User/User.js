import user from './user.css'

const User = ({user, getUser}) => {
    const {id, name} = user;
    return (
        <div className={'user'}>
            <div>{id}) {name}</div>
            <button onClick={()=>getUser(user)}>Details</button>
        </div>

    );
};

export default User;
import React, {useEffect, useState} from 'react';
import User from "./User";

const UsersForTest = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState();

    useEffect(() => {
        setIsLoading(true);
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                setTimeout(() => {
                    setUsers(json);
                    setIsLoading(false);
                }, 2000)
            })
    }, []);

    const onDelete = (id) => setUsers(prev => prev.filter(user => user.id !== id));

    return (
        <div>
            {isLoading && <h1 id="users-loading">Loading...</h1>}
            {users.length &&
                <div id="users-list">{users.map((user, i) => <User onDelete={onDelete} user={user} />)}</div>
            }
        </div>
    );
};

export default UsersForTest;

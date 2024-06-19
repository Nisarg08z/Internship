import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Userc = () => {
    const [users, setUsers] = useState([]);

    const fetchdata = async () => {
        const url = 'https://jsonplaceholder.typicode.com/users';
        const response = await fetch(url);
        let data = await response.json();
        setUsers(data);
    };


    useEffect(() => {
        fetchdata();
    }, []);

    const handleDelete = (id) => {
        setUsers(users.filter((user) => user.id!== id));
    };

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0? (
                        users.map((user) => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>
                                        <button onClick={() => handleDelete(user.id)}>
                                            <FontAwesomeIcon icon={faTrashAlt} />
                                        </button>
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <td colSpan="4">No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
};

export default Userc;
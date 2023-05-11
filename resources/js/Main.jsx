import React, { useState, useEffect } from "react";

const Main = () => {
    const [user, setUser] = useState([]);
    const getUsers = async () => {
        const data = await fetch(
            "https://645d353ee01ac610589fa553.mockapi.io/userDetails",
            {
                method: "GET",
            }
        );
        let response;
        try {
            response = await data.json();
            if (response) {
                setUser(response);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="py-4 text-center">
                            Hello Puneet Sir, Ab to React use kroge na 😎
                        </h1>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>City</th>
                                </tr>
                            </thead>
                            <tbody>
                                {user.map((allUser, indexNo) => {
                                    let { fname, lname, age, city, id } =
                                        allUser;
                                    return (
                                        <tr key={indexNo}>
                                            <td>{id}</td>
                                            <td>
                                                {fname} {lname}
                                            </td>
                                            <td>{age}</td>
                                            <td>{city}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;

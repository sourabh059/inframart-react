
import axios from "axios";
import { useEffect,useState } from "react";
import { apiClient } from '../Api/ApiClient';
export function ChangePassword() {

    const [user, setUser] = useState([]);
    useEffect(() => {
        const getUser = async () => {
            const res = await apiClient.get('/');
            setUser(res.data);
        };

        getUser();
    }, []);


    return (
        <>
            <div>
                <table id="tbl">
                    <tr>
                        <th>UserId</th>
                        <th>firstName</th>
                        <th>Email</th>
                    </tr>
                    {user.map(use => {
                        return (
                            <>
                                <tr>
                                    <td>{use.userId}</td>
                                    <td>{use.firstName}</td>

                                    <td>{use.email}</td>
                                </tr>
                            </>
                        )

                    })}
                </table>
            </div>
        </>
    )
}
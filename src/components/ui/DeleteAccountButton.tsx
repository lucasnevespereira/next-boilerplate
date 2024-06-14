"use client"

import React, {useState} from "react";
import axios from "axios";

type DeleteUserButtonProps = {
    userId: string;
};

const DeleteAccountButton: React.FC<DeleteUserButtonProps> = ({userId}) => {
    const [isLoading, setIsLoading] = useState(false);
    const deleteAccount = async () => {
        setIsLoading(true);
        try {
            const {data} = await axios.delete(`/api/user/${userId}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const {code, message} = data;
            if (code === 'OK') {
                console.log(message);
                window.location.href = "/api/auth/logout";
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <button className="btn btn-error btn-outline" onClick={deleteAccount}>Delete Account</button>
            {isLoading && <p>Deleting account...</p>}
        </div>
    )
}

export default DeleteAccountButton;
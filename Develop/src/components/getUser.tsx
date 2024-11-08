import { searchGithub, searchGithubUser } from '../api/API';
import { useState } from 'react';
import Candidate from '../interfaces/Candidate.interface';

export default function GetUsers() {
    const [user, setUser] = useState<Candidate>({
        img: '',
        login: '',
        location: '',
        company: '',
        bio: '',
    })

    return (
        <>
        </>
    )
}
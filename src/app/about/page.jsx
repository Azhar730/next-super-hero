import React from 'react';

const getTime = async () => {
    const res = await fetch("http://localhost:3000/time", { cache: 'no-store' }) //{next : {revalidate : 5 }}
    const data = await res.json()
    return data.currentTime
}

const About = async () => {
    const time = await getTime()

    return (
        <div>
            About Page {time}
        </div>
    );
};

export default About;
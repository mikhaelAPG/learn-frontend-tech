import BlogList from "./BlogList";
import useFetch from "./useFetch";
// import { useState, useEffect } from "react";

const Home = () => {
    
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    
    return ( 
        <div className="home"> 
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs!"></BlogList>}
        </div>
    );
}

export default Home;

// {/* {blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}></BlogList>} */}
// {/* <button onClick={() => setName('luigi')}>Change Name</button> */}
// {/* <p>{ name }</p> */}

// const [name, setName] = useState('mario');

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    // let name = 'mario';
    // const [name, setName] = useState('mario');
    // const [age, setAge] = useState(25);

    // const handleClick = (e) => {
        // setName('luigi');
        // setAge(30);
        // name = 'luigi'; 
        // console.log('hello, bro', e);
    // }

    // const handleClickAgain = (name, e) => {
    //     console.log('hello ' + name, e.target);
    // }

    // <h2>Homepage</h2> */}
    // <p>{ name } is { age } years old</p>
    // <button onClick={handleClick}>Click me</button>
    // <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button>
    // <BlogList blogs={blogs} title="All Blogs!"/>
    // <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs!"/>
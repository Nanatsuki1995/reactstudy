import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

//list key的指定
function ListItems(props) {
    return <li>{props.value}</li>
}

function NumberList(props) {
    const numbers = props.numbers
    const listItems = numbers.map((number) =>
        <ListItems key={number.toString()} value={number} />
    )

    return (
        <ul>{listItems}</ul>
    )
}

const numbers = [1, 2, 3, 4, 5]

//key只是在兄弟之间必须唯一
function Blog(props) {
    const sidebar = (
        <ul>
            {props.posts.map((post) =>
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    )

    const content = props.posts.map((post) =>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    )

    return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    )
}

const posts = [
    { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
    { id: 2, title: 'Installation', content: 'You can install React from npm.' }
]

ReactDOM.render(
    // <NumberList numbers={numbers} />,
    <Blog posts={posts} />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

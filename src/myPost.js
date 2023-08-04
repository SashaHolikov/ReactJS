import './style/myPost.css'
import kenPost from './img/kenPost.jpg'
import avatar from './img/kenAvatar.png'
import { BiLike } from 'react-icons/bi';
import { BiComment } from "react-icons/bi";
import { BiRepost } from "react-icons/bi";
import {BiDownload} from 'react-icons/bi';
function MyPost(props) {
    console.log(props)
    return (
        <div className="container">
            <header className="header">
                <img src={avatar} alt='avatar' className='avatar'></img>
                <div className='headerInfo'>
                    <span className='name'>{props.name}</span><span className='nickName'>{props.nickname}</span><span className='data'>{props.date}</span>
                </div>
                
            </header>
            <div className="main">
                <div className='mainText'>
                    {props.text}
                </div>
                <div className='content'>
                    <img src={kenPost} alt='content' className='post'/>
                </div>
            </div>
            <footer className="footer">
                <div className='comment'><BiComment className='icon' />{props.comments}</div>
                <div className='repost'><BiRepost className='icon'/>{props.repost}</div>
                <div className='like'><BiLike className='icon'/>{props.like}</div>
                <div className='download'><BiDownload className='icon'/>{props.comments}</div>

            </footer>
        </div>
            
    );
}

export default MyPost;
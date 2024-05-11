import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa6";


const Blog = ({blog,handleAddBookmark,handleMarkRead}) => {

    const {id,title,cover,author,author_img,posted_date,reading_time,hashtags}=blog;
   
    return (
        <div className='mx-6 mb-12 mt-8 space-y-6 border-b-2 pb-12'>
            <img className='w-full mb-8 rounded-sm' src={cover} alt="cover img" />
            <div className='flex justify-between    '>
                <div className='flex items-center mb-4'>
                    <img className='w-16' src={author_img} alt="" />
                    <div className='ml-4'>
                        <h3 className='font-bold text-xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>

                </div>
                <div >
                    <span>{reading_time} min read</span>
                    <button className='ml-3 text-md ' onClick={()=>handleAddBookmark(blog)} ><FaRegBookmark /></button>
                </div>
            </div>
            
            <h2 className='font-bold text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hashtag,index)=><span 
                    key={index}>
                        <a href="">  #{hashtag}</a>
                        </span>)
                }
            </p>
            <button
            onClick={()=>handleMarkRead(id,reading_time)}
             className='text-purple-800 underline font-bold '>Mark as read</button>

        </div>
    );
};
Blog.propTypes ={

    blog: PropTypes.object.isRequired,
    handleAddBookmark: PropTypes.func.isRequired,
    handleMarkRead: PropTypes.func.isRequired
    
}
export default Blog;
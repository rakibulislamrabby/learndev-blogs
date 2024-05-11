import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        
        <div className="md:w-1/3  rounded-lg  mt-10">
            <div className='bg-slate-100 mb-4 rounded-lg'>
                <h3 className='text-2xl text-purple-800 font-bold p-6'>Spent Time on read: {readingTime} min</h3>
            </div>
            <div className='bg-slate-100 pb-8 rounded-lg'>
                <h2 className='text-2xl mt-2 ml-4 p-6 mb-4 font-bold '> Bookmarked Blogs : {bookmarks.length}</h2>
            
             {
                bookmarks.map((bookmark,idx)=><Bookmark 
                key={idx} 
                bookmark={bookmark}
                ></Bookmark>)
            }
            </div>
            
        </div>
    );
};

Bookmarks.propTypes={
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number
}

export default Bookmarks;
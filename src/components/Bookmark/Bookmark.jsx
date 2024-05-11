import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} =bookmark;
    return (
        <div className='bg-white bg-slate-100 rounded-xl p-4 m-4 '>
           <h2 className='text-2xl'> {title}</h2>
            
        </div>
    );
};

Bookmark.propTypes={
    bookmark:PropTypes.object.isRequired
}

export default Bookmark;
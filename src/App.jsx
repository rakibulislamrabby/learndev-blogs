import { useState } from 'react'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime]=useState(0)

  const handleAddBookmark = (blog) => {
    const newBookMarks=[...bookmarks,blog];
    setBookmarks(newBookMarks);
  }
  const handleMarkRead = (id,time) => {
    setReadingTime(readingTime+time);
    const remainingBookmarks=bookmarks.filter(bookmark=>bookmark.id !=id);
    setBookmarks(remainingBookmarks);
    
  }

  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>

      <div className='md:flex '>
        <Blogs handleAddBookmark={handleAddBookmark} handleMarkRead={handleMarkRead}></Blogs>
        <Bookmarks 
        bookmarks={bookmarks}
        readingTime={readingTime}
        ></Bookmarks>
        
      </div>
    </div>
  )
}

export default App

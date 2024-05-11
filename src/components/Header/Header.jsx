import profilePic from '../../assets/images/profile.png'

const Header = () => {
    return (
      <div className='flex justify-between items-center p-4 mx-10 border-b-2    '>
        <h1 className='text-4xl font-bold' >Learn Dev</h1>
        <img src={profilePic} alt="profilePic" />
      </div>
    );
};

export default Header;
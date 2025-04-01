import { FaWhatsapp } from "react-icons/fa";
import './App.css';

function App() {
  return(
    <>
      <div className='app-page-sm'>
          <div className='bg-board-sm'>
              <p className='top-heading-sm'>Create your <span className='span-text'>Digital classroom </span>in 5 mins for <span className='span-text'>FREE</span> & connect to 1+ Million Students.</p>
              <iframe className='youtube-vid-sm' height="315" src="https://www.youtube.com/embed/jg5d59ligW4?si=iQvab2yZipUGIp4T" title="Mobishaala Digital Classroom" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <div className='button-container-sm'>
                <button className='button-sm buy-btn'>Buy</button>
              </div>
              <p className='description-sm'>Institute/Teacher</p>
              <div className='button-container-sm'>
                <button className='button-sm'>Get Started</button>
              </div>
              <p className='description-sm'>Student</p>
              <div className='button-container-sm'>
                <button className='button-sm'>Download App</button>
              </div>
              <div className='button-container-sm'>
                <button className='button-sm whatsapp-btn-sm'><FaWhatsapp className="logo" /> Talk to Us</button>
              </div>
          </div>
          <div className='bg-red-sm'>
              <h1 className="mobishaala-heading-sm">Mobishaala</h1>
              <div className="bg-red-items-sm">
                  <p className="desc-heading-sm">Vision</p>
                  <p className="red-description-sm">Empower Institutions & Teachers with state of the art digital classroom Technology.</p>
              </div>
              <div className="bg-red-items-sm">
                  <p className="desc-heading-sm">Address</p>
                  <p className="red-description-sm"><strong>Registered Office:</strong> 804, 5th Cross, 9th main, 4th Block Koramangala, Bangalore, Karnataka 560034</p>
                  <p className="red-description-sm"><strong>Corporate Office:</strong> 293, Westend Marg, near Saket, Saidulajab, Saket, New Delhi, 110030</p>
              </div>
              <div className="bg-red-items-sm">
                  <p className="desc-heading-sm">Quick Links</p>
                  <ul className="list-container-sm">
                    <li className="list-item-sm">Blog</li>
                    <li className="list-item-sm">Android App</li>
                    <li className="list-item-sm">IOS App</li>
                  </ul>
              </div>
          </div>
      </div>
      <div className="app-page-lg">
          <div className="app-description-side-lg">
              <h1 className="mobishaala-heading-lg">Mobishaala</h1>
              <p className="top-heading-lg">Create your <span className='span-text'>Digital classroom </span>in 5 mins for <span className='span-text'>FREE</span> & connect to 1+ Million Students.</p>
            <ul className="list-container-lg">
              <li className="list-item-lg">No technical knowledge required.</li>
              <li className="list-item-lg">Quickly setup live class, tests,notes, ebooks and more. </li>
              <li className="list-item-lg">Reach out to millions of students anywhere, anytime. </li>
            </ul>
            <p className="description-lg">Institute/Teacher</p>
            <button className="button-lg">Get Started</button>
            <p className="description-lg">Student</p>
            <button className="button-lg">Download App</button>
            <button className='button-lg whatsapp-btn-lg'><FaWhatsapp className="logo" /> Talk to Us</button>
          </div>
          <div className="app-utube-video-side-lg">
            <iframe className='youtube-vid-lg' width="560" height="315" src="https://www.youtube.com/embed/jg5d59ligW4?si=iQvab2yZipUGIp4T" title="Mobishaala Digital Classroom" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <button className="button-lg">Buy</button>
          </div>
      </div>
    </>
  )
}

export default App;

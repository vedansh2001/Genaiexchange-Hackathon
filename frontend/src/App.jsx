import './App.css'

function App() {
  return (
    <>
      <div className='bg-[#212321] h-screen'>
        <div className='bg-[#40534C] h-[80px] flex justify-end pr-[24px] pt-[18px]'>
          <a href="https://extractor-mfys.onrender.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://freesvg.org/img/abstract-user-flat-4.png" alt="Clickable Image" className='w-[50px] h-[50px]' />
          </a>
        </div>

        {/* Fixed image at bottom left */}
        <a href="#" target="_blank" className="fixed bottom-6 right-6 z-50" rel="noopener noreferrer">
          <img src="https://imgs.search.brave.com/4mXW4wvFtVzf4gIyOTbGb5BejaFHPR9-xOAisPrCqfA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzg1Lzc2LzAz/LzM2MF9GXzI4NTc2/MDM3NV84V1p6NFgy/SnY1NEdtSDdtZkJm/dENkbEhTUDg2SlRp/SC5qcGc" 
          alt="Clickable Image" className='w-[50px] h-[50px] rounded-3xl' />
        </a>
      </div>
    </>
  )
}

export default App

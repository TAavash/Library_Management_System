import React from 'react'
import Navbar from "./comp/Navbar";
import Sidebar from "./comp/Sidebar";

const Discover = () => {
  return (
    <div>
        <div className="bg-[#828282] min-h-screen min-w-screen flex">
          <Sidebar />
          <div className="flex-grow">
            <div className="flex flex-col gap-[20px]">
              <Navbar />
              <div className='bg-[#828282] h-[625px] overflow-y-auto rounded-2xl flex flex-col gap-[20px]'>
                <div className='p-[20px] bg-white rounded-2xl'>
                  <div>
                    Popular
                  </div>
                  <div className=' flex justify-between'>
                    <div className='w-[200px] border border-slate-200 p-[10px]'>
                      <img src='/bookCover.jpg' alt="cover"  className='w-[100%]'/>
                      <div>
                        <div>Eleven Minutes</div>
                        <div>Bijen Sir</div>
                      </div>
                    </div>
                    <div className='w-[200px] border border-slate-200 p-[10px]'>
                    <img src='/bookCover.jpg' alt="cover"  className='w-[100%]'/>
                      <div>
                        <div>Eleven Minutes</div>
                        <div>Bijen Sir</div>
                      </div>
                    </div>
                    <div className='w-[200px] border border-slate-200 p-[10px]'>
                    <img src='/bookCover.jpg' alt="cover"  className='w-[100%]'/>
                      <div>
                        <div>Eleven Minutes</div>
                        <div>Bijen Sir</div>
                      </div>
                    </div>
                    <div className='w-[200px] border border-slate-200 p-[10px]'>
                    <img src='/bookCover.jpg' alt="cover"  className='w-[100%]'/>
                      <div>
                        <div>Eleven Minutes</div>
                        <div>Bijen Sir</div>
                      </div>
                    </div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <div className='p-[20px] bg-white rounded-2xl'>
                  <div>
                    Popular
                  </div>
                  <div className=' flex justify-between '>
                    <div className='w-[200px] border border-slate-200 p-[10px]'>
                      <img src='/bookCover.jpg' alt="cover"  className='w-[100%]'/>
                      <div>
                        <div>Eleven Minutes</div>
                        <div>Bijen Sir</div>
                      </div>
                    </div>
                    <div className='w-[200px] border border-slate-200 p-[10px]'>
                    <img src='/bookCover.jpg' alt="cover"  className='w-[100%]'/>
                      <div>
                        <div>Eleven Minutes</div>
                        <div>Bijen Sir</div>
                      </div>
                    </div>
                    <div className='w-[200px] border border-slate-200 p-[10px]'>
                    <img src='/bookCover.jpg' alt="cover"  className='w-[100%]'/>
                      <div>
                        <div>Eleven Minutes</div>
                        <div>Bijen Sir</div>
                      </div>
                    </div>
                    <div className='w-[200px] border border-slate-200 p-[10px]'>
                    <img src='/bookCover.jpg' alt="cover"  className='w-[100%]'/>
                      <div>
                        <div>Eleven Minutes</div>
                        <div>Bijen Sir</div>
                      </div>
                    </div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <div className='p-[20px] bg-white rounded-2xl'>
                  <div>
                    Popular
                  </div>
                  <div className=' flex justify-between'>
                    <div className='w-[200px] border border-slate-200 p-[10px]'>
                      <img src='/bookCover.jpg' alt="cover"  className='w-[100%]'/>
                      <div>
                        <div>Eleven Minutes</div>
                        <div>Bijen Sir</div>
                      </div>
                    </div>
                    <div className='w-[200px] border border-slate-200 p-[10px]'>
                    <img src='/bookCover.jpg' alt="cover"  className='w-[100%]'/>
                      <div>
                        <div>Eleven Minutes</div>
                        <div>Bijen Sir</div>
                      </div>
                    </div>
                    <div className='w-[200px] border border-slate-200 p-[10px]'>
                    <img src='/bookCover.jpg' alt="cover"  className='w-[100%]'/>
                      <div>
                        <div>Eleven Minutes</div>
                        <div>Bijen Sir</div>
                      </div>
                    </div>
                    <div className='w-[200px] border border-slate-200 p-[10px]'>
                    <img src='/bookCover.jpg' alt="cover"  className='w-[100%]'/>
                      <div>
                        <div>Eleven Minutes</div>
                        <div>Bijen Sir</div>
                      </div>
                    </div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Sidebar />
        </div>
    </div>
  )
}

export default Discover

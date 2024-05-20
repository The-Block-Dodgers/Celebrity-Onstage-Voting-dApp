import React from 'react';

// This page only exists to showcase the Navbar

class AboutPage extends React.Component {
  render() {
    return (
        <div>
             <div className='h-56 pt-10 grid grid-cols-3 gap-4 content-center'>
                 <div>
                    <h1></h1>
                </div>
                <div>
                    <h1 className='text-4xl'>This is a heading 2</h1>
                </div>
            </div>

            <div className='h-56 size-px grid grid-cols-3 gap-2 content-start'>
                <div>

                </div>
                <p className='text-xl'>This is a paragraph</p>
            </div>
        </div>


    );
  }
}

export default AboutPage;

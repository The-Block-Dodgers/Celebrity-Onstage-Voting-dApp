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
                    <h1 className='text-4xl'>About PROJECT</h1>
                </div>
            </div>

            <div className='h-56 size-px grid grid-cols-3 gap-2 content-start'>
                <div>

                </div>
                <p className='text-xl'>This is a simple BlockChain based project for voting. Smart contract is written in RUST language and uses CASPER blockchain. Usser interface is developed in REACT and TAILWIND.</p>
            </div>
        </div>


    );
  }
}

export default AboutPage;

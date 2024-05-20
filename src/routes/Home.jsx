import { useWallet } from '../service/CasperWallet';
import { Link } from 'react-router-dom';

export default function VotingPage() {
  const { activePublicKey, isLocked, fnConnect } = useWallet();
  
  return (
    <div>
      <div style={{
          backgroundImage: `url(https://s7d2.scene7.com/is/image/TWCNews/emmys-virtual-7-22-20jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
          }}>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            
            <div className="text-center">
            <h1 style={{ fontFamily: 'PT Sans, sans-serif', color: '#FFFFFF' }} className="text-4xl font-bold tracking-tight text-yellow-200 sm:text-6xl pb-5">

                The BLOCK-DOGERS<br/>Network
              </h1>

              <div className="mb-8 whitespace-normal break-all">
                  <div style={{ fontFamily: 'PT Sans, sans-serif', backgroundColor: 'silver', color: 'black', border: '2px solid blue' }} className="relative rounded-full px-3 py-1 text-sm sm:text-base lg:text-lg leading-6 text-pink-600 ring-1 ring-white-900/10 hover:ring-white">

                    Account: {activePublicKey === undefined ? "Not connected!" : activePublicKey}
                  </div>
              </div>

              <div className="mt-6 text-lg leading-8 text-gray-600">
                {isLocked && (<button onClick={fnConnect} className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-red-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Unlock</button>)}
                <br />
              </div>

              <div className="mt-10 items-center justify-center gap-x-6">
              {isLocked === false && activePublicKey === undefined ? (
                <button
                  onClick={fnConnect}
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Connect Wallet
                </button>
              ): (<div></div>)}
               <div className="mt-6 text-lg leading-8 text-gray-600">
                  {isLocked === false && (
                    <Link to="./VotingPage" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-red-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                            Click here To Vote
                    </Link>
                  )}
                  <br />
                </div>
                <a href="https://github.com/sauravkumartopo" className="text-sm font-semibold leading-6 text-white">
                  Explore Github <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="relative bg-gray-800 px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://e1.pxfuel.com/desktop-wallpaper/23/263/desktop-wallpaper-minimalist-digital-art-simple-sunset-digital.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>

        <div aria-hidden="true" className="absolute inset-0 bg-gray-900 bg-opacity-50" />
          <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl pb-10">Blockchain Voting</h2>

            <div className="flex justify-center space-x-10">
              <button
                onClick={() => {vote(activePublicKey, provider, "choice_A")}}
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Choice "A"
              </button>
              <button
                onClick={() => vote(activePublicKey, provider, "choice_B")}
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Choice "B"
              </button>
              <button
                onClick={() => getVotes(setVotesA, setVotesB)}
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Update
              </button>
            </div>
            <div className='pt-10'>
              <div className="bg-white rounded shadow p-4 w-80">
                {options.map((option) => (
                  <div key={option.id} className="mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-lg">{option.text}</span>
                      <span className="text-gray-500 text-sm">
                        {((option.votes / totalVotes) * 100).toFixed(2)}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${(option.votes / totalVotes) * 100}%` }}
                      />
                    </div>
                    <div className="text-gray-500 text-xs mt-1">
                      {option.votes} vote{option.votes !== 1 ? 's' : ''}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> */}
      </div> 
)}

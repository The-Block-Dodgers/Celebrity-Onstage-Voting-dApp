import { useEffect, useState } from 'react';
import { useWallet } from '../service/CasperWallet';
import { vote, getVotes } from '../service/controller';

export default function VotingPage() {
  const {  provider, activePublicKey } = useWallet();
  const [ votesA, setVotesA] = useState(0);
  const [ votesB, setVotesB] = useState(0);
  const options = [
    {id: 1, text: "Shahrukh Khan", votes : parseInt(votesA, 16)},
    {id: 2, text: "Amitabh Bachchan", votes: parseInt(votesB, 16)}
  ];
  const totalVotes = parseInt(votesA, 16) + parseInt(votesB, 16);
  useEffect(() => {
    getVotes(setVotesA, setVotesB);
  }, [])
  return (
        <div className="relative bg-gray px-6 py-16 sm:px-20 sm:py-30 lg:px-16">
          <div className="absolute inset-0 overflow-hidden bg-opacity-50">
            <img
              src="https://t4.ftcdn.net/jpg/06/31/27/93/360_F_631279307_zm3rUBFO2BUNYsPYHdeyxcoveER2Zeo8.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>

        <div aria-hidden="true" className="absolute inset-0 bg-gray bg-opacity-50" />
          <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl pb-10">Casper Voting </h2>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl pb-10">Vote for your favourite Actor</h2>

            <div className="container mx-auto">
            <div className="flex justify-center space-x-20">
              <img 
                src='https://www.livemint.com/lm-img/img/2023/11/02/1600x900/TOPSHOT---Bollywood-actor-Shah-Rukh-Khan-greets-fa_1698890202689_1698890213014.jpg'  
                alt='Shahrukh Khan'
                className="w-80 h-150"
              />
              <img 
                src='https://m.media-amazon.com/images/M/MV5BZDE4ZGM2YzEtZDYwNC00OGZhLTk3ZjItN2JiNmFjMzhhNTA0XkEyXkFqcGdeQXVyNjkwOTg4MTA@._V1_.jpg'
                alt='Amitabh Bachchan'
                className="w-80 h-150 ml-10"
              />
            </div>
          </div>
         

            <div>
              <button
                onClick={() => {vote(activePublicKey, provider, "choice_A")}}
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white mx-20 mt-4"
              >
                ShahRukh Khan
              </button>
              <button
                onClick={() => vote(activePublicKey, provider, "choice_B")}
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white mx-20 mt-4"
              >
                Amitabh Bachchan
              </button>
              
            </div>
           <br/>
            <div className="flex justify-center space-x-10 w-5">
            <button
                onClick={() => getVotes(setVotesA, setVotesB)}
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white mt-10"
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
        </div>
)}
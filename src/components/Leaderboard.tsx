import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../index';
import { FaCrown } from 'react-icons/fa';
import './Leaderboard.css';
import { BiSolidTimer } from "react-icons/bi";
import { GiTrophyCup } from "react-icons/gi";
import Heading from './Heading';
import { IoAddCircle } from "react-icons/io5";
import PopupForm from './PopupForm';

interface Score {
  username: string;
  time: string;
}

const getPrize = (rank: number) => {
  switch (rank) {
    case 1:
      return '₹50000';
    case 2:
      return '₹5000';
    case 3:
      return '₹500';
    default:
      return '';
  }
};

const Leaderboard: React.FC = () => {
  const scores = useSelector((state: RootState) => state.scores.scores);
  const recentEntry = useSelector((state: RootState) => state.scores.recentEntry);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const recentEntryIndex = scores.findIndex(score => score.username === recentEntry?.username && score.time === recentEntry?.time);
  const recentEntryPrize = getPrize(recentEntryIndex + 1);


  const handleAddButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="leaderboard">

        <div> <Heading /></div>

        {
          scores.length === 0 ? (
            <div className='no-entry-container'>
                <p className='no-entry'>No entry till now</p>
                <button className='add-btn' onClick={handleAddButtonClick}>
                  <IoAddCircle fontSize={25} />
                  Add
                </button>
              </div> 

          ) : (<table>
            <thead>
              <tr>
                <th className='fields'>
                  <div className='time-div'>
                    <GiTrophyCup className='fields' fontSize={30} />
                    <p>Rank</p>
                  </div>
                </th>
                <th className='fields'>Name</th>
                <th className='fields'>Prize</th>
                <th className='fields'>
                  <div className='time-div'>
                    <BiSolidTimer className='fields' fontSize={40} />
                    <p>Time</p>
                  </div>
                </th>
              </tr>
            </thead>

            <tbody>

              {scores.slice(0, 10).map((score: Score, index: number) => (
                <tr key={index} className={`${index < 3 ? `top-${index + 1} ` : 'rest-row'} `}>
                  <td  ><span className='serialNo'>{index + 1}</span></td>
                  <td>
                    {index < 3 && <FaCrown />} {score.username}
                  </td>
                  <td>{getPrize(index + 1)}</td>
                  <td className='row-entry'>{score.time}</td>
                </tr>
              ))
              }


            </tbody>
          </table>)
        }


       {
        scores.length ? (<div className='popup'>
          <button className='add-btn middle-add-btn' onClick={handleAddButtonClick}>
            <IoAddCircle fontSize={25} />
            Add
          </button>
        </div> ) : ""
       }
        

        {recentEntry && (
          <div className="recent-entry">
            <h2 className='recent-entry-heading'>Recent Entry</h2>
            <div className="recent-entry-details">
              <span className='recent-row-index'>{recentEntryIndex + 1}</span>
              <span>{recentEntry.username}</span>
              <span>{recentEntryPrize}</span>
              <span>{recentEntry.time}</span>
            </div>
          </div>
        )}


      </div>
      {isModalOpen && <PopupForm onClose={handleModalClose} />}

    </div>

  );
};

export default Leaderboard;



// import React from 'react';
// import { useSelector } from 'react-redux';
// import { RootState } from '../index';
// import { FaCrown } from 'react-icons/fa';

// const Leaderboard: React.FC = () => {
//   const scores = useSelector((state: RootState) => state.scores.scores);

//   return (
//     <div className="leaderboard">
//       <h1>Leaderboard</h1>
//       <ul>
//         {scores.slice(0, 10).map((score: { username: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; time: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
//           <li key={index}>
//             <FaCrown />
//             {score.username}: {score.time}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Leaderboard;

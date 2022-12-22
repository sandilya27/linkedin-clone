import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newArticle=(heading,subtitle)=>(
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

  return (
    <div className='widgets'>
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon/>
        </div>

        {newArticle("LinkedIn Clone Live","Top News - 9999 readers")}
        {newArticle("Crypto badboy SBF agress too U.S. extradition","Top News - 9909 readers")}
        {newArticle("Toys aren't just kid stuff anymore","Top News - 9800 readers")}
        {newArticle("Goldman eyes big layoff","Top News - 9759 readers")}
        {newArticle("Starbucks baristas of the US unite","Top News - 9669 readers")}
        {newArticle("Retailers have an inventory crisis","Top News - 9500 readers")}
    </div>
  )
}

export default Widgets
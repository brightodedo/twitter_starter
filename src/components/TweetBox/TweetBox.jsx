import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox(props) {
  const handleOnTweetTextChange = (event) => {
    let text = event.target.value;
    props.setTweetText(text);
      {text.length == 0 || text.length > 140 ? setDisabled('disable') : setDisabled('')}
  }
  const [disable, setDisabled] = React.useState('disabled')
  const handleOnSubmit = () => {
    let newTweet = [...props.tweets, {
      "id" : props.tweets.length,
      "name":props.userProfile.name,
      "handle": props.userProfile.handle,
      "text" : props.tweetText.trim(),
      "comments" : 0,
      "retweets" : 0,
      "likes" : 0
    }]
    props.setTweets(newTweet)
    props.setTweetText("")
    setDisabled('disable')
  }
  const [focusing, setFocusing] = React.useState('')
  const handleOnFocusTextInput = (event) => {
    setFocusing('expanded')
    setSmile('fa-smile')
  }
  const handleOnBlurTextInput = (event) => {
    if(event.target.value.length == 0) {
      setFocusing('')
      setSmile('fa-image')
    }
  }
  const[smile, setSmile] = React.useState('fa-image')
  return (
    <div className="tweet-box">
      <TweetInput value={props.tweetText} handleOnChange={handleOnTweetTextChange} handleOnFocus={handleOnFocusTextInput} focusing={focusing} handleOnBlur={handleOnBlurTextInput}/>

      <div className="tweet-box-footer">
        <TweetBoxIcons  smile={smile}/>
        <TweetCharacterCount tweetText={props.tweetText}/>
        <TweetSubmitButton handleOnSubmit={handleOnSubmit} disable={disable}/>
      </div>
    </div>
  )
}

export function TweetBoxIcons(smile) {
  return (
    <div className="tweet-box-icons">
      <i className={"fas " + smile.smile}></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {
  // ADD CODE HERE
  let textCount = props.tweetText.length
  let characterLeft = textCount == 0 ? '' 
              : textCount <  141 ? `${140 - textCount}`
              : '-1'
  let exceedLimit = textCount > 140 ? "red": ''
  return <span className={exceedLimit}>{characterLeft}</span>
}

export function TweetSubmitButton({handleOnSubmit, disable}) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" onClick={handleOnSubmit} disabled={disable}>Tweet</button>
    </div>
  )
}

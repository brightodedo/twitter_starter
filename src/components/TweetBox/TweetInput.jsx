import * as React from "react"
import AvatarIcon from "../AvatarIcon/AvatarIcon"

export default function TweetInput(props) {
  return (
    <div className="tweet-textarea">
      <AvatarIcon />

      <textarea className={props.focusing} name="new-tweet-input" type="text" placeholder="What's Happening?" value={props.value} onChange={props.handleOnChange} onFocus={props.handleOnFocus} onBlur={props.handleOnBlur}></textarea>

      <SmileIcon />
    </div>  
  )
}

export const SmileIcon = () => <i className="fas fa-smile"></i>
export const ImageIcon = () => <i className="fas fa-image"></i>

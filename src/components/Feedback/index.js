// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    isFeedback: false,
  }

  onClickEmoji = () => {
    this.setState({isFeedback: true})
  }

  renderFeedbackScreen = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="card-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emoji-list">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button
                type="button"
                className="button"
                onClick={this.onClickEmoji}
              >
                <img src={emoji.imageUrl} alt={emoji.name} className="emoji" />
                <br />
                <span className="emoji-name">{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankYouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thank-you-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="text">Thank You!</h1>
        <p className="des">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedback} = this.state

    return (
      <div className="bg-container">
        <div className="feedback-container">
          {isFeedback
            ? this.renderThankYouScreen()
            : this.renderFeedbackScreen()}
        </div>
      </div>
    )
  }
}

export default Feedback

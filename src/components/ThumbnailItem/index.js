import './index.css'
import {Component} from 'react'

class ThumbnailItem extends Component {
  changedState = () => {
    const {onStateChange, id} = this.props
    onStateChange(id)
  }

  render() {
    const {item, clicked} = this.props

    const apply = clicked === true ? null : 'apply'
    return (
      <li>
        <button type="button">
          <img
            src={item.thumbnailUrl}
            alt={item.thumbnailAltText}
            className={`image ${apply}`}
            onClick={this.changedState}
            onChange={this.stateChanged}
          />
        </button>
      </li>
    )
  }
}

export default ThumbnailItem

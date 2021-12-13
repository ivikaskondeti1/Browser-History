import {Component} from 'react'
import './HistoryList.css'

class HistoryList extends Component {
  render() {
    const {listItem, deletelist} = this.props
    const {timeAccessed, logoUrl, title, domainUrl, id} = listItem
    const deleteFunction = () => {
      deletelist(id)
    }

    return (
      <li className="ListCard">
        <div className="names">
          <p className="Paragraph">{timeAccessed}</p>
          <img src={logoUrl} alt="domain logo" className="domainLogo" />
          <p className="domainName">{title}</p>
          <p className="domineURL">{domainUrl}</p>
        </div>
        <button testid="delete" type="submit">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            onClick={deleteFunction}
          />
        </button>
      </li>
    )
  }
}
export default HistoryList

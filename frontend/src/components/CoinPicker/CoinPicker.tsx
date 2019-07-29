import React from 'react'
import './CoinPicker.css'
import TTDaiImg from '../../assets/tt-dai.png'
import TTUsdtImg from '../../assets/tt-usdt.png'
import TTImg from '../../assets/icon_TT.png'

interface ICoinPickerProps {}

export class CoinPicker extends React.PureComponent<ICoinPickerProps> {
  render() {
    return (
      <div className="coin-picker-container">
        <div className="coin-button-container">
          <button className="coin-picker-button active">
            <img className="coin-picker-button-icon" src={TTImg} alt="" />
            TT
          </button>
        </div>
        <div className="coin-button-container">
          <button className="coin-picker-button">
            <img className="coin-picker-button-icon" src={TTUsdtImg} alt="" />
            TT USDT
          </button>
        </div>
        <div className="coin-button-container">
          <button className="coin-picker-button">
            <img className="coin-picker-button-icon" src={TTDaiImg} alt="" />
            TT DAI
          </button>
        </div>
      </div>
    )
  }
}

export default CoinPicker

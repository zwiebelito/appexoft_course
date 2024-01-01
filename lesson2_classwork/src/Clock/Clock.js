import React, { Component } from "react";

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: new Date(),
            selectedTimezone: 'UTC',
        }
    }

    componentDidMount(){
        this.intervalId = setInterval(()=>this.updateTime(), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    updateTime = ()=>{
        this.setState({
            currentTime: new Date(),
        })
    }

    handleTimeZoneChange = (e)=>{
        const newTimezone = e.target.value;
        this.setState({
            selectedTimezone: newTimezone,
        })
    }
    render() {
        const {currentTime, selectedTimezone} = this.state;
        const localTime = currentTime.toLocaleTimeString('en-US', {timeZone: selectedTimezone});
        return <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4">World Clock</h1>

            <div className="mb-4">
                <label htmlFor="timeZone" className="mr-2">
                    Select Time Zone:
                    <select id='timeZone' value={selectedTimezone} onChange={this.handleTimeZoneChange} className="p-2 border border-gray-300 rounded">
                        <option value="UTC">UTC</option>
                        <option value="Asia/Tokyo">Asia/Tokyo</option>
                        <option value="America/New_York">America/New_York</option>
                        <option value="Europe/London">Europe/London</option>
                    </select>
                </label>
            </div>
            <div className="text-2xl font-semibold">
                currentTime {selectedTimezone}: {localTime}
            </div>
        </div>;
    }
}

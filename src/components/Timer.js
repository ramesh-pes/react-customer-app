import React from 'react';
  export default class Timer extends React.Component{
      constructor(props){
          super(props);
          console.log(">>constructor");
          this.state = { 
            seconds: 0 ,
            newCountVal:5
        };
        this.handleTimerChange=this.handleTimerChange.bind(this)
      }
  
  count = 0;
  interval;
  tick() {
    this.setState((prevState) => ({
      seconds: prevState.seconds + 1
    }));
  }

  componentWillMount(){
      console.log(">>componentWillMount")
  }
  componentDidMount() { //when component added to Parent
    //called after component added to parent
    console.log(">>componentDidMount")
    this.interval = setInterval(() => this.tick(), 1000);
  }
  componentWillReceiveProps(){

  }
  componentWillUpdate(){
      
  }
  componentWillUnmount() { //when component going be removed from Parent
    clearInterval(this.interval);
  }
  stopCounter=()=>{
    this.count = 1;
    /*this.setState({
      seconds: 100
    }); */
    //this.forceUpdate();
    clearInterval(this.interval);
    console.log("interval is "+this.interval +" state:"+this.count);
  }
  reset=()=>{
    this.setState({
        seconds:0
    })
  }
  start=()=>{
    this.interval = setInterval(() => this.tick(), 1000);
  }
  handleTimerChange(e) {
      console.log("handle called: .",e.target.value);
    this.setState({newCountVal: Number(e.target.value)});
 }
  updateCounter=()=>{
    this.setState((state)=>({
        seconds:state.newCountVal
    })
    )
  }
  render() {
    return (
      <div>
        Seconds: {this.state.seconds}
        <br/>
        <input type="text" name="" value={this.state.newCountVal} onChange={this.handleTimerChange}/>
            <button onClick={this.updateCounter}>update Counter Value</button><br/><br/>

        <div><input type="button" onClick={() => this.stopCounter()} value="Stop this Counter" />
        <input type="button" onClick={() => this.reset()} value="reset this Counter" />
        <input type="button" onClick={() => this.start()} value="start this Counter" />
        </div>
      </div>
    );
  }
}
import React, { Component } from 'react';
//1:16:48

class Counter extends Component {
    state = {  
        count:0,
        tags:['tag1','tag2','tag3']
    };

    renderTags(){
        if(this.state.tags.length==0)return <p>There are no tags</p>;
        return <ul>{this.state.tags.map(tag=><li key={tag}>{tag}</li>)}</ul>
    }
    // constructor(){
    //     super();
    //     this.handleIncrement=this.handleIncrement.bind(this);
    // }

    handleIncrement=(product)=>{
        this.setState({count:this.state.count+1});
    };

    render() { 
        //let classes = this.getBadgeClasses();
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={()=>this.handleIncrement({id:1})} className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }

   

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count}=this.state
        return count===0?'Zero':count;
    }
}
 
export default Counter;
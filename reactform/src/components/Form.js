import React,{component} from 'react'
class Form extends component{
    constructor(props){
        super(props)
        this.state={
            sname:'',
            gender:'',
            gen:'',
            addr:''
        }
    }
nameHandler=(event)=>{
    this.setState({
        sname:event.target.value
    })
}
genderHandler=(event)=>{
    this.setState({
        gender:event.target.value
    })
}
addrHandler=(event)=>{
    this.setState({
        addr:event.target.value
    })
}
genHandler=(event)=>{
    this.setState({
        gen:event.target.value
    })
}
submitHandler=(event)=>{
    alert(
        "name:" +`${this.state.sname}`+
        "Gender:" +`${this.state.gender}`+
        "Radio Gender:" +`${this.state.gen}`+
        "Address:" +`${this.state.addr}`
    )
}
render(){
    return(
        <form onSubmit={this.submitHandler}>
<div>
    <label>enter the name</label>
    <input type="text"
    value={this.state.sname}
    onChange={this.nameHandler}>
    </input>
</div>
<div>
    <label>choose the gender</label>
    <select value={this.state.gender}
    onChange={this.genderHandler}>
        <option>male</option>
        <option>female</option>
    </select>
</div>
<div  value={this.state.gen}
    onChange={this.genHandler}>
   
    <label>choose the gender</label>
    <input type="radio" name="gen"
    value="male"/>
       <input type="radio" name="gen"
    value="female"/>
    </div>
    <div>
         <label>Enter the address</label>
         <textarea rows="3"
         value={this.state.addr}
    onChange={this.addrHandler}></textarea>
    </div>
    <div>
        <button>submit</button>
    </div>
        </form>
    
    )
}
}
export default Form

import './App.scss';

function App() {
  function Card(props){
    console.log(props);
     return(
        <div  className="card">
          <img className="imgRes" src={props.item.avatar_url} alt="..."/>
          <div className="caption">
            <h5>{props.item.login}</h5>
            <div className="email">{props.item.login}_{props.item.id}@email.com</div>
            <div ><b>Github</b></div>
            <cite>San Andreas</cite>
            <footer>
              <button className="btn btn-default text-left" > 
              Following
              </button>
              <button className="btn btn-default" > 
              Followers
              </button>
            </footer>
          </div>
        </div>
      )
  }
  
  function Cards (props) {
   console.log(props);
   const list=  Object.keys(props.data).map((list)=>{          
      let setItem={
        login:props.data[list].login,
        id:props.data[list].id,
        avatar_url:props.data[list].avatar_url
      };
      
     return <Card key={props.data[list].id} item={setItem}/>
    });  
    return (<div className="Cards">{list}</div>);
  }
  
  class Api extends React.Component {
     constructor(props) {
      super(props);
      this.state={
      user:'',
        length:0
    };
     }
    componentDidMount(){
        axios.get('https://api.github.com/users')
        .then(response => {       
          
          this.setState({ user: response.data,length:response.data.length });
        })
        .catch(function (error) {
          //console.log("err"+" "+error);
        })
      }
    render() {
  
      return (
        <div className="container-fluid">
    <div className="row">
      <div className="col-sm-12 col-md-12 ">  
        {this.state.length>0?(<Cards  data={this.state.user}/>):''}      
      </div>
    </div>
  </div>
      );
    }
  }
  ReactDOM.render(<Api />, document.getElementById("app"));
  
}

export default App;

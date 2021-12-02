

const Newscards =(props)=> {
  
        return (
            <div>
                <div className="card" style={{width: "18rem",marginTop:"18px"}}>
  <img src={ props.img} className="card-img-top" alt={ props.alt}/>
  <div className="card-body">
    <h5 className="card-title">{ props.title}</h5>
    <p className="card-text">{ props.desc}</p>
    <a href={ props.link}className="btn btn-primary">read more</a>
  </div>
</div>

</div>
        )
    
}

export default Newscards

const errHandandler=(err,req,res,next)=>{
    console.error(err.strack);
    res.status(500).send(err.message);
    next();
}
export default errHandandler;
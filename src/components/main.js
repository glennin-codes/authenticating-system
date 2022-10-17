 import "./main.css"
 export default function Main(){
        const [show,setShow]=useState(true)
       
        function Toggle(){
          setShow(prevShow =>!prevShow)
        }
        const[windowWidth, setWindowWidth]=useState(window.innerWidth)
         useEffect(()=>{
              window.addEventListener("resize",function(){
                  setWindowWidth(window.innerWidth)
                
                  
  
              })
         },[])
  return(
     <main className="app--wrapper">
          <div className="main--content">
                  <button className="app--button" onClick={Toggle}>Toggle window tracker!</button>
                   {show && <h2>width is:{windowWidth}</h2>}
           </div>
     </main>
  
  )
    )
 }
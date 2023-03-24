//{ 몰루 === 몰루 ? (<p>맞</p>) : (<p>안맞</p>)}

function jisung (me) { 
  
  if (me === true) { 
    
  return '<div>맞음</div>'
  } else { 
    return '<div> 안맞 </div>'
  }
}



console.log(jisung (false))

function js (tt) { 
  return '<div>' + tt + '</div>'
  return `'<div>' ${tt} '</div>'`

} 

console.log(js(jisung (false)))
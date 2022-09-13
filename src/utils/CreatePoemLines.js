


function randomIntBtw(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const CreatePoemLines = (props) => {

    let jointLine = (props.lines.map((line) => {
      return ('&nbsp;'.repeat(randomIntBtw(0, 3)) + line);
    })).join('<br/>')
    
  return (
    <p dangerouslySetInnerHTML={{__html: jointLine}} />
  )
}